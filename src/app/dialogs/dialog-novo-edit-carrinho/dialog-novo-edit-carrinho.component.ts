import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface PratosNovo {
  nome: string;
  valor: number;
  tipo: string;
  descricao: string;
  quantidade: number;
  adicional1: Adicional;
  adicional2: Adicional;
  cliente: string;
  garcom: string;
  horario: string;
}

interface Adicional {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-dialog-novo-edit-carrinho',
  templateUrl: './dialog-novo-edit-carrinho.component.html',
  styleUrls: ['./dialog-novo-edit-carrinho.component.css']
})
export class DialogNovoEditCarrinhoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogNovoEditCarrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public item: PratosNovo,
  ) {
    if(this.item.adicional1.nome !== '') {
      this.ngIf1 = true;
    }
    if(this.item.adicional2.nome !== '') {
      this.ngIf2 = true;
    }
  }

  descricao: string = this.item.descricao
  quantidade: number = this.item.quantidade;
  adicional1Nome: string = this.item.adicional1.nome;
  adicional1Valor: number = this.item.adicional1.valor;
  adicional2Nome: string = this.item.adicional2.nome;
  adicional2Valor: number = this.item.adicional2.valor;

  ngIf1: boolean = false;
  ngIf2: boolean = false;

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmar() {
    console.log(this.adicional1Nome);
    console.log(this.adicional1Valor);
    console.log(this.adicional2Nome);
    console.log(this.adicional2Valor);

    if(this.adicional1Nome === '' && (this.adicional1Valor !== 0 && this.adicional1Valor !== undefined && this.adicional1Valor !== null)) {
      alert("Escreva o nome do adicional 1!");
      return;
    } else if(this.adicional1Nome !== '' && (this.adicional1Valor === 0 || this.adicional1Valor === undefined || this.adicional1Valor === null)) {
      alert("Escreva o valor do adicional 1!");
      return;
    } else if(this.adicional1Nome !== '' && this.adicional1Valor !== 0) {
      this.item.adicional1.nome = this.adicional1Nome;
      this.item.adicional1.valor = this.adicional1Valor;
    }

    if(this.adicional2Nome === '' && (this.adicional2Valor !== 0 && this.adicional2Valor !== undefined && this.adicional2Valor !== null)) {
      alert("Escreva o nome do adicional 2!");
      return;
    } else if(this.adicional2Nome !== '' && (this.adicional2Valor === 0 || this.adicional2Valor === undefined || this.adicional2Valor === null)) {
      alert("Escreva o valor do adicional 2!");
      return;
    } else if(this.adicional2Nome !== '' && this.adicional2Valor !== 0) {
      this.item.adicional2.nome = this.adicional2Nome;
      this.item.adicional2.valor = this.adicional2Valor;
    }

    if (!this.ngIf1) {
      this.item.adicional1.nome = '';
      this.item.adicional1.valor = 0;
    }
    if (!this.ngIf2) {
      this.item.adicional2.nome = '';
      this.item.adicional2.valor = 0;
    }

    this.item.descricao = this.descricao;
    this.item.quantidade = this.quantidade;
    this.dialogRef.close(this.item);
  }

  toggleNgIf() {
    if (!this.ngIf1) {
      this.ngIf1 = true;
    } else if (!this.ngIf2) {
      this.ngIf2 = true;
    }
  }

  fecharDiv(ngIf: string) {
    if(ngIf === "ngIf1") {
      this.ngIf1 = false;
      this.adicional1Nome = '';
      this.adicional1Valor = 0;
    }
    if(ngIf === "ngIf2") {
      this.ngIf2 = false;
      this.adicional2Nome = '';
      this.adicional2Valor = 0;
    }
  }
}
