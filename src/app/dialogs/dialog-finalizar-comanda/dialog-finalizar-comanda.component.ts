import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from 'src/app/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dialog-finalizar-comanda',
  templateUrl: './dialog-finalizar-comanda.component.html',
  styleUrls: ['./dialog-finalizar-comanda.component.css']
})
export class DialogFinalizarComandaComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogFinalizarComandaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public firestoreService: FirestoreService,
    public dialog: MatDialog,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  finalizarComanda() {
    this.data.dataSource.forEach((pedido: any) => {
      this.firestoreService.finalizarcomanda(pedido.id);
    });

    this.onNoClick();
    this.openDialogSem10();
  }

  openDialogSem10(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px', // Defina a largura do diálogo conforme necessário
      data: { valorTotal: this.data.valorTotal },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  finalizarComandaCom10(){
    this.data.dataSource.forEach((pedido: any) => {
      this.firestoreService.finalizarcomandaCom10(pedido.id);
    });

    this.onNoClick();
    this.openDialogCom10();
  }

  openDialogCom10(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px', // Defina a largura do diálogo conforme necessário
      data: { valorTotal: this.data.valorTotal*1.1 },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  formatarValorComoDinheiro(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}
