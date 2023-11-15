import { Component, ElementRef, HostListener } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
import { DialogOpcoesPedidosComponent } from 'src/app/dialogs/dialog-opcoes-pedidos/dialog-opcoes-pedidos.component';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { entradas, pasteis, lanches, petiscos, frangos, contraFiles, saladas, risotos, sopas, frutosDoMar, massas, bebidasCompleto, alcool, sobremesas } from 'src/app/shared/pratos';

interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
  feito: any,
  nomeGarcom: any
}


interface Pratos {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-lista-de-pedidos',
  templateUrl: './lista-de-pedidos.component.html',
  styleUrls: ['./lista-de-pedidos.component.css']
})
export class ListaDePedidosComponent {
  constructor(
    private firestoreService: FirestoreService,
    private _eref: ElementRef,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.getData();
    this.requestNotificationPermission();
    this.getImprimir();
  }



  arrayImprimirPedidos: any[] = []

  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'nomeQuartoOuPassante'];
  dataSource: todosPedidos[] = [];
  pedidos: todosPedidos[] = [];
  dataSource2 = new MatTableDataSource(this.pedidos);

  flagPopUp = false;
  idPopUp = '';
  pratoPopUp = '';
  quartoPopUp = '';
  horarioPopUp = '';
  obsPopUp = '';
  valorPopUp = 0;
  quantPopUp = 0;
  nomeGarcom = '';

  arrayClientes: string[] = []

  pratoAntigoOuAtual = '';

  flagDivEditarPedido = false;

  feito: any = false;

  flagPopUpExcluirPedido: boolean = false;

  imprimir: any[] = [];
  cozinhaLigadoOuDesligado: boolean = false;

  async requestNotificationPermission() {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.warn('Permissão para notificações não concedida');
      }
    } else {
      console.warn('Este navegador não suporta notificações');
    }
  }

  funcao() {
    this.arrayClientes[0]
  }


  getData() {
    this.firestoreService.getPedidos()
      .pipe(
        debounceTime(1000),
        distinctUntilChanged((prev: todosPedidos[], curr: todosPedidos[]) => {
          return JSON.stringify(prev) === JSON.stringify(curr);
        })
      )
      .subscribe({
        next: (val: todosPedidos[]) => {
          if (this.dataSource.length < val.length) {
            this.notifyNewElement();
          }
          this.dataSource = val;
          this.dataSource2 = new MatTableDataSource(val);
          this.arrayClientes = [...new Set(this.dataSource.map(item => item.nomeQuartoOuPassante))];
          this.imprimirArrayClientes(this.arrayClientes[0])
        },
        error: (error: any) => {
          console.error("Ocorreu um erro ao buscar os pedidos:", error);
        }
      });
  }


  imprimirArrayClientes(cliente: string) {
    let gruposDeClientes: any[] = [];
    let grupoAtual: any[] = [];

    for (let i = 0; i < this.dataSource.length; i++) {
      const obj = this.dataSource[i];

      if (obj.nomeQuartoOuPassante === cliente) {
        grupoAtual.push(obj);
      } else {
        if (grupoAtual.length > 0) {
          gruposDeClientes.push(grupoAtual);
        }
        grupoAtual = [];
      }
    }

    // Verificar se o último grupo deve ser adicionado
    if (grupoAtual.length > 0) {
      gruposDeClientes.push(grupoAtual);
    }

    this.imprimirPedidosDoArrayCerto(gruposDeClientes[0]);
  }

  converterNumeroParaHora(numero: any) {
    // Extrai a parte inteira e decimal do número
    let parteInteira = Math.floor(numero);
    let parteDecimal = Math.round((numero - parteInteira) * 60);

    // Formata a string no formato "HH:MM"
    let hora = parteInteira.toString().padStart(2, '0');
    let minutos = parteDecimal.toString().padStart(2, '0');

    return `${hora}:${minutos}`;
  }

  notifyNewElement() {
    // Verifica se o usuário está na rota correta ou se a última rota dele foi essa
    const currentUrl = this.router.url;
    const lastUrl = localStorage.getItem('lastUrl');
    if (currentUrl !== '/home/listadepedidos' && lastUrl !== '/home/listadepedidos') {
        return;
    }

    // Salva a última rota do usuário
    localStorage.setItem('lastUrl', currentUrl);

    // Checar suporte a notificações e permissão
    if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification('Novo Pedido!', { silent: false });
        if ('vibrate' in navigator) {
            navigator.vibrate(500); // Vibração por 500ms
        }
    }
  }


  onRowClicked(
    row: any
    ) {
    this.idPopUp = row.id;
    this.quartoPopUp = row.nomeQuartoOuPassante;
    this.pratoPopUp = row.prato;
    this.pratoAntigoOuAtual = row.prato;
    this.horarioPopUp = row.horario;
    this.obsPopUp = row.obs;
    this.valorPopUp = row.valor;
    this.quantPopUp = row.quant;
    this.nomeGarcom = row.nomeGarcom;

    this.openDialog(row);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  getRouter() {
    const rotaAtual: string = this.router.url;
    return rotaAtual;
  }

  openDialog(row: any): void {
    const rota = this.getRouter();
    const dialogRef = this.dialog.open(DialogOpcoesPedidosComponent, {
      width: '350px', // Defina a largura do diálogo conforme necessário
      data: { id: row.id, prato: row.prato, quarto: row.nomeQuartoOuPassante, horario: row.horario, obs: row.obs, valor: row.valor, quant: row.quant, nomeGarcom: row.nomeGarcom, rota: rota},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.feito) {
        this.firestoreService.pedidoFeito(result.id, result.prato, result.quarto, result.horario, result.obs, result.valor, result.quant, result.nomeGarcom);
        const pedidoParaImprimir = {
          prato: result.prato,
          quarto: result.quarto,
          horario: result.horario,
          obs: result.obs,
          quantidade: result.quant
        };
        this.firestoreService.enviarPedidosParaImprimir(pedidoParaImprimir);
      }else if(result.excluir) {
        this.firestoreService.excluirPedido(result.id);
      }
    });
  }

  @HostListener('document:click', ['$event'])
  closePopUp(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.flagPopUp = false;
    }
  }

  pedidoSendoFeito(idPopUp: string) {
    this.firestoreService.pedidoSendoFeito(idPopUp);
    this.flagPopUp = false;
  }









  async imprimirPedidosDoArrayCerto(array: any[]) {
    // Formate os pedidos como uma comanda
    const textoFormatado = this.formatarPedidosComoComandaCerto(array);

    // Abra uma nova aba com o conteúdo formatado
    const novaAba = window.open('', '_blank', 'height=500,width=500');
    novaAba?.document.open();
    novaAba?.document.write('<html><body>');
    novaAba?.document.write('<div style="transform: rotate(90deg); display: flex; flex-direction: row; flex-wrap: wrap;">'); // Rotacionar a página em 90 graus
    novaAba?.document.write(`<pre>${textoFormatado}</pre>`);
    novaAba?.document.write('</div>'); // Fim da rotação
    novaAba?.document.write('</body></html>');
    novaAba?.document.close();

    // Acione o comando de impressão na nova aba
    novaAba?.print();
    novaAba?.close();

    array.forEach(element => {
      this.firestoreService.pedidoFeito(element.id, element.prato, element.nomeQuartoOuPassante, element.horario, element.obs, element.valor, element.quant, element.nomeGarcom);
    });
  }

  metodod(any: string) {
    let array = any.split(" ");
    let result = '';
    array.forEach(element => {
      result += element + "<br>"
    });
    return result;
  }

  formatarPedidosComoComandaCerto(pedidos: any[]): string {
    let textoFormatado = '';

    textoFormatado += `<div style="display: inline-block; width: 120px; border-right: 1px solid black; height: 100%; text-align: center;"><div style="font-size: 25px; margin: 3em 0 1em -2em;">${this.formatarHorario(pedidos[0].horario)}</div><div style="font-size: 20px; margin: 0 0 0 -2em;">${this.metodod(pedidos[0].quarto || pedidos[0].nomeQuartoOuPassante)}</div></div>`;

    pedidos.forEach((pedido) => {
      textoFormatado += '<div style="margin: 15px 0.7em; padding: 10px; display: inline-block; width: 280px; border-right: 1px solid black; vertical-align: top; text-align: center; height: 100%;">';

      if (pedido.prato.length <= 14) {
        textoFormatado += `<h1 style="font-size: 30px; text-transform: uppercase;">${pedido.prato}</h1></span>`;
      } else if (pedido.prato.length >= 15 && pedido.prato.length <= 28) {
        const primeiraParte = pedido.prato.substring(0, 14);
        const segundaParte = pedido.prato.substring(14);
        textoFormatado += `<h1 style="font-size: 30px; text-transform: uppercase;">${primeiraParte}<br>${segundaParte}</h1></span>`;
      } else if (pedido.prato.length >= 29 && pedido.prato.length <= 42) {
        const primeiraParte = pedido.prato.substring(0, 14);
        const segundaParte = pedido.prato.substring(14, 28);
        const terceiraParte = pedido.prato.substring(28);
        textoFormatado += `<h1 style="font-size: 30px; text-transform: uppercase;">${primeiraParte}<br>${segundaParte}<br>${terceiraParte}</h1></span>`;
      } else if (pedido.prato.length >= 43) {
        const primeiraParte = pedido.prato.substring(0, 14);
        const segundaParte = pedido.prato.substring(14, 28);
        const terceiraParte = pedido.prato.substring(28, 42);
        const quartaParte = pedido.prato.substring(42);
        textoFormatado += `<h1 style="font-size: 30px; text-transform: uppercase;">${primeiraParte}<br>${segundaParte}<br>${terceiraParte}<br>${quartaParte}</h1></span>`;
      }

      textoFormatado += `<h3 style="font-size: 25px;">Quant: ${pedido.quantidade || pedido.quant}</h3>`;

      if (pedido.obs) {
        textoFormatado += `<h3 style="font-size: 25px;">Obs: `;
        const partesObs: string[] = this.dividirTexto(pedido.obs, 10);
        partesObs.forEach((parte, indice) => {
          textoFormatado += `${parte}<br>`;
        });
        textoFormatado += `</h3>`;
      } else {
        textoFormatado += `<h3 style="font-size: 25px;">Obs: <br></h3>`;
      }
      textoFormatado += `</div>`;
    });

    return textoFormatado;
  }







  dividirTexto(texto: string, limite: number): string[] {
    const partes: string[] = [];
    while (texto.length > limite) {
      partes.push(texto.substr(0, limite));
      texto = texto.substr(limite);
    }
    partes.push(texto);
    return partes;
  }

  private formatarHorario(horarioDecimal: number): string {
    const horas = Math.floor(horarioDecimal);
    const minutos = Math.floor((horarioDecimal % 1) * 60);
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos.toString();
    return `${horas}:${minutosFormatados}`;
  }

  getImprimir(): void {
    this.firestoreService.getImprimir().subscribe((pedidos: any[]) => {
      this.arrayImprimirPedidos = pedidos;
    });
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    if (target.classList.contains('confirm-dialog-backdrop')) {
      this.fecharDialog();
    }
  }

  // Função para fechar o diálogo
  fecharDialog(): void {
    let confirmDialog = document.getElementById('confirm-dialog');

    confirmDialog!.style.display = 'none';
  }
}
