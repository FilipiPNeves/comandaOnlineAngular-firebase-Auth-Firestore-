import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Observable, from } from 'rxjs';





@Component({
  selector: 'app-lista-de-pedidos',
  templateUrl: './lista-de-pedidos.component.html',
  styleUrls: ['./lista-de-pedidos.component.css']
})
export class ListaDePedidosComponent {

  constructor(private firestoreService: FirestoreService) {
    this.getData();

  }




  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'nomePassanteOuQuarto', 'horario'];
  dataSource: any;

  arrayNorte: any;
  arraySul: any;

  getData() {
    this.firestoreService.getDataNorte().subscribe((val: any[]) => {
      this.arrayNorte = val;

      console.log(this.arrayNorte);

    });

    this.firestoreService.getDataSul().subscribe((val: any[]) => {
      this.arraySul = val;
      console.log(this.arraySul);

    });



  }




}
