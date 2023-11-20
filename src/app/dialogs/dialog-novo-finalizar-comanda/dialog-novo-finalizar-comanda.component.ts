import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PratosNovo } from 'src/app/pratos-novo';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dialog-novo-finalizar-comanda',
  templateUrl: './dialog-novo-finalizar-comanda.component.html',
  styleUrls: ['./dialog-novo-finalizar-comanda.component.css']
})
export class DialogNovoFinalizarComandaComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogNovoFinalizarComandaComponent>,
    @Inject(MAT_DIALOG_DATA) public pedidosClienteSelecionado: PratosNovo[],
    private firestore: FirestoreService
  ) {
  }

  dezporcento: boolean = false;
  botaoFinalizar = true;

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmar() {
    this.botaoFinalizar = false;
    if(this.dezporcento) {
      this.pedidosClienteSelecionado.forEach(async pedido => {
        pedido.dezporcento = true;
         await this.firestore.enviandoPedidoProRelatorio(pedido);
      });
    } else {
      this.pedidosClienteSelecionado.forEach(async pedido => {
        pedido.dezporcento = false;
        await this.firestore.enviandoPedidoProRelatorio(pedido);
    });
    }

    this.pedidosClienteSelecionado.forEach(async pedido => {
      if(pedido.id) {
        await this.firestore.excluirPedidoCaixaNovoSemAlert(pedido.id);
        this.dialogRef.close(true);
      }
    });

  }
}
