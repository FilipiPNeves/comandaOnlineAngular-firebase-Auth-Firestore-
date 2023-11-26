import { Component, HostListener, Renderer2 } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PratosNovo } from 'src/app/pratos-novo';
import { ShareddataService } from 'src/app/services/shareddata.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor(
    private firestore: FirestoreService,
    private sharedDataService: ShareddataService
  ) {
    this.setPedidosClientes();
    this.setNomegarcom();
    this.getNomeGarcom();
    this.checkScreenPraImprimir();
  }

  ngOnDestroy(): void {}

  nomeGarcom: string = '';
  todosClientes: string[] = []

  pedidosImprimir: PratosNovo[] = []

  checkScreenPraImprimir(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      this.getPedidosImprimir();
    }
  }

  getPedidosImprimir() {
    this.firestore.getPedidosImprimir().pipe(debounceTime(1000)).subscribe({
      next: (arrayTodosPedidos: PratosNovo[]) => {
        this.pedidosImprimir = [];
        for(let i = 0; i < arrayTodosPedidos.length; i++) {
          const pedido = arrayTodosPedidos[i];

          if (pedido.cliente === arrayTodosPedidos[0].cliente) {
            this.pedidosImprimir.push(pedido);
          } else {
            break;
          }
        }
        if(this.pedidosImprimir.length !== 0) {
          this.imprimirPedidos(this.pedidosImprimir);
          this.pedidosImprimir.forEach((pedido) => {
            if(pedido && pedido.id) {
              this.firestore.excluirPedidosImprimir(pedido.id);
            }
          });
        }
      },
      error: (error: any) => {
        console.error("Ocorreu um erro ao buscar os pedidos:", error);
      },
    });
  }

  imprimirPedidos(pedidosImprimir: PratosNovo[]) {
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
          .title {
            width: 100%;
            border-bottom: 1px solid black;
          }

          .cliente {
            width: 100%;
            font-size: 1.4em;
            font-weight: bolder;
            display: flex;
            text-align: center;
            justify-content: center;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .horadata {
            display: flex;
            justify-content: space-between;
            width: 90%;
            margin: 0.7em auto;
            font-weight: bolder;
          }

          .principal {
            width: 620px;
            height: 600px;
            font-weight: bolder;
            text-align: center;
            justify-content: center;
            transform: rotate(-90deg);
            border-left: 1px solid black;
            letter-spacing: 2px;
          }

          .nome {
            text-transform: uppercase;
            font-size: 60px;
          }

          .ad1 {
            font-size: 36px;
          }

          .ad2 {
            font-size: 36px;
          }

          .obs {
            font-size: 36px;
          }

          .quantidade {
            font-size: 60px;
          }

        </style>
      </head>
      <body>
    `;

    meuConteudoHTML += `
        <div class="title">
          <div class="cliente">
            ${pedidosImprimir[0].cliente}
          </div>
          <div class="horadata">
            <div class="hora">
              ${this.obterDataHoraAtual(false)}
            </div>
            <div class="hora">
              ${this.obterDataHoraAtual(true)}
            </div>
          </div>
        </div>
      `

    let nomeAdicionalTemporario1: string;
    let nomeAdicionalTemporario2: string;
    let obsTemporario: string;

    pedidosImprimir.forEach((pedido) => {
      nomeAdicionalTemporario1 = '';
      if(pedido.adicional1?.nome) {
        nomeAdicionalTemporario1 = " + " + pedido.adicional1?.nome;
      }
      nomeAdicionalTemporario2 = '';
      if(pedido.adicional2?.nome) {
        nomeAdicionalTemporario2 =  " + " + pedido.adicional2?.nome;
      }
      obsTemporario = '';
      if(pedido.descricao) {
        obsTemporario =  "OBS: " + pedido.descricao;
      }

      meuConteudoHTML += `
        <div class="principal">
          <div class="nome">
            ${pedido.nome}
          </div>
          <div class="quantidade">
          ${pedido.quantidade}(X)
          </div>
          <div class="ad1">
            ${nomeAdicionalTemporario1}
          </div>
          <div class="ad2">
            ${nomeAdicionalTemporario2}
          </div>
          <div class="obs">
          ${obsTemporario}
          </div>
        </div>
      `
    });

    meuConteudoHTML += '</body>'

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

  setPedidosClientes() {
    this.sharedDataService.setPedidosClientes();
  }

  setNomegarcom() {
    this.sharedDataService.setNomeGarcom('');
  }

  getNomeGarcom() {
    this.sharedDataService.getNomeGarcom().subscribe((nomeGarcom) => {
      this.nomeGarcom = nomeGarcom;
      localStorage.setItem('nomeGarcom', nomeGarcom);
    });
  }

  logout() {
    this.firestore.logoutService();
  }

  toolbarHidden = true;
  transparenteNgIf: boolean = false;
  toggleToolbar() {
    this.toolbarHidden = !this.toolbarHidden;
    this.transparenteNgIf = !this.transparenteNgIf;
  }

  buttonStyle = {
    'background-color': '#00a8e8',
    'color': 'white'
  };

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    if (target.classList.contains('confirm-dialog-backdrop')) {
      document.getElementById('confirm-dialog')!.style.display = 'none';
    }
  }
}
