import { Component, ElementRef, HostListener } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
import { DialogOpcoesPedidosComponent } from 'src/app/dialogs/dialog-opcoes-pedidos/dialog-opcoes-pedidos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
  nomeGarcom: any
}


interface Pratos {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {
  constructor(
    private firestoreService: FirestoreService,
    private _eref: ElementRef,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.getData();
    this.requestNotificationPermission();
  }


  arrayImprimirPedidos: any[] = []

  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'nomeQuartoOuPassante'];

  pedidos: todosPedidos[] = [];

  dataSource = new MatTableDataSource(this.pedidos);


  flagPopUp = false;
  idPopUp = '';
  pratoPopUp = '';
  quartoPopUp = '';
  horarioPopUp = '';
  obsPopUp = '';
  valorPopUp = 0;
  quantPopUp = 0;
  nomeGarcom = '';

  pratoAntigoOuAtual = '';

  flagDivEditarPedido = false;


  flagPopUpExcluirPedido: boolean = false;

  filter: string = '';

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filter = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const valorSelecionado = event.option.viewValue;
    this.filter = valorSelecionado;
    this.dataSource.filter = valorSelecionado.trim().toLowerCase();
  }

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

  nomesClientes: string[] = []

  getData() {
    this.firestoreService.getBebidas().subscribe((pedidos: todosPedidos[]) => {
      const oldLength = this.pedidos.length;
      this.pedidos = pedidos;
      this.dataSource = new MatTableDataSource(this.pedidos);
      this.filter = this.filter.trim().toLowerCase();
      this.dataSource.filter = this.filter;

      this.pedidos.forEach(pedido => {
        const nome = pedido.nomeQuartoOuPassante;

        if (!this.nomesClientes.includes(nome)) {
          this.nomesClientes.push(nome);
        }
      });

      if (this.pedidos.length > oldLength) {
        this.notifyNewElement();
      }
    });
  }

  imprimir: any[] = [];
  cozinhaLigadoOuDesligado: boolean = false;

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

    // Verifica se a tela do usuário está oculta
    if ('visibilityState' in document && document.visibilityState !== 'visible') {
      // Salva a última rota do usuário
      localStorage.setItem('lastUrl', currentUrl);

      if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification('Novo Pedido', { silent: true });
        if ('vibrate' in navigator) {
          navigator.vibrate(500); // Vibração por 500ms
        }
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


  pedidoFeito(
    id: string,
    prato: string,
    quarto: string,
    horario: string,
    obs: string,
    valor: number,
    quantidade: number,
    nomeGarcom: string
  ) {
    this.flagPopUp = false
    this.firestoreService.pedidoFeitoBebidas(id, prato, quarto, horario, obs, valor, quantidade, nomeGarcom);
  }

  @HostListener('document:click', ['$event'])
  closePopUp(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.flagPopUp = false;
    }
  }


  excluirPedido() {
    this.flagPopUpExcluirPedido = true;
    this.flagPopUp = false;
  }

  onConfirm() {
    this.firestoreService.excluirPedidoBebidas(this.idPopUp);
    this.flagPopUpExcluirPedido = false;
  }

  onCancel() {
    this.flagPopUpExcluirPedido = false;
  }

  editarPedido() {
    this.flagPopUp = false;
    this.flagDivEditarPedido = true;
  }

  fecharDivEditar() {
    this.flagDivEditarPedido = false;
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
      this.firestoreService.updatePedidoBebidas(obj, this.idPopUp);
      alert("Alteração concluida com sucesso!")
    }catch{
      alert("Alteração não concluida!")
    }
    this.flagDivEditarPedido = false;
  }

  pedidoSendoFeito(idPopUp: string) {
    this.firestoreService.pedidoSendoFeito(idPopUp);
    this.flagPopUp = false;
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
        this.firestoreService.pedidoFeitoBebidas(result.id, result.prato, result.quarto, result.horario, result.obs, result.valor, result.quant, result.nomeGarcom);
      }else if(result.excluir) {
        this.firestoreService.excluirPedidoBebidas(result.id);
      }
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
