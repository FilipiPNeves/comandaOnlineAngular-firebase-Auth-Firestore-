import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirestoreService } from './firestore.service';
import { PratosNovo } from '../pratos-novo';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor(private firestore: FirestoreService) { }

  private nomeGarcom = new BehaviorSubject<string>('');
  nomeGarcom$ = this.nomeGarcom.asObservable();

  private todosClientes = new BehaviorSubject<string[]>([]);
  todosClientes$ = this.todosClientes.asObservable();

  private arrayPedidos = new BehaviorSubject<PratosNovo[]>([]);
  arrayPedidos$ = this.arrayPedidos.asObservable();

  setNomeGarcom(data: string) {
    this.firestore.getNomeGarcomServiceNovo().then((email) => {
      data = email.charAt(0).toUpperCase() + email.slice(1).split(/@/)[0];
      this.nomeGarcom.next(data);
    });
  }

  getNomeGarcom(): Observable<string> {
    return this.nomeGarcom$;
  }


  setPedidosClientes() {
    this.firestore.getPedidosCaixaNovo().subscribe((arrayPedidos) => {
      let todosClientes: string[] = [];
      arrayPedidos.sort((a, b) => {
        const horarioA = a.horario.toDate().getTime();
        const horarioB = b.horario.toDate().getTime();
        return horarioA - horarioB;
      });
      arrayPedidos.forEach((pedido: PratosNovo) => {
        if(!todosClientes.includes(pedido.cliente)){
          todosClientes.push(pedido.cliente);
        }
      });
      this.todosClientes.next(todosClientes);
      this.arrayPedidos.next(arrayPedidos);
    });
  }

  getClientes(): Observable<string[]> {
    return this.todosClientes$;
  }

  getPedidos(): Observable<PratosNovo[]> {
    return this.arrayPedidos$;
  }
}
