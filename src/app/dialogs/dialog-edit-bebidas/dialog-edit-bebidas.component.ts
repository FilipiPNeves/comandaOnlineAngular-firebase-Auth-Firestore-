import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/services/firestore.service';
import { bebidas, alcool} from 'src/app/shared/pratos';

interface Pratos {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-dialog-edit-bebidas',
  templateUrl: './dialog-edit-bebidas.component.html',
  styleUrls: ['./dialog-edit-bebidas.component.css']
})
export class DialogEditBebidasComponent {
  bebidas: Pratos[] = bebidas;
  alcool: Pratos[] = alcool;

  constructor(
    public dialogRef: MatDialogRef<DialogEditBebidasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public firestoreService: FirestoreService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  fecharDivEditar() {
    this.onNoClick();
  }

  salvarEdicao(data: any) {
    let obj = {}

    if(data.value.prato.nome === undefined && data.value.obs === '' && data.value.quantidade === '') {
      return this.onNoClick(),alert("Nenhuma mudança!");
    }

    if(data.value.quantidade !== '') {
      obj = {
        quant: data.value.quantidade
      }
    }

    if(data.value.obs !== '') {
      obj = {
        obs: data.value.obs
      }
    }

    if(data.value.prato.nome !== undefined) {
      obj = {
        prato: data.value.prato.nome,
        valor: data.value.prato.valor
      }
    }

    try{
      this.firestoreService.updatePedidoBebidas(obj, this.data.id);
    }catch{
      alert("Alteração não concluída!")
    }
    this.onNoClick();
  }
}


