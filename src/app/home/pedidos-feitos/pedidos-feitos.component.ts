import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
}


@Component({
  selector: 'app-pedidos-feitos',
  templateUrl: './pedidos-feitos.component.html',
  styleUrls: ['./pedidos-feitos.component.css']
})
export class PedidosFeitosComponent {

  constructor(
    private firestoreService: FirestoreService,
    private _eref: ElementRef,
    private router: Router
    ) {
    this.getData();
    this.requestNotificationPermission();
  }

  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'nomeQuartoOuPassante'];
  dataSource: todosPedidos[] = [];

  flagPopUp: boolean = false;
  idPopUp: string = '';
  pratoPopUp: string = '';
  quartoPopUp: string = '';
  horarioPopUp: string = '';
  obsPopUp: string = '';
  valorPopUp: number = 0;
  quantPopUp: number = 0;

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

  notifyNewElement() {
    // Verifica se o usuário está na rota correta ou se a última rota dele foi essa
    const currentUrl = this.router.url;
    const lastUrl = localStorage.getItem('lastUrl');
    if (currentUrl !== '/home/pedidosfeitos' && lastUrl !== '/home/pedidosfeitos') {
      return;
    }

    // Verifica se a tela do usuário está oculta
    if ('visibilityState' in document && document.visibilityState !== 'visible') {
      // Salva a última rota do usuário
      localStorage.setItem('lastUrl', currentUrl);

      if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification('Pedido Feito', { silent: true });
        if ('vibrate' in navigator) {
          navigator.vibrate(500); // Vibração por 500ms
        }
      }
    }
  }

  getData() {
    this.firestoreService.getPedidosFeitos().subscribe((val: todosPedidos[]) => {
      const oldLength = this.dataSource.length;
      this.dataSource = val;

      if (this.dataSource.length > oldLength) {
        this.notifyNewElement();
      }
    });
  }

  onRowClicked(id: string, prato: string, quarto: string, horario: string, obs: string, valor: number, quantidade: number) {
    if(this.flagPopUp == true) {
      this.flagPopUp = false;
    }else this.flagPopUp = true;

    this.idPopUp = id;
    this.quartoPopUp = quarto;
    this.pratoPopUp = prato;
    this.horarioPopUp = horario;
    this.obsPopUp = obs;
    this.valorPopUp = valor;
    this.quantPopUp = quantidade;
  }

  pedidoServido(id: string,  prato: string, quarto: string, horario: string, obs: string, valor: number, quantidade: number) {
    this.firestoreService.pedidoServido(id, prato, quarto, horario, obs, valor, quantidade);
    this.flagPopUp = false;
  }

  @HostListener('document:click', ['$event'])
  closePopUp(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.flagPopUp = false;
    }
  }


}
