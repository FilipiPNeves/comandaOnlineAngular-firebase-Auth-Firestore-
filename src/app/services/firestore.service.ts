import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs, collectionData  } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { map, first } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  constructor(private firestore: Firestore, private app: FirebaseApp, private route: Router) {}


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

    const currentDate = new Date();
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const currentDateTime = (hour + (minute/60)).toFixed(2);


    for(let i = 0; i < 8; i++) {
      if(pedido[i]) {

        if(pedido[i].obsPrato == null) {
          pedido[i].obsPrato = '';
        }

        console.log(pedido[i]);

        const docRef = addDoc(collection(this.firestore, nomeQuartoOuPassante), {
          prato: pedido[i].prato.nome,
          valor: pedido[i].prato.valor,
          obs:	pedido[i].obsPrato,
          quant: pedido[i].quantPrato,
          horario: currentDateTime,
          nomeQuartoOuPassante: nomeQuartoOuPassante
        });
      }
    }


    for(let i = 8; i < 16; i++) {
      if(pedido[i]) {
        if(pedido[i].obsAlcool == null) {
          pedido[i].obsAlcool = '';
        }

        console.log(pedido[i]);

        const docRef = addDoc(collection(this.firestore, nomeQuartoOuPassante), {
          prato: pedido[i].alcool.nome,
          valor: pedido[i].alcool.valor,
          obs:	pedido[i].obsAlcool,
          quant: pedido[i].quantAlcool,
          horario: currentDateTime,
          nomeQuartoOuPassante: nomeQuartoOuPassante
        });
      }
    }


    for(let i = 16; i < 24; i++) {
      if(pedido[i]) {

        if(pedido[i].obsSemAlcool == null) {
          pedido[i].obsSemAlcool = '';
        }

        console.log(pedido[i]);

        const docRef = addDoc(collection(this.firestore, nomeQuartoOuPassante), {
          prato: pedido[i].semAlcool.nome,
          valor: pedido[i].semAlcool.valor,
          obs:	pedido[i].obsSemAlcool,
          quant: pedido[i].quantSemAlcool,
          horario: currentDateTime,
          nomeQuartoOuPassante: nomeQuartoOuPassante
        });
      }
    }



    for(let i = 24; i < 32; i++) {
      if(pedido[i]) {

        if(pedido[i].obsSobremesa == null) {
          pedido[i].obsSobremesa = '';
        }

        console.log(pedido[i]);

        const docRef = addDoc(collection(this.firestore, nomeQuartoOuPassante), {
          prato: pedido[i].sobremesa.nome,
          valor: pedido[i].sobremesa.valor,
          obs: pedido[i].obsSobremesa,
          quant: pedido[i].quantSobremesa,
          horario: currentDateTime,
          nomeQuartoOuPassante: nomeQuartoOuPassante
        });
      }
    }
  }


  getDataNorte(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Norte');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {

        //aplicar esse metodo abaixo no array que formarei com todos pedidos do dataBase
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataSul(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Sul');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataLeste(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Leste');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataSol(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Sol');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataMaster1(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Master 1');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataMaster2(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Master 2');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataMaster3(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Master 3');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }
  getDataMaster4(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Master 4');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataMaster5(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Master 5');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }
  getDataVip1(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Vip 1');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }
  getDataVip2(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Vip 2');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataVip3(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Vip 3');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }
  getDataIlha(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Ilha');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  getDataChale(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'Chalé');
    return collectionData(collectionInstance).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
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
