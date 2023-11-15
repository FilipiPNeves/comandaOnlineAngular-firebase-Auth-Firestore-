import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DialogEditPedidosComponent } from '../dialog-edit-pedidos/dialog-edit-pedidos.component';
import { DialogEditBebidasComponent } from '../dialog-edit-bebidas/dialog-edit-bebidas.component';
import { DialogEditCaixaComponent } from '../dialog-edit-caixa/dialog-edit-caixa.component';

@Component({
  selector: 'app-dialog-opcoes-pedidos',
  templateUrl: './dialog-opcoes-pedidos.component.html',
  styleUrls: ['./dialog-opcoes-pedidos.component.css']
})
export class DialogOpcoesPedidosComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOpcoesPedidosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public firestoreService: FirestoreService,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.getNomeBotao()
  }

  cancelButtonEnviar: boolean = true;
  botao!: string;

  getNomeBotao() {
    const rota = this.router.url;
    if(rota === "/home/listadepedidos") {
      this.botao = "Imprimir";
    }else if(rota === "/home/bebidas") {
      this.botao = "Entregar";
    }else if(rota === "/home/caixa") {
      this.cancelButtonEnviar = false;
    }
  }

  onNoClick(result: any): void {
    this.dialogRef.close(result);
  }

  excluirPedido(data: any) {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este pedido?');
    if (confirmacao) {
      data.excluir = true;
      this.onNoClick(data);
    } else {
      return;
    }
  }

  editarPedido(data: any) {
    this.onNoClick(data);
    if(data.rota === "/home/listadepedidos")  {
      this.openDialogListaDePedidos(data);
    }else if(data.rota === "/home/bebidas") {
      this.openDialogBebidas(data);
    }else if(data.rota === "/home/caixa") {
      this.openDialogCaixa(data);
    }
  }

  pedidoFeito(data: any) {
    data.feito = true;
    this.onNoClick(data);
  }

  openDialogListaDePedidos(row: any): void {
    const dialogRef = this.dialog.open(DialogEditPedidosComponent, {
      width: '350px', // Defina a largura do diálogo conforme necessário
      data: { id: row.id, prato: row.prato, quarto: row.quarto, horario: row.horario, obs: row.obs, valor: row.valor, quant: row.quant, nomeGarcom: row.nomeGarcom},
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
    });
  }

  openDialogBebidas(row: any): void {
    const dialogRef = this.dialog.open(DialogEditBebidasComponent, {
      width: '350px',
      data: { id: row.id, prato: row.prato, quarto: row.quarto, horario: row.horario, obs: row.obs, valor: row.valor, quant: row.quant, nomeGarcom: row.nomeGarcom},
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
    });
  }

  openDialogCaixa(row: any): void {
    const dialogRef = this.dialog.open(DialogEditCaixaComponent, {
      width: '350px', // Defina a largura do diálogo conforme necessário
      data: { id: row.id, prato: row.prato, quarto: row.quarto, horario: row.horario, obs: row.obs, valor: row.valor, quant: row.quant, nomeGarcom: row.nomeGarcom},
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
    });
  }
}
