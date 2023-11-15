import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MatTableDataSource } from '@angular/material/table';

export interface Pedido {
  nomeQuartoOuPassante: any;
  prato: any;
  valor: any;
  valorTotal: any;
  obs: any;
  quant: any;
  horario: any;
  nomeGarcom: any;
  dezporcento: any;
}

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {

  pedidos: Pedido[] = [];
  dataInicial: any; // Inicialize com a data desejada
  dataFinal: any; // Inicialize com a data desejada
  pedidosContainer: boolean = false;
  filtroDatas: boolean = true;

  displayedColumns: string[] = ['nomeQuartoOuPassante', 'prato', 'valor', 'valorTotal', 'obs', 'quant', 'horario', 'nomeGarcom'];
  dataSource = new MatTableDataSource(this.pedidos);

  valorFaturado: number = 0;
  valorTotal10porcento: number = 0;
  valorRestanteTotal: number = 0;

  constructor(private firestoreService: FirestoreService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async pesquisarPedidos() {
    if (this.dataInicial && this.dataFinal) {
      // Formate as datas para o formato 'dd/mm/aaaa'
      const dataInicialFormatada = this.formatarData(this.dataInicial);
      const dataFinalFormatada = this.formatarData(this.dataFinal);

      // Extrair dia, mês e ano das datas
      const diaInicial = +dataInicialFormatada.split('/')[0];
      const mesInicial = +dataInicialFormatada.split('/')[1];
      const anoInicial = +dataInicialFormatada.split('/')[2];

      const diaFinal = +dataFinalFormatada.split('/')[0];
      const mesFinal = +dataFinalFormatada.split('/')[1];
      const anoFinal = +dataFinalFormatada.split('/')[2];

      // Busque os pedidos do Firestore com base nas datas
      this.firestoreService.getRelatorio().subscribe((pedidos: any[]) => {
        this.pedidos = pedidos.filter((pedido) => {
          const dataPedido = pedido.horario.split(' ')[1]; // Obtém a data (dd/mm/aaaa)
          const diaPedido = +dataPedido.split('/')[0];
          const mesPedido = +dataPedido.split('/')[1];
          const anoPedido = +dataPedido.split('/')[2];

          // Compare as datas considerando dia, mês e ano
          if (anoPedido < anoInicial || anoPedido > anoFinal) return false;
          if (anoPedido === anoInicial && mesPedido < mesInicial) return false;
          if (anoPedido === anoFinal && mesPedido > mesFinal) return false;
          if (
            (anoPedido === anoInicial && mesPedido === mesInicial && diaPedido < diaInicial) ||
            (anoPedido === anoFinal && mesPedido === mesFinal && diaPedido > diaFinal)
          ) {
            return false;
          }

          return true;
        });

        this.pedidos.sort((a, b) => {
          const dataA = a.horario.split(' ')[1]; // Obtém a data (dd/mm/aaaa) do pedido A
          const dataB = b.horario.split(' ')[1]; // Obtém a data (dd/mm/aaaa) do pedido B

          // Divida as datas em dia, mês e ano
          const diaA = +dataA.split('/')[0];
          const mesA = +dataA.split('/')[1];
          const anoA = +dataA.split('/')[2];

          const diaB = +dataB.split('/')[0];
          const mesB = +dataB.split('/')[1];
          const anoB = +dataB.split('/')[2];

          // Compara as datas considerando dia, mês e ano
          if (anoA < anoB) return -1;
          if (anoA > anoB) return 1;
          if (mesA < mesB) return -1;
          if (mesA > mesB) return 1;
          if (diaA < diaB) return -1;
          if (diaA > diaB) return 1;

          return 0; // se as datas forem iguais
        });

        let valorTotal10porcento = 0;
        let valorGanhoSem10porcento = 0;

        this.pedidos.forEach((pedido) => {
          if (pedido.dezporcento) {
            valorTotal10porcento += (pedido.valor * pedido.quant);
          }else {
            valorGanhoSem10porcento += (pedido.valor * pedido.quant);
          }
        });
        this.valorFaturado = valorTotal10porcento;
        valorTotal10porcento = (valorTotal10porcento * 10) / 110;
        this.valorFaturado = this.valorFaturado - valorTotal10porcento + valorGanhoSem10porcento;
        this.valorTotal10porcento = valorTotal10porcento;
        this.valorRestanteTotal = this.valorFaturado + this.valorTotal10porcento;
        this.dataSource = new MatTableDataSource(this.pedidos);
      });

      this.filtroDatas = false;
      this.pedidosContainer = true;
    } else {
      alert("Datas não definidas!");
    }
  }


  novaPesquisa() {
    this.filtroDatas = true;
    this.pedidosContainer = false;
  }



  formatarData(data: any): string {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  formatarValor(valor: number): string {
    const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
  }
}
