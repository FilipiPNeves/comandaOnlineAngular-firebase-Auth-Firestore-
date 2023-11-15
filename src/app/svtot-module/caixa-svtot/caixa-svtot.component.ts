import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PratosNovo } from 'src/app/pratos-novo';
import { ShareddataService } from 'src/app/services/shareddata.service';


@Component({
  selector: 'app-caixa-svtot',
  templateUrl: './caixa-svtot.component.html',
  styleUrls: ['./caixa-svtot.component.css']
})
export class CaixaSvtotComponent {
  constructor(private sharedDataService: ShareddataService, private router: Router) {
    this.getClientes();
  }

  todosClientes: string[] = [];
  nomeGarcom: string = '';
  arrayPedidos: PratosNovo[] = [];

  todosClientesNgFor: string[] = []

  inputNomeCliente: string = '';

  filtrarClientes() {
    const filtro = this.inputNomeCliente.toLowerCase();

    this.todosClientesNgFor = this.todosClientes.map((cliente) => cliente).filter((cliente) => cliente.toLowerCase().includes(filtro));
  }

  clearFiltro() {
    this.inputNomeCliente = '';
    this.filtrarClientes();
  }

  getClientes() {
    this.sharedDataService.getClientes().subscribe((clientes) => {
      this.todosClientes = clientes;
      this.todosClientesNgFor = clientes;
    });
  }



  selectItem(nomeCliente: string) {
    this.router.navigate(['/principal/pedidoscaixa', nomeCliente]);
  }
}
