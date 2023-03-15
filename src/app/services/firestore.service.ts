import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore, private app: FirebaseApp, private route: Router) {}


  pedidoTudo: any = [];

  pedidoRefinado: any;

  enviarPedido(pedido: any, nomeQuartoOuPassante: any) {
    /*prato 0 ao 7
    console.log(pedido[0].prato);
    console.log(pedido[0].quantPrato);
    console.log(pedido[0].obsPrato);


    alcool 8 ao 15
    console.log(pedido[8].alcool);
    console.log(pedido[8].quantAlcool);
    console.log(pedido[8].obsAlcool);


    Sem alcool 16 ao 23
    console.log(pedido[16].semAlcool);
    console.log(pedido[16].quantSemAlcool);
    console.log(pedido[16].obsSemAlcool);

    Sobremesa 24 ao 31
    console.log(pedido[24].sobremesa);
    console.log(pedido[24].quantSobremesa);
    console.log(pedido[24].obsSobremesa);
    */


    console.log(nomeQuartoOuPassante);


    for(let i = 0; i < 8; i++) {
      if(pedido[i]) {
        console.log(pedido[i].prato);
        console.log(pedido[i].quantPrato);
        console.log(pedido[i].obsPrato);

        if(pedido[i].obsPrato == null ) {
          pedido[i].obsPrato = ''
        }

        this.pedidoTudo[i] = [
          { prato1: pedido[i].prato.nome, valor1: pedido[i].prato.valor, quant1: pedido[i].quantPrato, obs1: pedido[i].obsPrato }
        ]
      }
    }

    if(this.pedidoTudo[0] && this.pedidoTudo[1] == null && this.pedidoTudo[2] == null && this.pedidoTudo[3] == null && this.pedidoTudo[4] == null && this.pedidoTudo[5] == null && this.pedidoTudo[6] == null && this.pedidoTudo[7] == null ) {

      let teste = this.pedidoTudo[0][0];

      console.log(teste);


      const docRef = addDoc(collection(this.firestore, nomeQuartoOuPassante), {
        pedido: teste
      });

    }else  if(this.pedidoTudo[0] && this.pedidoTudo[1]  && this.pedidoTudo[2] == null && this.pedidoTudo[3] == null && this.pedidoTudo[4] == null && this.pedidoTudo[5] == null && this.pedidoTudo[6] == null && this.pedidoTudo[7] == null ) {

      let teste = {
        um: this.pedidoTudo[0][0],
        dois: this.pedidoTudo[1][0]
      }

      console.log(teste)

      const docRef = addDoc(collection(this.firestore, nomeQuartoOuPassante), {
        pedido: teste
      });
    }






/*
    const docRef = addDoc(collection(this.firestore, nomeQuartoOuPassante), {
      [`prato${i+1}`]: pedido[i].prato,
      [`quantidade${i+1}`]: pedido[i].quantPrato,
      [`obs${i+1}`]:pedido[i].obsPrato
    });
*/

    for(let i = 8; i < 16; i++) {
      if(pedido[i]) {
        console.log(pedido[i].alcool);
        console.log(pedido[i].quantAlcool);
        console.log(pedido[i].obsAlcool);

      }
    }

    for(let i = 16; i < 24; i++) {
      if(pedido[i]) {
        console.log(pedido[i].semAlcool);
        console.log(pedido[i].quantSemAlcool);
        console.log(pedido[i].obsSemAlcool);
      }
    }

    for(let i = 24; i < 32; i++) {
      if(pedido[i]) {
        console.log(pedido[i].sobremesa);
        console.log(pedido[i].quantSobremesa);
        console.log(pedido[i].obsSobremesa);
      }
    }






  }

  getInf() {
    const auth = getAuth();
    const user = auth.currentUser;
    let emailEscrito: string;

    if (user !== null) {
      const email = user.email;
      emailEscrito = email!;
      localStorage.setItem('email', emailEscrito);
    }

    return emailEscrito!;
  }



  LoginAutomatico() {
    const auth = getAuth(this.app);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.route.navigate(['home']);
      }
    });
  }


  loginService(objLogin: NgForm) {
    const auth = getAuth(this.app);


    signInWithEmailAndPassword(auth, objLogin.value.email, objLogin.value.password).then(() => {
      this.route.navigate(['home/novopedido']);
    }). catch((err) => {
      alert('E-mail ou senha inválidos');
    })
  }

  logoutService() {
    const auth = getAuth(this.app);
    signOut(auth).then(() => {
      alert('Logout Success');
      this.route.navigate(['login']);
    }).catch((err) => {
      alert('Logout NOT Success');
    })
  }



  setterTeste(objSended: any) {
    console.log(objSended.value.teste);

    const docRef = addDoc(collection(this.firestore, "users"), {
      valor: objSended.value.teste
    });


  }
}
