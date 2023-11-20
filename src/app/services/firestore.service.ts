import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, getDoc, deleteDoc, getDocs  } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Timestamp} from 'firebase/firestore';
import { PratosNovo } from 'src/app/pratos-novo';

interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
  feito: any,
  nomeGarcom: any
}


interface pedidosCarrinho {
  nome: string,
  valor: number,
  obs: string,
  qnt: number,
  bebida: boolean
}

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(private firestore: Firestore, private app: FirebaseApp, private route: Router) {}

  enviarPedido2(nomeDoQuartoOuPassante: string, pedidos: pedidosCarrinho[], nomeGarcom: string) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const seg = currentDate.getSeconds();
    const currentDateTime = (hour + (minute/60) + ((seg/60)/60));

    pedidos.forEach(pedido => {
      if(pedido.bebida === false) {
        const docRef = addDoc(collection(this.firestore, 'pedidos'), {
          prato: pedido.nome,
          valor: pedido.valor,
          obs:	pedido.obs,
          quant: pedido.qnt,
          horario: currentDateTime,
          nomeQuartoOuPassante: nomeDoQuartoOuPassante,
          nomeGarcom: nomeGarcom
        }).then(() => {
          let confirmDialog = document.getElementById('confirm-dialog');
          let confirmDialogMessage = document.getElementById('confirm-dialog-message');
          confirmDialogMessage!.innerHTML = 'Enviado com sucesso.';
          confirmDialog!.style.display = 'flex';

        }).catch(() => {
          let confirmDialog = document.getElementById('confirm-dialog');
          let confirmDialogMessage = document.getElementById('confirm-dialog-message');
          confirmDialogMessage!.innerHTML = 'ERRO, tente novamente.';
          confirmDialog!.style.display = 'flex';

        });
      }else {
        if(pedido.nome.includes('Sucos naturais')) {
          const docRef = addDoc(collection(this.firestore, 'pedidos'), {
            prato: pedido.nome,
            valor: pedido.valor,
            obs:	pedido.obs,
            quant: pedido.qnt,
            horario: currentDateTime,
            nomeQuartoOuPassante: nomeDoQuartoOuPassante,
            nomeGarcom: nomeGarcom
          }).then(() => {
            let confirmDialog = document.getElementById('confirm-dialog');
            let confirmDialogMessage = document.getElementById('confirm-dialog-message');
            confirmDialogMessage!.innerHTML = 'Enviado com sucesso.';
            confirmDialog!.style.display = 'flex';
            /*
            setTimeout(function() {
              confirmDialog!.style.display = 'none';
            }, 5000); // 5000 milissegundos = 5 segundos
            */
          }).catch(() => {
            let confirmDialog = document.getElementById('confirm-dialog');
            let confirmDialogMessage = document.getElementById('confirm-dialog-message');
            confirmDialogMessage!.innerHTML = 'ERRO, tente novamente.';
            confirmDialog!.style.display = 'flex';
            /*
            setTimeout(function() {
              confirmDialog!.style.display = 'none';
            }, 5000); // 5000 milissegundos = 5 segundos
            */
          });
        }else {
          const docRef = addDoc(collection(this.firestore, 'bebidas'), {
            prato: pedido.nome,
            valor: pedido.valor,
            obs:	pedido.obs,
            quant: pedido.qnt,
            horario: currentDateTime,
            nomeQuartoOuPassante: nomeDoQuartoOuPassante,
            nomeGarcom: nomeGarcom
          }).then(() => {
            let confirmDialog = document.getElementById('confirm-dialog');
            let confirmDialogMessage = document.getElementById('confirm-dialog-message');
            confirmDialogMessage!.innerHTML = 'Enviado com sucesso.';
            confirmDialog!.style.display = 'flex';
            /*
            setTimeout(function() {
              confirmDialog!.style.display = 'none';
            }, 5000); // 5000 milissegundos = 5 segundos
            */
          }).catch(() => {
            let confirmDialog = document.getElementById('confirm-dialog');
            let confirmDialogMessage = document.getElementById('confirm-dialog-message');
            confirmDialogMessage!.innerHTML = 'ERRO, tente novamente.';
            confirmDialog!.style.display = 'flex';
            /*
            setTimeout(function() {
              confirmDialog!.style.display = 'none';
            }, 5000); // 5000 milissegundos = 5 segundos
            */
          });
        }
      }
    });
  }
  async deleteImprimir() {
    const collectionRef = collection(this.firestore, 'pedidosImprimir');
    const querySnapshot = await getDocs(collectionRef);

    // Itera sobre os documentos encontrados e os exclui um por um
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  }

  getPedidos(): Observable<todosPedidos[]> {
    const collectionInstance = collection(this.firestore, 'pedidos');
    return collectionData(collectionInstance, {idField: 'id'}).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));

        return val;
      })
    );
  }

  getReturnPedidos() {
    const collectionInstance = collection(this.firestore, 'pedidos');

    return collectionData(collectionInstance, {idField: 'id'}).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));

        return val;
      })
    );
  }


  getBebidas() {
    const collectionInstance = collection(this.firestore, 'bebidas');
    return collectionData(collectionInstance, {idField: 'id'}).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));



        return val;
      })
    );
  }

  getPedidosFeitos(): Observable<todosPedidos[]> {
    const collectionInstance = collection(this.firestore, 'pedidosFeitos');
    return collectionData(collectionInstance, {idField: 'id'}).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        return val;
      })
    );
  }

  enviarPedidosParaImprimir(objetoImprimir: any) {
    const docRef = addDoc(collection(this.firestore, 'pedidosParaImpressao'), {
      prato: objetoImprimir.prato,
      quarto: objetoImprimir.quarto,
      horario: objetoImprimir.horario,
      obs: objetoImprimir.obs,
      quantidade: objetoImprimir.quantidade
    });
  }

  getImprimir(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'pedidosParaImpressao');

    return collectionData(collectionInstance);
  }

  excluirImprimir(): Promise<void> {
    const collectionInstance = collection(this.firestore, 'pedidosParaImpressao');

    return getDocs(collectionInstance)
      .then((querySnapshot) => {
        const promises: Promise<void>[] = []; // Especificando o tipo da matriz

        // Para cada documento na coleção, crie uma promessa para excluí-lo
        querySnapshot.forEach((doc) => {
          const promise = deleteDoc(doc.ref);
          promises.push(promise);
        });

        // Aguarde todas as promessas serem resolvidas
        return Promise.all(promises);
      })
      .then(() => {
        console.log('Todos os documentos excluídos com sucesso.');
      })
      .catch((error) => {
        console.error('Erro ao excluir documentos:', error);
        throw error;
      });
  }

  pedidoFeito(id: string,  prato: string, quarto: string, horario: string, obs: string, valor: number, quantidade: number, nomeGarcom: string) {
    let pedidos = "pedidos"
    const docInstance = doc(this.firestore, pedidos, id);
    deleteDoc(docInstance);

    this.pedidoServido(id, prato, quarto, horario, obs, valor, quantidade, nomeGarcom, pedidos);
  }

  pedidoFeitoBebidas(id: string,  prato: string, quarto: string, horario: string, obs: string, valor: number, quantidade: number, nomeGarcom: any) {

    let bebidas = "bebidas";

    const docInstance = doc(this.firestore, bebidas, id);
    deleteDoc(docInstance);

    this.pedidoServido(id, prato, quarto, horario, obs, valor, quantidade, nomeGarcom, bebidas);
  }

  excluirPedido(id: string) {
    const collectionInstance = collection(this.firestore, 'pedidos');
    const docReference = doc(collectionInstance, id);

    deleteDoc(docReference).then(() => {
      let confirmDialog = document.getElementById('confirm-dialog');
      let confirmDialogMessage = document.getElementById('confirm-dialog-message');
      confirmDialogMessage!.innerHTML = 'Excluído com sucesso.';
      confirmDialog!.style.display = 'flex';
    }).catch(() => {
      alert("Erro. Tente novamente!")
    })
  }

  excluirPedidoBebidas(id: string) {
    const collectionInstance = collection(this.firestore, 'bebidas');
    const docReference = doc(collectionInstance, id);

    deleteDoc(docReference).then(() => {
      let confirmDialog = document.getElementById('confirm-dialog');
      let confirmDialogMessage = document.getElementById('confirm-dialog-message');
      confirmDialogMessage!.innerHTML = 'Excluído com sucesso.';
      confirmDialog!.style.display = 'flex';
    }).catch(() => {
      alert("Erro. Tente novamente!")
    })
  }

  excluirPedidoCaixa(id: string) {
    const collectionInstance = collection(this.firestore, 'pedidosServidos');
    const docReference = doc(collectionInstance, id);

    deleteDoc(docReference).then(() => {
      let confirmDialog = document.getElementById('confirm-dialog');
      let confirmDialogMessage = document.getElementById('confirm-dialog-message');
      confirmDialogMessage!.innerHTML = 'Excluído com sucesso.';
      confirmDialog!.style.display = 'flex';
    }).catch(() => {
      alert("Erro. Tente novamente!")
    })
  }

  /*
  EXCLUIR DO RELATORIO DE ACORDO COM DATA

  async excluirPedidosPorData(data: any) {
    const collectionInstance = collection(this.firestore, 'relatorio');

    // Execute uma consulta para obter todos os documentos da coleção 'relatorio'
    const querySnapshot = await getDocs(collectionInstance);

    // Itere sobre os documentos e exclua aqueles com a data desejada no campo 'horario'
    querySnapshot.forEach(async (docSnapshot) => {
      const docData = docSnapshot.data();
      if (docData && docData['horario'].includes(data)) {
        const docReference = doc(collectionInstance, docSnapshot.id);
        try {
          await deleteDoc(docReference);
          console.log(`Documento com ID ${docSnapshot.id} excluído com sucesso.`);
        } catch (error) {
          console.error(`Erro ao excluir o documento com ID ${docSnapshot.id}: ${error}`);
        }
      }
    });
  }
  */


  updatePedido(pedido: any, id: string) {
    const docInstance = doc(this.firestore, 'pedidos', id);

    updateDoc(docInstance, pedido).then(() => {
      let confirmDialog = document.getElementById('confirm-dialog');
      let confirmDialogMessage = document.getElementById('confirm-dialog-message');
      confirmDialogMessage!.innerHTML = 'Atualizado com sucesso.';
      confirmDialog!.style.display = 'flex';
    }).catch(() => {
      alert("Erro. Tente novamente!")
    })
  }

  updatePedidoBebidas(pedido: any, id: string) {
    const docInstance = doc(this.firestore, 'bebidas', id);

    updateDoc(docInstance, pedido).then(() => {
      let confirmDialog = document.getElementById('confirm-dialog');
      let confirmDialogMessage = document.getElementById('confirm-dialog-message');
      confirmDialogMessage!.innerHTML = 'Atualizado com sucesso.';
      confirmDialog!.style.display = 'flex';
    }).catch(() => {
      alert("Erro. Tente novamente!")
    })
  }

  updatePedidoCaixa(pedido: any, id: string) {
    const docInstance = doc(this.firestore, 'pedidosServidos', id);

    updateDoc(docInstance, pedido).then(() => {
      let confirmDialog = document.getElementById('confirm-dialog');
      let confirmDialogMessage = document.getElementById('confirm-dialog-message');
      confirmDialogMessage!.innerHTML = 'Atualizado com sucesso.';
      confirmDialog!.style.display = 'flex';
    }).catch(() => {
      alert("Erro. Tente novamente!")
    })
  }

  pedidoSendoFeito(id: string) {
    const docInstance = doc(this.firestore, 'pedidos', id);

    let pedido = {
      feito: true
    }

    updateDoc(docInstance, pedido)
  }

  pedidoServido(id: string,  prato: string, quarto: string, horario: string, obs: string, valor: number, quantidade: number, nomeGarcom: any, tipoPedido: string) {

    const docRef = addDoc(collection(this.firestore, 'pedidosServidos'), {
      prato: prato,
      valor: valor,
      obs:	obs,
      quant: quantidade,
      horario: horario,
      nomeQuartoOuPassante: quarto,
      nomeGarcom: nomeGarcom
    }).then(() => {
      if(tipoPedido === "bebidas") {
        let confirmDialog = document.getElementById('confirm-dialog');
          let confirmDialogMessage = document.getElementById('confirm-dialog-message');
          confirmDialogMessage!.innerHTML = 'Sucesso na entrega!';
          confirmDialog!.style.display = 'flex';
      }
    });


    const docInstance = doc(this.firestore, 'pedidosFeitos', id);
    deleteDoc(docInstance);
  }

  getServidos() {
    const collectionInstance = collection(this.firestore, 'pedidosServidos');

    return collectionData(collectionInstance, {idField: 'id'}).pipe(
      map((val: any[]) => {
        val.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));

        return val;
      })
    );
  }

  getNomesQuartosClientes(): Observable<string[]> {
    const collectionInstance = collection(this.firestore, 'pedidosServidos');

    return collectionData(collectionInstance).pipe(
      map((pedidos: any[]) => pedidos.map(pedido => pedido.nomeQuartoOuPassante)),
    );
  }

  finalizarcomandaCom10(id: string) {
    const collectionInstance = collection(this.firestore, 'pedidosServidos');
    const docRef = doc(collectionInstance, id);
    const collectionInstanceRelatorio = collection(this.firestore, 'relatorio');

    getDoc(docRef)
      .then(async (docSnapshot) => {
        if (docSnapshot.exists()) {
          // Obtenha os dados do documento
          const docData = docSnapshot.data();

          // Obtenha a data de hoje no formato 'dd/mm/aaaa'
          const hoje = new Date();
          const dd = String(hoje.getDate()).padStart(2, '0');
          const mm = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
          const aaaa = hoje.getFullYear();
          const dataHoje = `${dd}/${mm}/${aaaa}`;

          let horarioFormatado = this.formatarHora(docData['horario']);

          // Atualize o campo 'horario' com a data de hoje
          docData['horario'] = `${horarioFormatado} ${dataHoje}`;
          docData['valor'] = docData['valor']*1.1;
          docData['dezporcento'] = true;

          // Crie um novo documento na coleção "relatorio" com os dados atualizados
          await addDoc(collectionInstanceRelatorio, docData);

          // Exclua o documento da coleção original
          await deleteDoc(docRef);
        } else {
          console.log(`Documento ${id} não encontrado na coleção.`);
        }
      })
      .catch((error) => {
        console.error(`Erro ao processar o documento ${id}: ${error}`);
      });
  }

  finalizarcomanda(id: string) {
    const collectionInstance = collection(this.firestore, 'pedidosServidos');
    const docRef = doc(collectionInstance, id);
    const collectionInstanceRelatorio = collection(this.firestore, 'relatorio');

    getDoc(docRef)
      .then(async (docSnapshot) => {
        if (docSnapshot.exists()) {
          // Obtenha os dados do documento
          const docData = docSnapshot.data();

          // Obtenha a data de hoje no formato 'dd/mm/aaaa'
          const hoje = new Date();
          const dd = String(hoje.getDate()).padStart(2, '0');
          const mm = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
          const aaaa = hoje.getFullYear();
          const dataHoje = `${dd}/${mm}/${aaaa}`;

          let horarioFormatado = this.formatarHora(docData['horario']);

          // Atualize o campo 'horario' com a data de hoje
          docData['horario'] = `${horarioFormatado} ${dataHoje}`;
          docData['dezporcento'] = false;

          // Crie um novo documento na coleção "relatorio" com os dados atualizados
          await addDoc(collectionInstanceRelatorio, docData);

          // Exclua o documento da coleção original
          await deleteDoc(docRef);
        } else {
          console.log(`Documento ${id} não encontrado na coleção.`);
        }
      })
      .catch((error) => {
        console.error(`Erro ao processar o documento ${id}: ${error}`);
      });
  }

  formatarHora(hora: string): string {
    const horaNumerica = parseFloat(hora); // Converter para número
    const horas = Math.floor(horaNumerica);
    const minutos = Math.round((horaNumerica - horas) * 60);

    // Formate a hora e os minutos com dois dígitos (por exemplo, 09:30)
    const horaFormatada = horas.toString().padStart(2, '0');
    const minutosFormatados = minutos.toString().padStart(2, '0');

    return `${horaFormatada}:${minutosFormatados}`;
  }




  getNomeGarcomService(): Observable<any> {
    return new Observable((observer) => {
      const auth = getAuth();
      auth.onAuthStateChanged((user) => {
        if (user) {
          const email = user.email;
          observer.next(email);
          observer.complete();
        }
      });
    });
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
    const docRef = addDoc(collection(this.firestore, "users"), {
      valor: objSended.value.teste
    });
  }

  getRelatorio(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'relatorio');

    return collectionData(collectionInstance);
  }
















  getPedidosImprimir() {
    const collectionInstance = collection(this.firestore, 'impressao');
    return collectionData(collectionInstance, {idField: 'id'}).pipe(
      map((todosPedidos: any[]) => {
        todosPedidos.forEach((pedido) => {
          pedido.pedido.id = pedido.id;
          delete pedido.id;
        });
        return todosPedidos.map((pedido: any) => pedido['pedido']).sort((a, b) => {
          const horarioA = a.horario.toDate().getTime();
          const horarioB = b.horario.toDate().getTime();
          return horarioA - horarioB;
        });
      })
    );
  }

  excluirPedidosImprimir(id: string) {
    const collectionInstance = collection(this.firestore, 'impressao');
    const docReference = doc(collectionInstance, id);
    deleteDoc(docReference).then(() => {
    }).catch(() => {
    })
  }

  enviarPedidoNovo(carrinho: PratosNovo[]) {
    let confirmDialogMessage = false;
    carrinho.forEach((pedidoCarrinho) => {
      let pedido: PratosNovo = {
        nome: '',
        valor: 0,
        tipo: '',
        descricao: '',
        quantidade: 0,
        adicional1: {valor: 0, nome: ''},
        adicional2:  {valor: 0, nome: ''},
        cliente: '',
        garcom: '',
        horario: Timestamp.now(),
        id: ''
      };
      if(pedidoCarrinho.adicional1) {
        if(pedidoCarrinho.adicional1.nome !== '' && pedidoCarrinho.adicional1.nome !== undefined) {
          pedido.adicional1!.nome = pedidoCarrinho.adicional1.nome;
          pedido.adicional1!.valor = pedidoCarrinho.adicional1.valor;
        } else {
          delete pedido.adicional1;
        }
      }
      if(pedidoCarrinho.adicional2) {
        if(pedidoCarrinho.adicional2.nome !== '' && pedidoCarrinho.adicional2.nome !== undefined) {
          pedido.adicional2!.nome = pedidoCarrinho.adicional2.nome;
          pedido.adicional2!.valor = pedidoCarrinho.adicional2.valor;
        } else {
          delete pedido.adicional2;
        }
      }
      if(pedidoCarrinho.descricao !== '' && pedidoCarrinho.descricao !== undefined) {
        pedido.descricao = pedidoCarrinho.descricao;
      }else {
        delete pedido.descricao;
      }
      pedido.nome = pedidoCarrinho.nome;
      pedido.valor = pedidoCarrinho.valor;
      pedido.tipo = pedidoCarrinho.tipo;
      pedido.quantidade = pedidoCarrinho.quantidade;
      pedido.cliente = pedidoCarrinho.cliente;
      pedido.garcom = pedidoCarrinho.garcom;
      pedido.horario = pedidoCarrinho.horario;

      if(pedido.tipo.includes('bebida')) {
        const docRef = addDoc(collection(this.firestore, 'caixa'), {
          pedido
        }).then(() => {
          if(confirmDialogMessage === false) {
            this.confirmDialog(true);
            confirmDialogMessage = true;
          }
        }).catch(() => {
          this.confirmDialog(false)
        });
      } else {
        const docRef = addDoc(collection(this.firestore, 'impressao'), {
          pedido
        }).then(() => {
          if(confirmDialogMessage === false) {
            this.confirmDialog(true);
            confirmDialogMessage = true;
          }
        }).catch(() => {
          this.confirmDialog(false)
        });
        const docRef2 = addDoc(collection(this.firestore, 'caixa'), {
          pedido
        }).then(() => {
          if(confirmDialogMessage === false) {
            this.confirmDialog(true);
            confirmDialogMessage = true;
          }
        }).catch(() => {
          this.confirmDialog(false)
        });
      }
    });
  }

  confirmDialog(flag: boolean) {
    if(flag === true) {
      let confirmDialog = document.getElementById('confirm-dialog');
      let confirmDialogMessage = document.getElementById('confirm-dialog-message');
      confirmDialogMessage!.innerHTML = 'SUCESSO!';
      confirmDialog!.style.display = 'flex';
    } else {
      let confirmDialog = document.getElementById('confirm-dialog');
      let confirmDialogMessage = document.getElementById('confirm-dialog-message');
      confirmDialogMessage!.innerHTML = 'ERRO, tente novamente.';
      confirmDialogMessage!.style.color = 'red';
      confirmDialog!.style.display = 'flex';
    }
  }

  getNomeGarcomServiceNovo(): Promise<string> {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      auth.onAuthStateChanged((user) => {
        if (user) {
          const email = user.email;
          const nomeGarcom = email!.charAt(0).toUpperCase() + email!.slice(1).split(/@/)[0];
          resolve(nomeGarcom);
        } else {
          reject('Usuário não autenticado');
        }
      });
    });
  }

  getPedidosCaixaNovo(): Observable<PratosNovo[]> {
    const collectionInstance = collection(this.firestore, 'caixa');
    return collectionData(collectionInstance, {idField: 'id'}).pipe(
      map((colecao: any[]) => {
        colecao.forEach((pedido) => {
          pedido.pedido.id = pedido.id;
          delete pedido.id;
        });
        return colecao.map((item) => item['pedido']);
      })
    );
  }

  excluirPedidoCaixaNovo(id: string) {
    const collectionInstance = collection(this.firestore, 'caixa');
    const docReference = doc(collectionInstance, id);
    deleteDoc(docReference).then(() => {
      alert('Pedido Excluido!')
    }).catch(() => {
      alert("Erro. Tente novamente!")
    })
  }

  excluirPedidoCaixaNovoSemAlert(id: string) {
    const collectionInstance = collection(this.firestore, 'caixa');
    const docReference = doc(collectionInstance, id);
    deleteDoc(docReference).then(() => {

    }).catch(() => {

    })
  }

  updatePedidoCarrinho(pedido: any, id: string) {
    const docInstance = doc(this.firestore, 'caixa', id);
    let pedidoEnviar = {
      pedido: {
        nome: pedido.nome,
        valor: pedido.valor,
        tipo: pedido.tipo,
        descricao: pedido.descricao || '',
        quantidade: pedido.quantidade,
        adicional1: { nome: pedido.adicional1?.nome || '', valor: pedido.adicional1?.valor || 0 },
        adicional2: { nome: pedido.adicional2?.nome || '', valor: pedido.adicional2?.valor || 0 },
        cliente: pedido.cliente,
        garcom: pedido.garcom,
        horario: pedido.horario,
        id: pedido.id
      }
    }

    updateDoc(docInstance, pedidoEnviar).then(() => {
      this.confirmDialog(true);
    }).catch(() => {
      this.confirmDialog(false)
    });
  }

  enviandoPedidoProRelatorio(pedido: PratosNovo) {
    const docRef = addDoc(collection(this.firestore, 'relatorioNovo'), {
      pedido
    }).then(() => {
      this.confirmDialog(true)
    }).catch(() => {
      this.confirmDialog(false)
    });
  }
}
