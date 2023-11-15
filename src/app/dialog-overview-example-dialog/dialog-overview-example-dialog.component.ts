import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html'
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  funcao0(): string {
    if((this.data.valorPago - this.data.valorTotal) < 0) {
      return "0";
    }else if(this.data.valorPago === undefined) {
      return "0";
    }
    const resultado = this.data.valorPago - this.data.valorTotal;
    const valorFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return valorFormatado;
  }
}
