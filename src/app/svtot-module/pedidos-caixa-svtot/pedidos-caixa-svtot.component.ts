import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PratosNovo } from 'src/app/pratos-novo';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ShareddataService } from 'src/app/services/shareddata.service';



@Component({
  selector: 'app-pedidos-caixa-svtot',
  templateUrl: './pedidos-caixa-svtot.component.html',
  styleUrls: ['./pedidos-caixa-svtot.component.css']
})
export class PedidosCaixaSvtotComponent {
  constructor(private sharedDataService: ShareddataService, private route: ActivatedRoute, private router: Router, private firestore: FirestoreService) {
    this.route.params.subscribe(params => {
      this.nomeCliente = params['nomeCliente'];
    });
    this.getPedidos();
  }


  nomeCliente: string = '';
  subTotal: number = 0;
  pedidosClienteSelecionado: PratosNovo[] = []

  maisPedido(nomeCliente: string) {
    this.router.navigate(['/principal/novopedido', nomeCliente]);
  }

  getPedidos() {
    this.sharedDataService.getPedidos().subscribe((todosPedidos: PratosNovo[]) => {
      this.subTotal = 0;
      this.pedidosClienteSelecionado = todosPedidos.filter((item) => item.cliente === this.nomeCliente);
      this.pedidosClienteSelecionado.forEach((pedido) => {
        if(pedido.adicional1) {
          this.subTotal += pedido.adicional1.valor;
        }
        if(pedido.adicional2) {
          this.subTotal += pedido.adicional2.valor;
        }
        this.subTotal += pedido.valor * pedido.quantidade;
      });
    });
  }

  somaValores(a?: number, b?: number, c?: number): number {
    let totalPedido: number = 0;
    if (typeof a !== 'undefined') {
      totalPedido += a;
    }
    if (typeof b !== 'undefined') {
      totalPedido += b;
    }
    if (typeof c !== 'undefined') {
      totalPedido += c;
    }
    return totalPedido;
  }

  voltar() {
    this.router.navigate(['/principal/caixa']);
  }

  formatToBrazilianReal(value: number | string): string {
    let formattedValue = Number(value.toString().replace(',', '.')).toFixed(2);
    return `R$ ${formattedValue.replace('.', ',')}`;
  }

  excluirItem(pedido: PratosNovo) {
    const confirmacao = window.confirm(`Deseja EXCLUIR ${pedido.nome}?`);
    if (confirmacao && pedido.id) {
      this.firestore.excluirPedidoCaixaNovo(pedido.id);
    }
  }

  editItemOpenDialog(pedido: PratosNovo) {

  }

  clickPedido(pedido: PratosNovo) {
  }

  capitalizeFirstLetterOfEachWord(inputString: string): string {
    const words = inputString.split(' ');
    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word;
      }
    });
    const resultString = capitalizedWords.join(' ');
    return resultString;
  }
}
