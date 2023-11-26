import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PratosNovo } from 'src/app/pratos-novo';
import { FirestoreService } from 'src/app/services/firestore.service';

interface Data {
  pedidosClienteSelecionado: PratosNovo[],
  subTotal: number
}

@Component({
  selector: 'app-dialog-novo-finalizar-comanda',
  templateUrl: './dialog-novo-finalizar-comanda.component.html',
  styleUrls: ['./dialog-novo-finalizar-comanda.component.css']
})
export class DialogNovoFinalizarComandaComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogNovoFinalizarComandaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
    private firestore: FirestoreService
  ) {
  }

  dezporcento: boolean = false;
  botaoFinalizar = true;
  subTotal: number = this.data.subTotal;
  subTotal2: number = this.data.subTotal;
  pedidosClienteSelecionado: PratosNovo[] = this.data.pedidosClienteSelecionado;

  onNoClick(): void {
    this.dialogRef.close();
  }

  slideToggleChanged() {
    if (this.dezporcento) {
      this.subTotal = this.subTotal*1.1;
    } else {
      this.subTotal = this.subTotal2;
    }
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

  formatToBrazilianReal(value: number | string): string {
    let formattedValue = Number(value.toString().replace(',', '.')).toFixed(2);
    return `R$ ${formattedValue.replace('.', ',')}`;
  }
}
