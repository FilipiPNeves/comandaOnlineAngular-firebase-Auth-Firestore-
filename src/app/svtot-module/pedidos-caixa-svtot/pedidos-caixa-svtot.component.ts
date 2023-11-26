import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogNovoEditCarrinhoComponent } from 'src/app/dialogs/dialog-novo-edit-carrinho/dialog-novo-edit-carrinho.component';
import { DialogNovoFinalizarComandaComponent } from 'src/app/dialogs/dialog-novo-finalizar-comanda/dialog-novo-finalizar-comanda.component';
import { PratosNovo } from 'src/app/pratos-novo';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ShareddataService } from 'src/app/services/shareddata.service';



@Component({
  selector: 'app-pedidos-caixa-svtot',
  templateUrl: './pedidos-caixa-svtot.component.html',
  styleUrls: ['./pedidos-caixa-svtot.component.css']
})
export class PedidosCaixaSvtotComponent {
  constructor(private sharedDataService: ShareddataService, private route: ActivatedRoute, private router: Router, private firestore: FirestoreService, private dialog: MatDialog) {
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
      let valorPedidoUnico = 0;
      this.pedidosClienteSelecionado = todosPedidos.filter((item) => item.cliente === this.nomeCliente);
      this.pedidosClienteSelecionado.forEach((pedido) => {
        valorPedidoUnico = 0;
        if(pedido.adicional1) {
          valorPedidoUnico += pedido.adicional1.valor;
        }
        if(pedido.adicional2) {
          valorPedidoUnico += pedido.adicional2.valor
        }
        valorPedidoUnico += pedido.valor;
        this.subTotal += (valorPedidoUnico * pedido.quantidade);
      });

      const pedidosPendentes: PratosNovo[] = this.pedidosClienteSelecionado.filter((pedido) => {
        return pedido.feito !== true;
      });

      const pedidosConcluidos: PratosNovo[] = this.pedidosClienteSelecionado.filter((pedido) => {
        return pedido.feito === true;
      });

      this.pedidosClienteSelecionado = pedidosPendentes.concat(pedidosConcluidos);
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

  editItemOpenDialog(item2: PratosNovo) {
    let item: PratosNovo = {
      nome: item2.nome,
      valor: item2.valor,
      tipo: item2.tipo,
      descricao: item2.descricao || '',
      quantidade: item2.quantidade,
      adicional1: { nome: item2.adicional1?.nome || '', valor: item2.adicional1?.valor || 0 },
      adicional2: { nome: item2.adicional2?.nome || '', valor: item2.adicional2?.valor || 0 },
      cliente: item2.cliente,
      garcom: item2.garcom,
      horario: item2.horario,
      id: item2.id,
      feito: item2.feito || undefined
    }
    const dialogRef = this.dialog.open(DialogNovoEditCarrinhoComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(item => {
      try {
        this.firestore.updatePedidoCarrinho(item, item.id);
      } catch (error) {

      }
    });
  }
  private lastClickTime = 0;
  private doubleClickDelay = 300;
  private pedidoClicado?: PratosNovo;
  shouldAddGrayCardClass(item: any): boolean {
    return item.feito === true;
  }

  async doubleClickPedido(pedido: PratosNovo) {
    const currentTime = new Date().getTime();
    if ((currentTime - this.lastClickTime < this.doubleClickDelay) && pedido === this.pedidoClicado) {
      if(pedido.id) {
        if(pedido.feito === true) {
          await this.firestore.itemFeito(pedido, !pedido.feito, pedido.id);
        } else {
          await this.firestore.itemFeito(pedido, true, pedido.id);
        }
      };
    } else {
      // Apenas um clique simples
      this.lastClickTime = currentTime;
      this.pedidoClicado = pedido;
    }
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

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    if (target.classList.contains('confirm-dialog-backdrop')) {
      document.getElementById('confirm-dialog')!.style.display = 'none';
    }
  }

  finalizarComanda(pedidosClienteSelecionado: PratosNovo[]) {
    const dialogRef = this.dialog.open(DialogNovoFinalizarComandaComponent, {
      data: {pedidosClienteSelecionado: pedidosClienteSelecionado, subTotal: this.subTotal},
      width: "50%"
    });

    dialogRef.afterClosed().subscribe(flag => {
    });
  }


  nomePedido: string = '';
  totalDeUmPedido: number = 0;

  imprimirComanda(pedidosClienteSelecionado: PratosNovo[]) {
    this.nomePedido = '';
    let meuConteudoHTML = `
      <html>
      <head>
        <title>Minha Nova Aba</title>
        <style>
          /* Estilos CSS incorporados */
          body {
            background-color: #fff;
            font-family: Arial, sans-serif;
          }

          .divTitle {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
            margin: 1em 0;
            font-size: 1.2em
          }

          .divCliente {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
            margin: 1em 0;
          }

          .divPedido {
            display: flex;
            width: 95%;
            margin: 1em auto;
            font-size: 0.8em
          }

          .nome {
            width: 65%;
          }

          .quantidade {
            width: 5%;
            text-align: center;
          }

          .valor {
            width: 30%;
            text-align: right;
          }

          .forte {
            font-weight: bolder;
          }

          .totais {
            display: flex;
            width: 100%;
            justify-content: space-between;
          }

          .divHoraData {
            display: flex;
            width: 100%;
            justify-content: space-between;
          }

          .hora {
            margin-left: 1em;
          }

          .data {
            margin-right: 1em;
          }
        </style>
      </head>
      <body>
      <div class="divTitle">
          SENTINELAS DO MAR
      </div>
      <div class="divCliente">
          ------------ ${pedidosClienteSelecionado[0].cliente.toUpperCase()} ------------
      </div>
      <div class="divPedido">
        <div class="nome forte">PEDIDO</div>
        <div class="quantidade forte" style="margin-left: -1em">QTDE</div>
        <div class="valor forte" style="margin-left: 0.6em">$ UNID</div>
      </div>
    `;



    pedidosClienteSelecionado.forEach((pedido) => {
      this.nomePedido = pedido.nome;
      this.totalDeUmPedido = pedido.valor;
      if(pedido.adicional1 && pedido.adicional1.nome && pedido.adicional1.valor) {
        this.nomePedido += " + " + pedido.adicional1.nome;
        this.totalDeUmPedido += pedido.adicional1.valor;
      }
      if(pedido.adicional2 && pedido.adicional2.nome && pedido.adicional2.valor) {
        this.nomePedido += " + " + pedido.adicional2.nome;
        this.totalDeUmPedido += pedido.adicional2.valor;
      }
      meuConteudoHTML += `
        <div class="divPedido">
          <div class="nome">${this.nomePedido}</div>
          <div class="quantidade">${pedido.quantidade}x</div>
          <div class="valor">${this.formatToBrazilianReal(this.totalDeUmPedido)}</div>
        </div>
      `;
    });
    meuConteudoHTML += `
        <div>
        -------------------------------------------------
        </div>
        <div class="divHoraData">
          <div class="hora"><div>SUBTOTAL</div> <br> ${this.formatToBrazilianReal(this.subTotal)}</div>
          <div class="data"><div style="margin-left: 1em;">TOTAL</div> <br> ${(this.formatToBrazilianReal(this.subTotal*1.1))}</div>
        </div>
        <div>
        -------------------------------------------------
        </div>
        <div class="divHoraData">
          <div class="hora">${this.obterDataHoraAtual(false)}</div>
          <div class="data">${this.obterDataHoraAtual(true)}</div>
        </div>
      `;

    const novaAba = window.open('', '_blank');
    novaAba!.document.open();
    novaAba!.document.write(meuConteudoHTML);
    novaAba!.print();
    novaAba!.close();
  }

  obterDataHoraAtual(dataouhr: boolean): string {
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = String(agora.getFullYear());
    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");

    const dataFormatada = `${dia}/${mes}/${ano}`;
    const horaFormatada = `${hora}:${minuto}`;

    if(dataouhr) {
      return dataFormatada;
    } else {
      return horaFormatada;
    }
  }
}
