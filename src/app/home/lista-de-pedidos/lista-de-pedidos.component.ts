import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Observable, from, forkJoin  } from 'rxjs';


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

  arrayNorte: todosPedidos[] = [];
  arraySul: todosPedidos[] = [];
  arrayLeste: todosPedidos[] = [];
  arraySol: todosPedidos[] = [];
  arrayMaster1: todosPedidos[] = [];
  arrayMaster2: todosPedidos[] = [];
  arrayMaster3: todosPedidos[] = [];
  arrayMaster4: todosPedidos[] = [];
  arrayMaster5: todosPedidos[] = [];
  arrayVip1: todosPedidos[] = [];
  arrayVip2: todosPedidos[] = [];
  arrayVip3: todosPedidos[] = [];
  arrayIlha: todosPedidos[] = [];
  arrayChale: todosPedidos[] = [];

  getData() {


    this.firestoreService.getDataNorte().subscribe((val: any[]) => {
      this.arrayNorte = val;
      this.dataSource = this.arrayNorte;

      this.firestoreService.getDataSul().subscribe((val: any[]) => {
        this.arraySul = val;
        this.dataSource = this.arrayNorte.concat(this.arraySul);

        this.firestoreService.getDataLeste().subscribe((val: any[]) => {
          this.arrayLeste = val;
          this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste);

          this.firestoreService.getDataSol().subscribe((val: any[]) => {
            this.arraySol = val;
            this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol);

            this.firestoreService.getDataMaster1().subscribe((val: any[]) => {
              this.arrayMaster1 = val;
              this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1);

              this.firestoreService.getDataMaster2().subscribe((val: any[]) => {
                this.arrayMaster2 = val;
                this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2);

                this.firestoreService.getDataMaster3().subscribe((val: any[]) => {
                  this.arrayMaster3 = val;
                  this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2, this.arrayMaster3);

                  this.firestoreService.getDataMaster4().subscribe((val: any[]) => {
                    this.arrayMaster4 = val;
                    this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2, this.arrayMaster3, this.arrayMaster4);


                    this.firestoreService.getDataMaster5().subscribe((val: any[]) => {
                      this.arrayMaster5 = val;
                      this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2, this.arrayMaster3, this.arrayMaster4, this.arrayMaster5);

                      this.firestoreService.getDataVip1().subscribe((val: any[]) => {
                        this.arrayVip1 = val;
                        this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2, this.arrayMaster3, this.arrayMaster4, this.arrayMaster5, this.arrayVip1);

                        this.firestoreService.getDataVip2().subscribe((val: any[]) => {
                          this.arrayVip2 = val;
                          this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2, this.arrayMaster3, this.arrayMaster4, this.arrayMaster5, this.arrayVip1, this.arrayVip2);

                          this.firestoreService.getDataVip3().subscribe((val: any[]) => {
                            this.arrayVip3 = val;
                            this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2, this.arrayMaster3, this.arrayMaster4, this.arrayMaster5, this.arrayVip1, this.arrayVip2, this.arrayVip3);

                            this.firestoreService.getDataIlha().subscribe((val: any[]) => {
                              this.arrayIlha = val;
                              this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2, this.arrayMaster3, this.arrayMaster4, this.arrayMaster5, this.arrayVip1, this.arrayVip2, this.arrayVip3, this.arrayIlha);

                              this.firestoreService.getDataChale().subscribe((val: any[]) => {
                                this.arrayChale = val;
                                this.dataSource = this.arrayNorte.concat(this.arraySul, this.arrayLeste, this.arraySol, this.arrayMaster1, this.arrayMaster2, this.arrayMaster3, this.arrayMaster4, this.arrayMaster5, this.arrayVip1, this.arrayVip2, this.arrayVip3, this.arrayIlha, this.arrayChale);

                                this.dataSource.sort((a, b) => {
                                  if (a.horario < b.horario) {
                                    return -1;
                                  } else if (a.horario > b.horario) {
                                    return 1;
                                  } else {
                                    return 0;
                                  }
                                });
                              });
                            });
                          });

                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });








    this.firestoreService.getDataChale().subscribe((val: any[]) => {
      this.arrayChale = val;

      console.log(this.arrayChale);
    });




  }
}
