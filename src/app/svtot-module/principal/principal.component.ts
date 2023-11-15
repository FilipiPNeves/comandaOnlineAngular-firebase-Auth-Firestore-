import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PratosNovo } from 'src/app/pratos-novo';
import { ShareddataService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor(
    private firestore: FirestoreService,
    private sharedDataService: ShareddataService
  ) {
    this.setPedidosClientes();
    this.setNomegarcom();
    this.getNomeGarcom();
  }

  ngOnDestroy(): void {}

  nomeGarcom: string = '';
  todosClientes: string[] = []

  setPedidosClientes() {
    this.sharedDataService.setPedidosClientes();
  }

  setNomegarcom() {
    this.sharedDataService.setNomeGarcom('');
  }

  getNomeGarcom() {
    this.sharedDataService.getNomeGarcom().subscribe((nomeGarcom) => {
      this.nomeGarcom = nomeGarcom;
    });
  }










  logout() {
    this.firestore.logoutService();
  }

  toolbarHidden = true;
  transparenteNgIf: boolean = false;
  toggleToolbar() {
    this.toolbarHidden = !this.toolbarHidden;
    this.transparenteNgIf = !this.transparenteNgIf;
  }

  buttonStyle = {
    'background-color': '#00a8e8',
    'color': 'white'
  };
}
