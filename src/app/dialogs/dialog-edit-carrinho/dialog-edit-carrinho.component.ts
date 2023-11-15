import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-edit-carrinho',
  templateUrl: './dialog-edit-carrinho.component.html',
  styleUrls: ['./dialog-edit-carrinho.component.css']
})
export class DialogEditCarrinhoComponent {

  quants  = [
    {valor: 1},
    {valor: 2},
    {valor: 3},
    {valor: 4},
    {valor: 5},
    {valor: 6},
    {valor: 7},
    {valor: 8},
    {valor: 9},
    {valor: 10}
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogEditCarrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.pedidoObs = data.row.obs;
    this.pedidoQnt = data.row.qnt;
  }

  pedidoObs: string = '';
  pedidoQnt: number = 0;
  pedidoAdicional: string = '';
  pedidoValorAdiconal: number = 0;
  ngIfAdicional: boolean = false;

  onNoClick(result: any): void {
    //this.dialogRef.close(result);
  }

  salvarEdicao() {
    let result = {
      obs: this.pedidoObs,
      qnt: this.pedidoQnt,
      editado: true,
      excluido: false
    }
    this.dialogRef.close(result);
  }

  excluir() {
    const confirmar = window.confirm("Tem certeza que deseja excluir este item?");
    if (confirmar) {
      let result = {
        excluido: true,
        editado: false
      }
      this.dialogRef.close(result);
    }
  }
}
