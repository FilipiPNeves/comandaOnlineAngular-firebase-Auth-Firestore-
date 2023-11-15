import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogOpcoesPedidosComponent } from 'src/app/dialogs/dialog-opcoes-pedidos/dialog-opcoes-pedidos.component';
import { DialogFinalizarComandaComponent } from 'src/app/dialogs/dialog-finalizar-comanda/dialog-finalizar-comanda.component';

interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
  id: any,
  nomeGarcom: any
}

interface Pratos {
  nome: string;
  valor: number;
}



@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  selectedOption: string = '';
  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'valor', 'valorTotal'];
  dataSource: todosPedidos[] = [];
  idPopUp: string = '';
  pratoPopUp: string = '';
  quartoPopUp: string = '';
  horarioPopUp: string = '';
  obsPopUp: string = '';
  valorPopUp: number = 0;
  quantPopUp: number = 0;
  valorTotal: number = 0;

  valorPago!: number;

  flagPopUp = false;
  flagDivEditarPedido = false;

  pratoAntigoOuAtual = '';
  feito = '';

  teste = true;

  nomeGarcom: any;
  ngIfImprimirFinzalizarComanda: boolean = false;

  @ViewChild('popUpDivv', { static: false }) popUpDivv!: ElementRef;

  constructor(
    private firestoreService: FirestoreService,
    private _eref: ElementRef,
    public dialog: MatDialog,
    public router: Router,
  ) {
    this.getNomeGarcom();
  }



  ngOnInit() {
    this.firestoreService.getServidos().subscribe((val: todosPedidos[]) => {
      // Filtra os valores duplicados
      this.options = val.map((pedido: todosPedidos) => pedido.nomeQuartoOuPassante)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedOption = event.option.value;
    this.getData(this.selectedOption);
  }

  async getData(option: any) {
    this.firestoreService.getServidos().subscribe((val: todosPedidos[]) => {
      this.dataSource = val.filter((pedido: todosPedidos) => {
        return pedido.nomeQuartoOuPassante === option;
      });
      this.dataSource.reverse();
      this.valorTotal = 0;
      this.dataSource.forEach(pedido => {
        this.valorTotal += Number(pedido.valor * pedido.quant);
      });
    });
  }

  openDialogg(): void {
    if(this.selectedOption){
      const dialogRef = this.dialog.open(DialogFinalizarComandaComponent, {
        width: '450px',
        data: { valorTotal: this.valorTotal, dataSource: this.dataSource },
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  formatarValorComoDinheiro(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  onRowClicked(
    row: any
  ) {
    if(this.nomeGarcom === "Ellensousa171208" || this.nomeGarcom === "Maxwellschelck9" || this.nomeGarcom === "Filipi_fg" || this.nomeGarcom === "Adriana") {
      this.openDialogCerto(row);

      this.idPopUp = row.id;
      this.quartoPopUp = row.nomeQuartoOuPassante;
      this.pratoPopUp = row.prato;
      this.pratoAntigoOuAtual = row.prato;
      this.horarioPopUp = row.horario;
      this.obsPopUp = row.obs;
      this.valorPopUp = row.valor;
      this.quantPopUp = row.quant;

      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Isso faz com que a rolagem seja suave (opcional)
      });
    }else {
      return;
    }

  }

  getRouter() {
    const rotaAtual: string = this.router.url;
    return rotaAtual;
  }

  openDialogCerto(row: any): void {
    const rota = this.getRouter();
    const dialogRef = this.dialog.open(DialogOpcoesPedidosComponent, {
      width: '350px', // Defina a largura do diálogo conforme necessário
      data: { id: row.id, prato: row.prato, quarto: row.nomeQuartoOuPassante, horario: row.horario, obs: row.obs, valor: row.valor, quant: row.quant, nomeGarcom: row.nomeGarcom, rota: rota},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.excluir) {
        this.firestoreService.excluirPedidoCaixa(result.id);
      }
    });
  }

  excluirPedido() {
    if (window.confirm("Tem certeza que deseja excluir este pedido?")) {
      this.firestoreService.excluirPedidoCaixa(this.idPopUp);
      this.idPopUp = '';
    }
    this.flagPopUp = false;
  }

  editarPedido() {
    this.flagDivEditarPedido = true;
    this.flagPopUp = false;
  }

  salvarEdicao(pedido: any) {

    let obj = {
      horario: this.horarioPopUp,
      nomeQuartoOuPassante: this.quartoPopUp,
      obs: pedido.value.obs,
      prato: pedido.value.prato.nome,
      quant: pedido.value.quantidade,
      valor: pedido.value.prato.valor
    }

    try{
      this.firestoreService.updatePedidoCaixa(obj, this.idPopUp);
      alert("Alteração concluida com sucesso!")
    }catch{
      alert("Alteração não concluida!")
    }
    this.flagDivEditarPedido = false;
  }

  fecharDivEditar() {
    this.flagDivEditarPedido = false;
  }

  fecharDivPopUp() {
    this.flagPopUp = false;
  }


  imprimirComanda() {
    let totalPedido = 0;
    if (this.dataSource && this.dataSource.length > 0) {
      let imprimir = '<div style="border: 1px solid #000; padding: 10px; margin: 20px;">';
      imprimir += '<div style="text-align: center; font-weight: bold; font-size: 16px;">Sentinelas do Mar</div>';
      imprimir += `<div style="text-align: center; border-bottom: black solid 1px; width: 120%; margin: 0 0 10px -10px"></div>`;
      imprimir += `<div style="text-align: center; font-weight: bold; font-size: 16px;">${this.dataSource[0].nomeQuartoOuPassante}</div>`;      imprimir += `<div style="display: flex;">
      <p style="font-size: 11px; width: 45%; text-align: center;">Pedido</p>
      <p style="font-size: 11px; width: 20%; text-align: center;">Qnt</p>
      <p style="font-size: 11px; width: 35%; text-align: center;">R$(Unid)</p>
      </div>`;

      this.dataSource.forEach((pedido) => {
        totalPedido += (pedido.valor * pedido.quant);
        imprimir += `<div style="display: flex;"><div style="font-size: 9px; width: 45%; text-align: center;">${pedido.prato}</div>`;
        imprimir += `<div style="font-size: 9px; width: 20%; text-align: center;">${pedido.quant}</div>`;
        imprimir += `<div style="font-size: 9px; width: 35%; text-align: center;">${this.formatarValorComoDinheiro(pedido.valor)}</div></div>`;
      });

      imprimir += '<div style="text-align: center;">---------------------------</div>';
      imprimir += `<div style="text-align: center; font-size: 12">Valor Total: ${this.formatarValorComoDinheiro(totalPedido)}<br>Valor 10%: ${this.formatarValorComoDinheiro(totalPedido*0.1)}<br>Novo Total: ${this.formatarValorComoDinheiro(totalPedido*1.1)}</div>`;
      imprimir += `<div style="text-align: center; border-bottom: black solid 1px; width: 120%; margin: 16px 0 10px -10px"></div>`;

      let dataHora = this.obterDataEHoraAtuais();

      imprimir += `<div style="display: flex; justify-content: space-between; margin: -5px 0 -10px ;"><div style="font-size: 10px;">${dataHora.data}</div><div style="font-size: 10px;">${dataHora.hora}</div></div>`;
      imprimir += '</div>';

      // Formate os pedidos como uma comanda
      const textoFormatado = imprimir;

      // Abra uma nova aba com o conteúdo formatado
      const novaAba = window.open('', '_blank', 'height=500,width=500');
      novaAba?.document.open();
      novaAba?.document.write('<html><head><title>Comanda de Pedidos</title></head><body>');

      // Estilos CSS para a impressão
      novaAba?.document.write(`
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 10px;
          }
          div {
            margin-bottom: 5px;
          }
        </style>
      `);

      novaAba?.document.write(`<div>${textoFormatado}</div>`);
      novaAba?.document.write('</body></html>');
      novaAba?.document.close();

      novaAba?.print();
      novaAba?.close();
    } else {
      console.log('Não há pedidos para imprimir.');
    }
  }

  obterDataEHoraAtuais(): { data: string; hora: string } {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Os meses começam em zero
    const ano = String(dataAtual.getFullYear()).slice(-2); // Pegue os dois últimos dígitos do ano
    const horas = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');

    const dataFormatada = `${dia}/${mes}/${ano}`;
    const horaFormatada = `${horas}:${minutos}`;

    return { data: dataFormatada, hora: horaFormatada };
  }

  getNomeGarcom() {
    this.firestoreService.getNomeGarcomService().subscribe((email) => {
      this.nomeGarcom = email.charAt(0).toUpperCase() + email.slice(1).split(/@/)[0];
      if(this.nomeGarcom === "Ellensousa171208" || this.nomeGarcom === "Maxwellschelck9" || this.nomeGarcom === "Filipi_fg" || this.nomeGarcom === "Adriana") {
        this.ngIfImprimirFinzalizarComanda = true;
      }
    })
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

