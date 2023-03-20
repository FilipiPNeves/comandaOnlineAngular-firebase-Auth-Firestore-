import { FirestoreService } from 'src/app/services/firestore.service';
import { Component } from '@angular/core';

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

  constructor(private firestoreService: FirestoreService) {
    this.getData();
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

  getData() {
    this.firestoreService.getPedidosFeitos().subscribe((val: todosPedidos[]) => {
      this.dataSource = val;
    });
  }

  onRowClicked(id: string, prato: string, quarto: string, horario: string, obs: string, valor: number, quantidade: number) {
    this.flagPopUp = true;
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
  }


}
