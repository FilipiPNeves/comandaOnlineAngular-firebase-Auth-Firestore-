import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/services/firestore.service';
import { entradas, pasteis, lanches, petiscos, frangos, contraFiles, saladas, risotos, sopas, frutosDoMar, massas, bebidasCompleto, alcool, sobremesas } from 'src/app/shared/pratos';

interface Pratos {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-dialog-edit-caixa',
  templateUrl: './dialog-edit-caixa.component.html',
  styleUrls: ['./dialog-edit-caixa.component.css']
})
export class DialogEditCaixaComponent {
  entradas: Pratos[] = entradas;
  pasteis: Pratos[] = pasteis;
  lanches: Pratos[] = lanches;
  petiscos: Pratos[] = petiscos;
  frangos: Pratos[] = frangos;
  contraFiles: Pratos[] = contraFiles;
  saladas: Pratos[] = saladas;
  risotos: Pratos[] = risotos;
  sopas: Pratos[] = sopas;
  frutosDoMar: Pratos[] = frutosDoMar;
  massas: Pratos[] = massas;
  bebidas: Pratos[] = bebidasCompleto;
  alcool: Pratos[] = alcool;
  sobremesas: Pratos[] = sobremesas;

  constructor(
    public dialogRef: MatDialogRef<DialogEditCaixaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public firestoreService: FirestoreService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  salvarEdicao(data: any) {
    let obj = {}

    console.log("oi", this.data);


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
      this.firestoreService.updatePedidoCaixa(obj, this.data.id);
    }catch{
      alert("Alteração não concluída!")
    }
    this.onNoClick();
  }
}

