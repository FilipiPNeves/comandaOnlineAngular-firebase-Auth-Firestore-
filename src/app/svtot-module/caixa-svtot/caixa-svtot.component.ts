import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogNovoOpcoesComponent } from 'src/app/dialogs/dialog-novo-opcoes/dialog-novo-opcoes.component';
import { PratosNovo } from 'src/app/pratos-novo';
import { ShareddataService } from 'src/app/services/shareddata.service';


@Component({
  selector: 'app-caixa-svtot',
  templateUrl: './caixa-svtot.component.html',
  styleUrls: ['./caixa-svtot.component.css']
})
export class CaixaSvtotComponent {
  constructor(private sharedDataService: ShareddataService, private router: Router, private dialog: MatDialog,) {
    this.getClientes();
    this.adjustGrid();
  }

  cols: number = 3;
  rowHeight: string = '1:1';

  todosClientes: string[] = [];
  nomeGarcom: string = '';
  arrayPedidos: PratosNovo[] = [];
  todosClientesNgFor: string[] = []
  inputNomeCliente: string = '';

  ngIfDialog: boolean = true;

  filtrarClientes() {
    const filtro = this.inputNomeCliente.toLowerCase();

    this.todosClientesNgFor = this.todosClientes.map((cliente) => cliente).filter((cliente) => cliente.toLowerCase().includes(filtro));
  }

  maisPedido(inputNomeCliente: string) {
    if (inputNomeCliente[inputNomeCliente.length - 1] === ' ') {
      inputNomeCliente = inputNomeCliente.slice(0, -1);
    }
    this.router.navigate(['/principal/novopedido', inputNomeCliente.toLowerCase()]);
  }

  getClientes() {
    this.sharedDataService.getClientes().subscribe((clientes) => {
      this.todosClientes = clientes;
      this.todosClientesNgFor = clientes;
    });
  }

  selectItem(nomeCliente: string) {
    this.opcoesOpenDialog(nomeCliente);
  }

  opcoesOpenDialog(nomeCliente: string) {
    const dialogRef = this.dialog.open(DialogNovoOpcoesComponent, {
      data: nomeCliente,
      width: "70%",
    });

    dialogRef.afterClosed().subscribe(opcaoSelecionada => {
      if(opcaoSelecionada === 'p') {
        this.router.navigate(['/principal/novopedido', nomeCliente]);
      }

      if(opcaoSelecionada === 'c') {
        this.router.navigate(['/principal/pedidoscaixa', nomeCliente]);
      }
    });
  }

  capitalizeFirstLetterOfEachWord(inputString: string): string {
    const words = inputString.split(' ');
    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word;
      }
    });
    const resultString = capitalizedWords.join(' ');
    return resultString;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustGrid();
  }

  adjustGrid() {
    if (window.innerWidth > 1000) {
      this.cols = 5;
      this.rowHeight = '1:1';
    }
  }
}
