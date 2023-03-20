import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';


interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
}


@Component({
  selector: 'app-lista-de-pedidos',
  templateUrl: './lista-de-pedidos.component.html',
  styleUrls: ['./lista-de-pedidos.component.css']
})
export class ListaDePedidosComponent {

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
    this.firestoreService.getPedidos().subscribe((val: todosPedidos[]) => {
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

  pedidoFeito(id: string,  prato: string, quarto: string, horario: string, obs: string, valor: number, quantidade: number) {
    this.firestoreService.pedidoFeito(id, prato, quarto, horario, obs, valor, quantidade)
  }
}
