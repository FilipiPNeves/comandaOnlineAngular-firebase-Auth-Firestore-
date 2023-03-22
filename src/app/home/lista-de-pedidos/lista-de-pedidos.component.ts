import { Component, ElementRef, HostListener } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
  feito: any
}

interface Pratos {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-lista-de-pedidos',
  templateUrl: './lista-de-pedidos.component.html',
  styleUrls: ['./lista-de-pedidos.component.css']
})
export class ListaDePedidosComponent {
  constructor(
    private firestoreService: FirestoreService,
    private _eref: ElementRef,
    private router: Router
  ) {
    this.getData();
    this.requestNotificationPermission();
  }

  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'nomeQuartoOuPassante'];
  dataSource: todosPedidos[] = [];

  flagPopUp = false;
  idPopUp = '';
  pratoPopUp = '';
  quartoPopUp = '';
  horarioPopUp = '';
  obsPopUp = '';
  valorPopUp = 0;
  quantPopUp = 0;

  pratoAntigoOuAtual = '';

  flagDivEditarPedido = false;

  feito: any = false;

  flagPopUpExcluirPedido: boolean = false;

  pasteis: Pratos[] = [
    { nome: 'Pastel Napolitado', valor: 10 },
    { nome: 'Pastel de queijo', valor: 11 },
    { nome: 'Pastel de carne', valor: 12 }
  ]

  lanches: Pratos[] = [
    { nome: 'Misto quente', valor: 22 },
    { nome: 'Cachorro quente', valor: 22 },
    { nome: 'Hambúrguer', valor: 22 },
    { nome: 'Desejos', valor: 22 }
  ]

  petiscos: Pratos[] = [
    { nome: 'Polvo a vinagrete', valor: 22 },
    { nome: 'Tataki', valor: 22 },
    { nome: 'Cevitche', valor: 22 },
    { nome: 'Lula dore', valor: 22 },
    { nome: 'Camarão dore', valor: 22 },
    { nome: 'Camarão alho', valor: 22 },
    { nome: 'Bolinho de bacalhau', valor: 22 },
    { nome: 'Frango a passarinho', valor: 22 },
    { nome: 'Filé aperetivo', valor: 22 },
    { nome: 'Fritas', valor: 22 },
    { nome: 'Tabua de frios', valor: 22 }
  ]

  frangos: Pratos[] = [
    { nome: 'Frango Grelhado a campanha', valor: 22 },
    { nome: 'Frango a parmegiana', valor: 22 },
    { nome: 'Frango ao molho curry', valor: 22 },
    { nome: 'Strogonoff de frango', valor: 22 }
  ]

  contraFiles: Pratos[] = [
    { nome: 'Contra-filé grelhado a campanha', valor: 22 },
    { nome: 'Contra-filé a parmegiana', valor: 22 },
    { nome: 'Contra-filé a cavala', valor: 22 },
    { nome: 'Contra-filé ao molho gorgonzola', valor: 22 },
    { nome: 'Contra-filé ao molho madeira', valor: 22 }
  ]
  saladas: Pratos[] = [
    { nome: 'Salada grega', valor: 22 },
    { nome: 'Salada tropical', valor: 22 },
    { nome: 'Salada Sentinelas', valor: 22 }
  ]

  sopas: Pratos[] = [
    { nome: 'Frutos do mar', valor: 22 },
    { nome: 'Do dia', valor: 22 }
  ]

  frutosDoMar: Pratos[] = [
    { nome: 'Peixes na brasa', valor: 22 },
    { nome: 'Peixe frito', valor: 22 },
    { nome: 'Peixe grelhado', valor: 22 },
    { nome: 'Ao molho de camarão', valor: 22 },
    { nome: 'Camarão no abacaxi', valor: 22 },
    { nome: 'Camarão ao catupiry', valor: 22 },
    { nome: 'Camarão empanado', valor: 22 },
    { nome: 'Risoto', valor: 22 },
    { nome: 'Moqueca', valor: 22 }
    ]

  massas: Pratos[] = [
    { nome: 'Espaguete com camarão ao pesto', valor: 22 },
    { nome: 'Parisiense', valor: 22 },
    { nome: 'Primavera', valor: 22 },
    { nome: 'Nhoque', valor: 22 },
    { nome: 'Rondelli', valor: 22 },
    { nome: 'Canelone', valor: 22 },
    { nome: 'Raviolli', valor: 22 }
  ]

  bebidasCom: Pratos[] = [
    { nome: 'Cervejas', valor: 22 },
    { nome: 'Dose Whisky', valor: 22 },
    { nome: 'Dose cachaça', valor: 22 },
    { nome: 'Dose de run', valor: 22 },
    { nome: 'Dose de gin', valor: 22 },
    { nome: 'Dose de vodka', valor: 22 },
    { nome: 'Vinhos', valor: 22 },
    { nome: 'Espumantes', valor: 22 },
    { nome: 'Grin tônica', valor: 22 },
    { nome: 'Caipivodka', valor: 22 },
    { nome: 'Caipirinha', valor: 22 },
    { nome: 'Pina colada', valor: 22 },
    { nome: 'Margarita', valor: 22 },
    { nome: 'Mojito', valor: 22 },
    { nome: 'Sex on the beach', valor: 22 },
    { nome: 'Corona rita', valor: 22 },
    { nome: 'Cosmopolitan', valor: 22 },
    { nome: 'Sunset sentinelas', valor: 22 },
    { nome: 'Roney night', valor: 22 }
  ];


  bebidasSem: Pratos[] = [
    { nome: 'Água sem gás', valor: 22 },
    { nome: 'Água com gás', valor: 22 },
    { nome: 'Água de coco', valor: 22 },
    { nome: 'Refrigerante', valor: 22 },
    { nome: 'Sucos naturais', valor: 22 }
    ];

  sobremesas: Pratos[] = [
    { nome: 'Petiti gateau', valor: 22 },
    { nome: 'Peras caramelizadas', valor: 22 },
    { nome: 'Pudim', valor: 22 },
    { nome: 'Do dia', valor: 22 }
    ]


    async requestNotificationPermission() {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
          console.warn('Permissão para notificações não concedida');
        }
      } else {
        console.warn('Este navegador não suporta notificações');
      }
    }

    getData() {
      this.firestoreService.getPedidos().subscribe((val: todosPedidos[]) => {
        const oldLength = this.dataSource.length;
        this.dataSource = val;

        if (this.dataSource.length > oldLength) {
          this.notifyNewElement();
        }
      });
    }

    notifyNewElement() {
      // Verifica se o usuário está na rota correta ou se a última rota dele foi essa
      const currentUrl = this.router.url;
      const lastUrl = localStorage.getItem('lastUrl');
      if (currentUrl !== '/home/listadepedidos' && lastUrl !== '/home/listadepedidos') {
        return;
      }

      // Verifica se a tela do usuário está oculta
      if ('visibilityState' in document && document.visibilityState !== 'visible') {
        // Salva a última rota do usuário
        localStorage.setItem('lastUrl', currentUrl);

        if ('Notification' in window && Notification.permission === 'granted') {
          const notification = new Notification('Novo Pedido', { silent: true });
          if ('vibrate' in navigator) {
            navigator.vibrate(500); // Vibração por 500ms
          }
        }
      }
    }



  onRowClicked(
    id: string,
    prato: string,
    quarto: string,
    horario: string,
    obs: string,
    valor: number,
    quantidade: number,
    feito: any
  ) {
    if(this.flagPopUp == true) {
      this.flagPopUp = false;
    }else this.flagPopUp = true;

    this.idPopUp = id;
    this.quartoPopUp = quarto;
    this.pratoPopUp = prato;
    this.pratoAntigoOuAtual = prato;
    this.horarioPopUp = horario;
    this.obsPopUp = obs;
    this.valorPopUp = valor;
    this.quantPopUp = quantidade;
    this.feito = feito;
  }

  pedidoFeito(
    id: string,
    prato: string,
    quarto: string,
    horario: string,
    obs: string,
    valor: number,
    quantidade: number
  ) {
    this.firestoreService.pedidoFeito(id, prato, quarto, horario, obs, valor, quantidade);
    this.flagPopUp = false
  }

  @HostListener('document:click', ['$event'])
  closePopUp(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.flagPopUp = false;
    }
  }


  excluirPedido() {
    this.flagPopUpExcluirPedido = true;
    this.flagPopUp = false;
  }

  onConfirm() {
    this.firestoreService.excluirPedido(this.idPopUp);
    this.flagPopUpExcluirPedido = false;
  }

  onCancel() {
    this.flagPopUpExcluirPedido = false;
  }

  editarPedido() {
    this.flagPopUp = false;
    this.flagDivEditarPedido = true;
  }

  fecharDivEditar() {
    this.flagDivEditarPedido = false;
  }

  salvarEdicao(pedido: any) {

    let obj = {
      horario: this.horarioPopUp,
      nomeQuartoOuPassante: this.quartoPopUp,
      obs: pedido.value.obs,
      prato: pedido.value.prato.nome,
      quant: pedido.value.quantidade,
      valor: pedido.value.prato.valor
    }

    try{
      this.firestoreService.updatePedido(obj, this.idPopUp);
      alert("Alteração concluida com sucesso!")
    }catch{
      alert("Alteração não concluida com sucesso!")
    }
    this.flagDivEditarPedido = false;
  }

  pedidoSendoFeito(idPopUp: string) {
    this.firestoreService.pedidoSendoFeito(idPopUp);
    this.flagPopUp = false;
  }
}
