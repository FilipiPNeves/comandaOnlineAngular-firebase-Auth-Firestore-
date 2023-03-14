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




  enviarPedido(pedido: any) {
    //prato 0 ao 7
    console.log(pedido[0].prato);
    console.log(pedido[0].quantPrato);
    console.log(pedido[0].obsPrato);


    //alcool 8 ao 15
    console.log(pedido[8].alcool);
    console.log(pedido[8].quantAlcool);
    console.log(pedido[8].obsAlcool);


    //Sem alcool 16 ao 23
    console.log(pedido[16].semAlcool);
    console.log(pedido[16].quantSemAlcool);
    console.log(pedido[16].obsSemAlcool);

    //Sobremesa 24 ao 31
    console.log(pedido[24].sobremesa);
    console.log(pedido[24].quantSobremesa);
    console.log(pedido[24].obsSobremesa);
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
