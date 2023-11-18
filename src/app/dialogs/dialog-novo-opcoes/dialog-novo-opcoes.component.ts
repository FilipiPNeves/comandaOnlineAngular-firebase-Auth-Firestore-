import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-novo-opcoes',
  templateUrl: './dialog-novo-opcoes.component.html',
  styleUrls: ['./dialog-novo-opcoes.component.css']
})
export class DialogNovoOpcoesComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogNovoOpcoesComponent>,
    @Inject(MAT_DIALOG_DATA) public nomeCliente: string,
  ) {
  }

  clickNaOpcao(opcao: string) {
    if(opcao === 'p') {
      this.dialogRef.close('p');
    }
    if(opcao === 'c') {
      this.dialogRef.close('c');
    }
  }
}
