import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Observable, from } from 'rxjs';


interface todosPedidos {
  horario: any,
  obs: any,
  pedidos: any,
  quant: any,
  nomePassanteOuQuarto: any,
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

  elementoPrincipal: todosPedidos[] = []

  elemento1: todosPedidos[] = []
  elemento2: todosPedidos[] = []
  elemento3: todosPedidos[] = []
  elemento4: todosPedidos[] = []
  elemento5: todosPedidos[] = []

  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'nomePassanteOuQuarto'];
  dataSource: todosPedidos[] = [];

  arrayNorte?: any[] = [];
  arraySul?: any[] = [];

  getData() {
    this.firestoreService.getDataNorte().subscribe((val: any[]) => {
      this.arrayNorte = val;

      for(let i=0; i < 20; i++) {

        try{
          if(this.arrayNorte[0].pratosPedidos[i+1]) {
            this.elemento1[i] = this.arrayNorte[0].pratosPedidos[i+1]
            this.elemento1[i].horario = this.arrayNorte[0].horario;
            this.elemento1[i].nomePassanteOuQuarto = 'Norte';
            this.elementoPrincipal = this.elemento1.concat()
          }
        }catch {

        }


        try{
          if(this.arrayNorte[1].pratosPedidos[i+1]) {
            this.elemento2[i] = this.arrayNorte[1].pratosPedidos[i+1]
            this.elemento2[i].horario = this.arrayNorte[0].horario;
            this.elemento2[i].nomePassanteOuQuarto = 'Norte';
            if(this.elemento1) {
              this.elementoPrincipal = this.elemento1.concat(this.elemento2)
            }else {
              this.elementoPrincipal = this.elemento2.concat()
            }
          }
        }catch {

        }


	      this.dataSource = this.elementoPrincipal;
      }



        console.log(this.elemento1);
        console.log(this.elemento2);
        console.log(this.elemento3);
        console.log(this.elemento4);
        console.log(this.elemento5);

        console.log(this.arrayNorte);
    });

    this.firestoreService.getDataSul().subscribe((val: any[]) => {
      this.arraySul = val;
      //console.log(this.arraySul);
    });



  }




}
