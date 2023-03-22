import { Component, ElementRef, ViewChild  } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ViewportScroller } from '@angular/common';

interface nomeQuarto {
  value: string;
}

interface Pratos {
  nome: string;
  valor: number;
}




@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent {

  constructor(private firestoreService: FirestoreService, private readonly viewportScroller: ViewportScroller) {}

  pedidoEnvio: any[] = []


  nomesQuartos: nomeQuarto[] = [
    { value: 'Norte'},
    { value: 'Sul'},
    { value: 'Leste'},
    { value: 'Sol'},
    { value: 'Master 1'},
    { value: 'Master 2'},
    { value: 'Master 3'},
    { value: 'Master 4'},
    { value: 'Master 5'},
    { value: 'Vip 1'},
    { value: 'Vip 2'},
    { value: 'Vip 3'},
    { value: 'Ilha'},
    { value: 'Chalé'}
  ];
  nomePassanteSelecionado?: any;
  quartoSelecionado?: any;

  estadoCheckbox?: number;
  nomeQuartoCheck: boolean = true;
  nomePassanteCheck: boolean = true;




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



  pratoSelecionado1: string = '';
  pratoSelecionado2: string = '';
  pratoSelecionado3: string = '';
  pratoSelecionado4: string = '';
  pratoSelecionado5: string = '';
  pratoSelecionado6: string = '';
  pratoSelecionado7: string = '';
  pratoSelecionado8: string = '';

  quantSelecionada1?: number = 1;
  quantSelecionada2?: number = 1;
  quantSelecionada3?: number = 1;
  quantSelecionada4?: number = 1;
  quantSelecionada5?: number = 1;
  quantSelecionada6?: number = 1;
  quantSelecionada7?: number = 1;
  quantSelecionada8?: number = 1;

  observacoes1?: string;
  observacoes2?: string;
  observacoes3?: string;
  observacoes4?: string;
  observacoes5?: string;
  observacoes6?: string;
  observacoes7?: string;
  observacoes8?: string;

  pratoSelecionado1Alcool: string = '';
  pratoSelecionado2Alcool: string = '';
  pratoSelecionado3Alcool: string = '';
  pratoSelecionado4Alcool: string = '';
  pratoSelecionado5Alcool: string = '';
  pratoSelecionado6Alcool: string = '';
  pratoSelecionado7Alcool: string = '';
  pratoSelecionado8Alcool: string = '';

  quantSelecionada1Alcool?: number = 1;
  quantSelecionada2Alcool?: number = 1;
  quantSelecionada3Alcool?: number = 1;
  quantSelecionada4Alcool?: number = 1;
  quantSelecionada5Alcool?: number = 1;
  quantSelecionada6Alcool?: number = 1;
  quantSelecionada7Alcool?: number = 1;
  quantSelecionada8Alcool?: number = 1;

  observacoes1Alcool: string = '';
  observacoes2Alcool: string = '';
  observacoes3Alcool: string = '';
  observacoes4Alcool: string = '';
  observacoes5Alcool: string = '';
  observacoes6Alcool: string = '';
  observacoes7Alcool: string = '';
  observacoes8Alcool: string = '';




  pratoSelecionado1SemAlcool: string = '';
  pratoSelecionado2SemAlcool: string = '';
  pratoSelecionado3SemAlcool: string = '';
  pratoSelecionado4SemAlcool: string = '';
  pratoSelecionado5SemAlcool: string = '';
  pratoSelecionado6SemAlcool: string = '';
  pratoSelecionado7SemAlcool: string = '';
  pratoSelecionado8SemAlcool: string = '';

  quantSelecionada1SemAlcool: number = 1;
  quantSelecionada2SemAlcool: number = 1;
  quantSelecionada3SemAlcool: number = 1;
  quantSelecionada4SemAlcool: number = 1;
  quantSelecionada5SemAlcool: number = 1;
  quantSelecionada6SemAlcool: number = 1;
  quantSelecionada7SemAlcool: number = 1;
  quantSelecionada8SemAlcool: number = 1;

  observacoes1SemAlcool: string = '';
  observacoes2SemAlcool: string = '';
  observacoes3SemAlcool: string = '';
  observacoes4SemAlcool: string = '';
  observacoes5SemAlcool: string = '';
  observacoes6SemAlcool: string = '';
  observacoes7SemAlcool: string = '';
  observacoes8SemAlcool: string = '';





  pratoSelecionado1Sobremesa: string = '';
  pratoSelecionado2Sobremesa: string = '';
  pratoSelecionado3Sobremesa: string = '';
  pratoSelecionado4Sobremesa: string = '';
  pratoSelecionado5Sobremesa: string = '';
  pratoSelecionado6Sobremesa: string = '';
  pratoSelecionado7Sobremesa: string = '';
  pratoSelecionado8Sobremesa: string = '';

  quantSelecionada1Sobremesa: number = 1;
  quantSelecionada2Sobremesa: number = 1;
  quantSelecionada3Sobremesa: number = 1;
  quantSelecionada4Sobremesa: number = 1;
  quantSelecionada5Sobremesa: number = 1;
  quantSelecionada6Sobremesa: number = 1;
  quantSelecionada7Sobremesa: number = 1;
  quantSelecionada8Sobremesa: number = 1;

  observacoes1Sobremesa: string = '';
  observacoes2Sobremesa: string = '';
  observacoes3Sobremesa: string = '';
  observacoes4Sobremesa: string = '';
  observacoes5Sobremesa: string = '';
  observacoes6Sobremesa: string = '';
  observacoes7Sobremesa: string = '';
  observacoes8Sobremesa: string = '';

  quants  = [
    {valor: 1},
    {valor: 2},
    {valor: 3},
    {valor: 4},
    {valor: 5},
    {valor: 6},
    {valor: 7},
    {valor: 8},
    {valor: 9},
    {valor: 10}
  ];


  mostrarPrato1 = false;
  mostrarPrato2 = false;
  mostrarPrato3 = false;
  mostrarPrato4 = false;
  mostrarPrato5 = false;
  mostrarPrato6 = false;
  mostrarPrato7 = false;
  mostrarPrato8 = false;

  mostrarBebidaCom1 = false;
  mostrarBebidaCom2 = false;
  mostrarBebidaCom3 = false;
  mostrarBebidaCom4 = false;
  mostrarBebidaCom5 = false;
  mostrarBebidaCom6 = false;
  mostrarBebidaCom7 = false;
  mostrarBebidaCom8 = false;

  mostrarBebidaSem1 = false;
  mostrarBebidaSem2 = false;
  mostrarBebidaSem3 = false;
  mostrarBebidaSem4 = false;
  mostrarBebidaSem5 = false;
  mostrarBebidaSem6 = false;
  mostrarBebidaSem7 = false;
  mostrarBebidaSem8 = false;

  mostrarSobremesa1 = false;
  mostrarSobremesa2 = false;
  mostrarSobremesa3 = false;
  mostrarSobremesa4 = false;
  mostrarSobremesa5 = false;
  mostrarSobremesa6 = false;
  mostrarSobremesa7 = false;
  mostrarSobremesa8 = false;




  addPrato() {
    if(this.mostrarPrato1 === false) {
      this.mostrarPrato1 = true;
    } else if (this.mostrarPrato2 === false ){
      this.mostrarPrato2 = true;
    } else if (this.mostrarPrato3 === false ){
      this.mostrarPrato3 = true;
    } else if (this.mostrarPrato4 === false ){
      this.mostrarPrato4 = true;
    } else if (this.mostrarPrato5 === false ){
      this.mostrarPrato5 = true;
    } else if (this.mostrarPrato6 === false ){
      this.mostrarPrato6 = true;
    } else if (this.mostrarPrato7 === false ){
      this.mostrarPrato7 = true;
    } else if (this.mostrarPrato8 === false ){
      this.mostrarPrato8 = true;
    }

    const element = document.getElementById('botaoMaisPrato');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + this.viewportScroller.getScrollPosition()[1];
      const margin = 20 * 16; // 10em em pixels (assumindo font-size padrão de 16px)
      const position = topOffset - margin;
      this.viewportScroller.scrollToPosition([0, position]);
    }


  }


  addBebidaCom() {
    if(this.mostrarBebidaCom1 === false) {
      this.mostrarBebidaCom1 = true;
    } else if (this.mostrarBebidaCom2 === false ){
      this.mostrarBebidaCom2 = true;
    } else if (this.mostrarBebidaCom3 === false ){
      this.mostrarBebidaCom3 = true;
    } else if (this.mostrarBebidaCom4 === false ){
      this.mostrarBebidaCom4 = true;
    } else if (this.mostrarBebidaCom5 === false ){
      this.mostrarBebidaCom5 = true;
    } else if (this.mostrarBebidaCom6 === false ){
      this.mostrarBebidaCom6 = true;
    } else if (this.mostrarBebidaCom7 === false ){
      this.mostrarBebidaCom7 = true;
    } else if (this.mostrarBebidaCom8 === false ){
      this.mostrarBebidaCom8 = true;
    }

    const element = document.getElementById('botaoMaisBebidaCom');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + this.viewportScroller.getScrollPosition()[1];
      const margin = 20 * 16; // 10em em pixels (assumindo font-size padrão de 16px)
      const position = topOffset - margin;
      this.viewportScroller.scrollToPosition([0, position]);
    }
  }

  addBebidaSem() {
    if(this.mostrarBebidaSem1 === false) {
      this.mostrarBebidaSem1 = true;
    } else if (this.mostrarBebidaSem2 === false ){
      this.mostrarBebidaSem2 = true;
    } else if (this.mostrarBebidaSem3 === false ){
      this.mostrarBebidaSem3 = true;
    } else if (this.mostrarBebidaSem4 === false ){
      this.mostrarBebidaSem4 = true;
    } else if (this.mostrarBebidaSem5 === false ){
      this.mostrarBebidaSem5 = true;
    } else if (this.mostrarBebidaSem6 === false ){
      this.mostrarBebidaSem6 = true;
    } else if (this.mostrarBebidaSem7 === false ){
      this.mostrarBebidaSem7 = true;
    } else if (this.mostrarBebidaSem8 === false ){
      this.mostrarBebidaSem8 = true;
    }

    const element = document.getElementById('botaoMaisBebidaSem');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + this.viewportScroller.getScrollPosition()[1];
      const margin = 18 * 16; // 10em em pixels (assumindo font-size padrão de 16px)
      const position = topOffset - margin;
      this.viewportScroller.scrollToPosition([0, position]);
    }
  }

  addSobremesa() {
    if(this.mostrarSobremesa1 === false) {
      this.mostrarSobremesa1 = true;
    } else if (this.mostrarSobremesa2 === false ){
      this.mostrarSobremesa2 = true;
    } else if (this.mostrarSobremesa3 === false ){
      this.mostrarSobremesa3 = true;
    } else if (this.mostrarSobremesa4 === false ){
      this.mostrarSobremesa4 = true;
    } else if (this.mostrarSobremesa5 === false ){
      this.mostrarSobremesa5 = true;
    } else if (this.mostrarSobremesa6 === false ){
      this.mostrarSobremesa6 = true;
    } else if (this.mostrarSobremesa7 === false ){
      this.mostrarSobremesa7 = true;
    } else if (this.mostrarSobremesa8 === false ){
      this.mostrarSobremesa8 = true;
    }

    const element = document.getElementById('botaoEnviar');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + this.viewportScroller.getScrollPosition()[1];
      const margin = 28 * 16; // 10em em pixels (assumindo font-size padrão de 16px)
      const position = topOffset - margin;
      this.viewportScroller.scrollToPosition([0, position]);
    }
  }


  excluirPrato(x: number) {
    if(x === 1) {
      this.mostrarPrato1 = false;
      this.pratoSelecionado1 = '';
      this.quantSelecionada1 = 1;
    }else if(x === 2) {
      this.mostrarPrato2 = false;
      this.pratoSelecionado2 = '';
      this.quantSelecionada2 = 1;
    }else if(x === 3) {
      this.mostrarPrato3 = false
      this.pratoSelecionado3 = '';
      this.quantSelecionada3 = 1;
    }else if(x === 4) {
      this.mostrarPrato4 = false
      this.pratoSelecionado4 = '';
      this.quantSelecionada4 = 1;
    }else if(x === 5) {
      this.mostrarPrato5 = false
      this.pratoSelecionado5 = '';
      this.quantSelecionada5 = 1;
    }else if(x === 6) {
      this.mostrarPrato6 = false
      this.pratoSelecionado6 = '';
      this.quantSelecionada6 = 1;
    }else if(x === 7) {
      this.mostrarPrato7 = false
      this.pratoSelecionado7 = '';
      this.quantSelecionada7 = 1;
    }else if(x === 8) {
      this.mostrarPrato8 = false
      this.pratoSelecionado8 = '';
      this.quantSelecionada8 = 1;
    }
  }

  excluirAlcool(x: number) {
    if(x === 1) {
      this.mostrarBebidaCom1 = false;
      this.pratoSelecionado1Alcool = '';
      this.quantSelecionada1Alcool = 1;
    }else if(x === 2) {
      this.mostrarBebidaCom2 = false;
      this.pratoSelecionado1Alcool = '';
      this.quantSelecionada1Alcool = 1;
    }else if(x === 3) {
      this.mostrarBebidaCom3 = false;
      this.pratoSelecionado1Alcool = '';
      this.quantSelecionada1Alcool = 1;
    }else if(x === 4) {
      this.mostrarBebidaCom4 = false;
      this.pratoSelecionado1Alcool = '';
      this.quantSelecionada1Alcool = 1;
    }else if(x === 5) {
      this.mostrarBebidaCom5 = false;
      this.pratoSelecionado1Alcool = '';
      this.quantSelecionada1Alcool = 1;
    }else if(x === 6) {
      this.mostrarBebidaCom6 = false;
      this.pratoSelecionado1Alcool = '';
      this.quantSelecionada1Alcool = 1;
    }else if(x === 7) {
      this.mostrarBebidaCom7 = false;
      this.pratoSelecionado1Alcool = '';
      this.quantSelecionada1Alcool = 1;
    }else if(x === 8) {
      this.mostrarBebidaCom8 = false;
      this.pratoSelecionado1Alcool = '';
      this.quantSelecionada1Alcool = 1;
    }
  }

  excluirSemAlcool(x: number) {
    if(x === 1) {
      this.mostrarBebidaSem1 = false;
      this.pratoSelecionado1SemAlcool = '';
      this.quantSelecionada1SemAlcool = 1;
    }else if(x === 2) {
      this.mostrarBebidaSem2 = false;
      this.pratoSelecionado1SemAlcool = '';
      this.quantSelecionada1SemAlcool = 1;
    }else if(x === 3) {
      this.mostrarBebidaSem3 = false;
      this.pratoSelecionado1SemAlcool = '';
      this.quantSelecionada1SemAlcool = 1;
    }else if(x === 4) {
      this.mostrarBebidaSem4 = false;
      this.pratoSelecionado1SemAlcool = '';
      this.quantSelecionada1SemAlcool = 1;
    }else if(x === 5) {
      this.mostrarBebidaSem5 = false;
      this.pratoSelecionado1SemAlcool = '';
      this.quantSelecionada1SemAlcool = 1;
    }else if(x === 6) {
      this.mostrarBebidaSem6 = false;
      this.pratoSelecionado1SemAlcool = '';
      this.quantSelecionada1SemAlcool = 1;
    }else if(x === 7) {
      this.mostrarBebidaSem7 = false;
      this.pratoSelecionado1SemAlcool = '';
      this.quantSelecionada1SemAlcool = 1;
    }else if(x === 8) {
      this.mostrarBebidaSem8 = false;
      this.pratoSelecionado1SemAlcool = '';
      this.quantSelecionada1SemAlcool = 1;
    }
  }

  excluirSobremesa(x: number) {
    if(x === 1) {
      this.mostrarSobremesa1 = false;
      this.pratoSelecionado1Sobremesa = '';
      this.quantSelecionada1Sobremesa = 1;
    }else if(x === 2) {
      this.mostrarSobremesa2 = false;
      this.pratoSelecionado1Sobremesa = '';
      this.quantSelecionada1Sobremesa = 1;
    }else if(x === 3) {
      this.mostrarSobremesa3 = false;
      this.pratoSelecionado1Sobremesa = '';
      this.quantSelecionada1Sobremesa = 1;
    }else if(x === 4) {
      this.mostrarSobremesa4 = false;
      this.pratoSelecionado1Sobremesa = '';
      this.quantSelecionada1Sobremesa = 1;
    }else if(x === 5) {
      this.mostrarSobremesa5 = false;
      this.pratoSelecionado1Sobremesa = '';
      this.quantSelecionada1Sobremesa = 1;
    }else if(x === 6) {
      this.mostrarSobremesa6 = false;
      this.pratoSelecionado1Sobremesa = '';
      this.quantSelecionada1Sobremesa = 1;
    }else if(x === 7) {
      this.mostrarSobremesa7 = false;
      this.pratoSelecionado1Sobremesa = '';
      this.quantSelecionada1Sobremesa = 1;
    }else if(x === 8) {
      this.mostrarSobremesa8 = false;
      this.pratoSelecionado1Sobremesa = '';
      this.quantSelecionada1Sobremesa = 1;
    }
  }

  //Função para as checkboxs aparecerem e sumirem
  onChangeCheckbox() {
    if(this.estadoCheckbox == 1) {
      this.nomePassanteCheck = true;
      this.nomeQuartoCheck = false;
      this.nomePassanteSelecionado = '';
    }else {
      this.quartoSelecionado = '';
      this.nomeQuartoCheck = true;
      this.nomePassanteCheck = false;
    }

  }


  enviarPedido(pedido: any) {

    if(this.mostrarPrato1) {
      if(this.pratoSelecionado1 != '') {
        this.pedidoEnvio[0] = {
          prato: this.pratoSelecionado1,
          quantPrato: this.quantSelecionada1,
          obsPrato: this.observacoes1
        }
      }
    }

    if(this.mostrarPrato2) {
      if(this.pratoSelecionado2 != '') {
        this.pedidoEnvio[1] = {
          prato: this.pratoSelecionado2,
          quantPrato: this.quantSelecionada2,
          obsPrato: this.observacoes2
        }
      }
    }

    if(this.mostrarPrato3) {
      if(this.pratoSelecionado3 != '') {
        this.pedidoEnvio[2] = {
          prato: this.pratoSelecionado3,
          quantPrato: this.quantSelecionada3,
          obsPrato: this.observacoes3
        }
      }
    }

    if(this.mostrarPrato4) {
      if(this.pratoSelecionado4 != '') {
        this.pedidoEnvio[3] = {
          prato: this.pratoSelecionado4,
          quantPrato: this.quantSelecionada4,
          obsPrato: this.observacoes4
        }
      }
    }

    if(this.mostrarPrato5) {
      if(this.pratoSelecionado5 != '') {
        this.pedidoEnvio[4] = {
          prato: this.pratoSelecionado5,
          quantPrato: this.quantSelecionada5,
          obsPrato: this.observacoes5
        }
      }
    }

    if(this.mostrarPrato6) {
      if(this.pratoSelecionado6 != '') {
        this.pedidoEnvio[5] = {
          prato: this.pratoSelecionado6,
          quantPrato: this.quantSelecionada6,
          obsPrato: this.observacoes6
        }
      }
    }

    if(this.mostrarPrato7) {
      if(this.pratoSelecionado7 != '') {
        this.pedidoEnvio[6] = {
          prato: this.pratoSelecionado7,
          quantPrato: this.quantSelecionada7,
          obsPrato: this.observacoes7
        }
      }
    }

    if(this.mostrarPrato8) {
      if(this.pratoSelecionado8 != '') {
        this.pedidoEnvio[7] = {
          prato: this.pratoSelecionado8,
          quantPrato: this.quantSelecionada8,
          obsPrato: this.observacoes8
        }
      }
    }





    if(this.mostrarBebidaCom1) {
      if(this.pratoSelecionado1Alcool != '') {
        this.pedidoEnvio[8] = {
          alcool: this.pratoSelecionado1Alcool,
          quantAlcool: this.quantSelecionada1Alcool,
          obsAlcool: this.observacoes1Alcool
        }
      }
    }

    if(this.mostrarBebidaCom2) {
      if(this.pratoSelecionado2Alcool != '') {
        this.pedidoEnvio[9] = {
          alcool: this.pratoSelecionado2Alcool,
          quantAlcool: this.quantSelecionada2Alcool,
          obsAlcool: this.observacoes2Alcool
        }
      }
    }

    if(this.mostrarBebidaCom3) {
      if(this.pratoSelecionado3Alcool != '') {
        this.pedidoEnvio[10] = {
          alcool: this.pratoSelecionado3Alcool,
          quantAlcool: this.quantSelecionada3Alcool,
          obsAlcool: this.observacoes3Alcool
        }
      }
    }

    if(this.mostrarBebidaCom4) {
      if(this.pratoSelecionado4Alcool != '') {
        this.pedidoEnvio[11] = {
          alcool: this.pratoSelecionado4Alcool,
          quantAlcool: this.quantSelecionada4Alcool,
          obsAlcool: this.observacoes4Alcool
        }
      }
    }

    if(this.mostrarBebidaCom5) {
      if(this.pratoSelecionado5Alcool != '') {
        this.pedidoEnvio[12] = {
          alcool: this.pratoSelecionado5Alcool,
          quantAlcool: this.quantSelecionada5Alcool,
          obsAlcool: this.observacoes5Alcool
        }
      }
    }

    if(this.mostrarBebidaCom6) {
      if(this.pratoSelecionado6Alcool != '') {
        this.pedidoEnvio[13] = {
          alcool: this.pratoSelecionado6Alcool,
          quantAlcool: this.quantSelecionada6Alcool,
          obsAlcool: this.observacoes6Alcool
        }
      }
    }

    if(this.mostrarBebidaCom7) {
      if(this.pratoSelecionado7Alcool != '') {
        this.pedidoEnvio[14] = {
          alcool: this.pratoSelecionado7Alcool,
          quantAlcool: this.quantSelecionada7Alcool,
          obsAlcool: this.observacoes7Alcool
        }
      }
    }

    if(this.mostrarBebidaCom8) {
      if(this.pratoSelecionado8Alcool != '') {
        this.pedidoEnvio[15] = {
          alcool: this.pratoSelecionado8Alcool,
          quantAlcool: this.quantSelecionada8Alcool,
          obsAlcool: this.observacoes8Alcool
        }
      }
    }






    if(this.mostrarBebidaSem1) {
      if(this.pratoSelecionado1SemAlcool != '') {
        this.pedidoEnvio[16] = {
          semAlcool: this.pratoSelecionado1SemAlcool,
          quantSemAlcool: this.quantSelecionada1SemAlcool,
          obsSemAlcool: this.observacoes1SemAlcool
        }
      }
    }

    if(this.mostrarBebidaSem2) {
      if(this.pratoSelecionado2SemAlcool != '') {
        this.pedidoEnvio[17] = {
          semAlcool: this.pratoSelecionado2SemAlcool,
          quantSemAlcool: this.quantSelecionada2SemAlcool,
          obsSemAlcool: this.observacoes2SemAlcool
        }
      }
    }

    if(this.mostrarBebidaSem3) {
      if(this.pratoSelecionado3SemAlcool != '') {
        this.pedidoEnvio[18] = {
          semAlcool: this.pratoSelecionado3SemAlcool,
          quantSemAlcool: this.quantSelecionada3SemAlcool,
          obsSemAlcool: this.observacoes3SemAlcool
        }
      }
    }

    if(this.mostrarBebidaSem4) {
      if(this.pratoSelecionado4SemAlcool != '') {
        this.pedidoEnvio[19] = {
          semAlcool: this.pratoSelecionado4SemAlcool,
          quantSemAlcool: this.quantSelecionada4SemAlcool,
          obsSemAlcool: this.observacoes4SemAlcool
        }
      }
    }

    if(this.mostrarBebidaSem5) {
      if(this.pratoSelecionado5SemAlcool != '') {
        this.pedidoEnvio[20] = {
          semAlcool: this.pratoSelecionado5SemAlcool,
          quantSemAlcool: this.quantSelecionada5SemAlcool,
          obsSemAlcool: this.observacoes5SemAlcool
        }
      }
    }

    if(this.mostrarBebidaSem6) {
      if(this.pratoSelecionado6SemAlcool != '') {
        this.pedidoEnvio[21] = {
          semAlcool: this.pratoSelecionado6SemAlcool,
          quantSemAlcool: this.quantSelecionada6SemAlcool,
          obsSemAlcool: this.observacoes6SemAlcool
        }
      }
    }

    if(this.mostrarBebidaSem7) {
      if(this.pratoSelecionado7SemAlcool != '') {
        this.pedidoEnvio[22] = {
          semAlcool: this.pratoSelecionado7SemAlcool,
          quantSemAlcool: this.quantSelecionada7SemAlcool,
          obsSemAlcool: this.observacoes7SemAlcool
        }
      }
    }

    if(this.mostrarBebidaSem8) {
      if(this.pratoSelecionado8SemAlcool != '') {
        this.pedidoEnvio[23] = {
          semAlcool: this.pratoSelecionado8SemAlcool,
          quantSemAlcool: this.quantSelecionada8SemAlcool,
          obsSemAlcool: this.observacoes8SemAlcool
        }
      }
    }





    if(this.mostrarSobremesa1) {
      if(this.pratoSelecionado1Sobremesa != '') {
        this.pedidoEnvio[24] = {
          sobremesa: this.pratoSelecionado1Sobremesa,
          quantSobremesa: this.quantSelecionada1Sobremesa,
          obsSobremesa: this.observacoes1Sobremesa
        }
      }
    }

    if(this.mostrarSobremesa2) {
      if(this.pratoSelecionado2Sobremesa != '') {
        this.pedidoEnvio[25] = {
          sobremesa: this.pratoSelecionado2Sobremesa,
          quantSobremesa: this.quantSelecionada2Sobremesa,
          obsSobremesa: this.observacoes2Sobremesa
        }
      }
    }

    if(this.mostrarSobremesa3) {
      if(this.pratoSelecionado3Sobremesa != '') {
        this.pedidoEnvio[26] = {
          sobremesa: this.pratoSelecionado3Sobremesa,
          quantSobremesa: this.quantSelecionada3Sobremesa,
          obsSobremesa: this.observacoes3Sobremesa
        }
      }
    }

    if(this.mostrarSobremesa4) {
      if(this.pratoSelecionado4Sobremesa != '') {
        this.pedidoEnvio[27] = {
          sobremesa: this.pratoSelecionado4Sobremesa,
          quantSobremesa: this.quantSelecionada4Sobremesa,
          obsSobremesa: this.observacoes4Sobremesa
        }
      }
    }

    if(this.mostrarSobremesa5) {
      if(this.pratoSelecionado5Sobremesa != '') {
        this.pedidoEnvio[28] = {
          sobremesa: this.pratoSelecionado5Sobremesa,
          quantSobremesa: this.quantSelecionada5Sobremesa,
          obsSobremesa: this.observacoes5Sobremesa
        }
      }
    }

    if(this.mostrarSobremesa6) {
      if(this.pratoSelecionado6Sobremesa != '') {
        this.pedidoEnvio[29] = {
          sobremesa: this.pratoSelecionado6Sobremesa,
          quantSobremesa: this.quantSelecionada6Sobremesa,
          obsSobremesa: this.observacoes6Sobremesa
        }
      }
    }

    if(this.mostrarSobremesa7) {
      if(this.pratoSelecionado7Sobremesa != '') {
        this.pedidoEnvio[30] = {
          sobremesa: this.pratoSelecionado7Sobremesa,
          quantSobremesa: this.quantSelecionada7Sobremesa,
          obsSobremesa: this.observacoes7Sobremesa
        }
      }
    }

    if(this.mostrarSobremesa8) {
      if(this.pratoSelecionado8Sobremesa != '') {
        this.pedidoEnvio[31] = {
          sobremesa: this.pratoSelecionado8Sobremesa,
          quantSobremesa: this.quantSelecionada8Sobremesa,
          obsSobremesa: this.observacoes8Sobremesa
        }
      }
    }


    if(this.quartoSelecionado) {
      this.firestoreService.enviarPedido(this.pedidoEnvio, this.quartoSelecionado.value);

      this.pedidoEnvio = []
      this.mostrarPrato1 = false;
      this.mostrarPrato2 = false;
      this.mostrarPrato3 = false;
      this.mostrarPrato4 = false;
      this.mostrarPrato5 = false;
      this.mostrarPrato6 = false;
      this.mostrarPrato7 = false;
      this.mostrarPrato8 = false;

      this.mostrarBebidaCom1 = false;
      this.mostrarBebidaCom2 = false;
      this.mostrarBebidaCom3 = false;
      this.mostrarBebidaCom4 = false;
      this.mostrarBebidaCom5 = false;
      this.mostrarBebidaCom6 = false;
      this.mostrarBebidaCom7 = false;
      this.mostrarBebidaCom8 = false;

      this.mostrarBebidaSem1 = false;
      this.mostrarBebidaSem2 = false;
      this.mostrarBebidaSem3 = false;
      this.mostrarBebidaSem4 = false;
      this.mostrarBebidaSem5 = false;
      this.mostrarBebidaSem6 = false;
      this.mostrarBebidaSem7 = false;
      this.mostrarBebidaSem8 = false;

      this.mostrarSobremesa1 = false;
      this.mostrarSobremesa2 = false;
      this.mostrarSobremesa3 = false;
      this.mostrarSobremesa4 = false;
      this.mostrarSobremesa5 = false;
      this.mostrarSobremesa6 = false;
      this.mostrarSobremesa7 = false;
      this.mostrarSobremesa8 = false;

      this.pratoSelecionado1 = '';
      this.pratoSelecionado2 = '';
      this.pratoSelecionado3 = '';
      this.pratoSelecionado4 = '';
      this.pratoSelecionado5 = '';
      this.pratoSelecionado6 = '';
      this.pratoSelecionado7 = '';
      this.pratoSelecionado8 = '';

      this.quantSelecionada1 = 1;
      this.quantSelecionada2 = 1;
      this.quantSelecionada3 = 1;
      this.quantSelecionada4 = 1;
      this.quantSelecionada5 = 1;
      this.quantSelecionada6 = 1;
      this.quantSelecionada7 = 1;
      this.quantSelecionada8 = 1;

      this.observacoes1 = '';
      this.observacoes2 = '';
      this.observacoes3 = '';
      this.observacoes4 = '';
      this.observacoes5 = '';
      this.observacoes6 = '';
      this.observacoes7 = '';
      this.observacoes8 = '';

      this.pratoSelecionado1Alcool = '';
      this.pratoSelecionado2Alcool = '';
      this.pratoSelecionado3Alcool = '';
      this.pratoSelecionado4Alcool = '';
      this.pratoSelecionado5Alcool = '';
      this.pratoSelecionado6Alcool = '';
      this.pratoSelecionado7Alcool = '';
      this.pratoSelecionado8Alcool = '';

      this.quantSelecionada1Alcool = 1;
      this.quantSelecionada2Alcool = 1;
      this.quantSelecionada3Alcool = 1;
      this.quantSelecionada4Alcool = 1;
      this.quantSelecionada5Alcool = 1;
      this.quantSelecionada6Alcool = 1;
      this.quantSelecionada7Alcool = 1;
      this.quantSelecionada8Alcool = 1;

      this.observacoes1Alcool = '';
      this.observacoes2Alcool = '';
      this.observacoes3Alcool = '';
      this.observacoes4Alcool = '';
      this.observacoes5Alcool = '';
      this.observacoes6Alcool = '';
      this.observacoes7Alcool = '';
      this.observacoes8Alcool = '';




      this.pratoSelecionado1SemAlcool = '';
      this.pratoSelecionado2SemAlcool = '';
      this.pratoSelecionado3SemAlcool = '';
      this.pratoSelecionado4SemAlcool = '';
      this.pratoSelecionado5SemAlcool = '';
      this.pratoSelecionado6SemAlcool = '';
      this.pratoSelecionado7SemAlcool = '';
      this.pratoSelecionado8SemAlcool = '';

      this.quantSelecionada1SemAlcool = 1;
      this.quantSelecionada2SemAlcool = 1;
      this.quantSelecionada3SemAlcool = 1;
      this.quantSelecionada4SemAlcool = 1;
      this.quantSelecionada5SemAlcool = 1;
      this.quantSelecionada6SemAlcool = 1;
      this.quantSelecionada7SemAlcool = 1;
      this.quantSelecionada8SemAlcool = 1;

      this.observacoes1SemAlcool = '';
      this.observacoes2SemAlcool = '';
      this.observacoes3SemAlcool = '';
      this.observacoes4SemAlcool = '';
      this.observacoes5SemAlcool = '';
      this.observacoes6SemAlcool = '';
      this.observacoes7SemAlcool = '';
      this.observacoes8SemAlcool = '';

      this.pratoSelecionado1Sobremesa = '';
      this.pratoSelecionado2Sobremesa = '';
      this.pratoSelecionado3Sobremesa = '';
      this.pratoSelecionado4Sobremesa = '';
      this.pratoSelecionado5Sobremesa = '';
      this.pratoSelecionado6Sobremesa = '';
      this.pratoSelecionado7Sobremesa = '';
      this.pratoSelecionado8Sobremesa = '';

      this.quantSelecionada1Sobremesa = 1;
      this.quantSelecionada2Sobremesa = 1;
      this.quantSelecionada3Sobremesa = 1;
      this.quantSelecionada4Sobremesa = 1;
      this.quantSelecionada5Sobremesa = 1;
      this.quantSelecionada6Sobremesa = 1;
      this.quantSelecionada7Sobremesa = 1;
      this.quantSelecionada8Sobremesa = 1;

      this.observacoes1Sobremesa = '';
      this.observacoes2Sobremesa = '';
      this.observacoes3Sobremesa = '';
      this.observacoes4Sobremesa = '';
      this.observacoes5Sobremesa = '';
      this.observacoes6Sobremesa = '';
      this.observacoes7Sobremesa = '';
      this.observacoes8Sobremesa = '';

      const element = document.getElementById('divHospedePassante');
      if(element) {
        const topOffset = element.getBoundingClientRect().top + this.viewportScroller.getScrollPosition()[1];
        const margin = 18 * 16; // 18em em pixels
        const position = topOffset - margin;
        this.viewportScroller.scrollToPosition([0, position]);
      }


    }else {
      this.firestoreService.enviarPedido(this.pedidoEnvio, this.nomePassanteSelecionado);


      this.mostrarPrato1 = false;
      this.mostrarPrato2 = false;
      this.mostrarPrato3 = false;
      this.mostrarPrato4 = false;
      this.mostrarPrato5 = false;
      this.mostrarPrato6 = false;
      this.mostrarPrato7 = false;
      this.mostrarPrato8 = false;

      this.mostrarBebidaCom1 = false;
      this.mostrarBebidaCom2 = false;
      this.mostrarBebidaCom3 = false;
      this.mostrarBebidaCom4 = false;
      this.mostrarBebidaCom5 = false;
      this.mostrarBebidaCom6 = false;
      this.mostrarBebidaCom7 = false;
      this.mostrarBebidaCom8 = false;

      this.mostrarBebidaSem1 = false;
      this.mostrarBebidaSem2 = false;
      this.mostrarBebidaSem3 = false;
      this.mostrarBebidaSem4 = false;
      this.mostrarBebidaSem5 = false;
      this.mostrarBebidaSem6 = false;
      this.mostrarBebidaSem7 = false;
      this.mostrarBebidaSem8 = false;

      this.mostrarSobremesa1 = false;
      this.mostrarSobremesa2 = false;
      this.mostrarSobremesa3 = false;
      this.mostrarSobremesa4 = false;
      this.mostrarSobremesa5 = false;
      this.mostrarSobremesa6 = false;
      this.mostrarSobremesa7 = false;
      this.mostrarSobremesa8 = false;

      this.pratoSelecionado1 = '';
      this.pratoSelecionado2 = '';
      this.pratoSelecionado3 = '';
      this.pratoSelecionado4 = '';
      this.pratoSelecionado5 = '';
      this.pratoSelecionado6 = '';
      this.pratoSelecionado7 = '';
      this.pratoSelecionado8 = '';

      this.quantSelecionada1 = 1;
      this.quantSelecionada2 = 1;
      this.quantSelecionada3 = 1;
      this.quantSelecionada4 = 1;
      this.quantSelecionada5 = 1;
      this.quantSelecionada6 = 1;
      this.quantSelecionada7 = 1;
      this.quantSelecionada8 = 1;

      this.observacoes1 = '';
      this.observacoes2 = '';
      this.observacoes3 = '';
      this.observacoes4 = '';
      this.observacoes5 = '';
      this.observacoes6 = '';
      this.observacoes7 = '';
      this.observacoes8 = '';

      this.pratoSelecionado1Alcool = '';
      this.pratoSelecionado2Alcool = '';
      this.pratoSelecionado3Alcool = '';
      this.pratoSelecionado4Alcool = '';
      this.pratoSelecionado5Alcool = '';
      this.pratoSelecionado6Alcool = '';
      this.pratoSelecionado7Alcool = '';
      this.pratoSelecionado8Alcool = '';

      this.quantSelecionada1Alcool = 1;
      this.quantSelecionada2Alcool = 1;
      this.quantSelecionada3Alcool = 1;
      this.quantSelecionada4Alcool = 1;
      this.quantSelecionada5Alcool = 1;
      this.quantSelecionada6Alcool = 1;
      this.quantSelecionada7Alcool = 1;
      this.quantSelecionada8Alcool = 1;

      this.observacoes1Alcool = '';
      this.observacoes2Alcool = '';
      this.observacoes3Alcool = '';
      this.observacoes4Alcool = '';
      this.observacoes5Alcool = '';
      this.observacoes6Alcool = '';
      this.observacoes7Alcool = '';
      this.observacoes8Alcool = '';




      this.pratoSelecionado1SemAlcool = '';
      this.pratoSelecionado2SemAlcool = '';
      this.pratoSelecionado3SemAlcool = '';
      this.pratoSelecionado4SemAlcool = '';
      this.pratoSelecionado5SemAlcool = '';
      this.pratoSelecionado6SemAlcool = '';
      this.pratoSelecionado7SemAlcool = '';
      this.pratoSelecionado8SemAlcool = '';

      this.quantSelecionada1SemAlcool = 1;
      this.quantSelecionada2SemAlcool = 1;
      this.quantSelecionada3SemAlcool = 1;
      this.quantSelecionada4SemAlcool = 1;
      this.quantSelecionada5SemAlcool = 1;
      this.quantSelecionada6SemAlcool = 1;
      this.quantSelecionada7SemAlcool = 1;
      this.quantSelecionada8SemAlcool = 1;

      this.observacoes1SemAlcool = '';
      this.observacoes2SemAlcool = '';
      this.observacoes3SemAlcool = '';
      this.observacoes4SemAlcool = '';
      this.observacoes5SemAlcool = '';
      this.observacoes6SemAlcool = '';
      this.observacoes7SemAlcool = '';
      this.observacoes8SemAlcool = '';

      this.pratoSelecionado1Sobremesa = '';
      this.pratoSelecionado2Sobremesa = '';
      this.pratoSelecionado3Sobremesa = '';
      this.pratoSelecionado4Sobremesa = '';
      this.pratoSelecionado5Sobremesa = '';
      this.pratoSelecionado6Sobremesa = '';
      this.pratoSelecionado7Sobremesa = '';
      this.pratoSelecionado8Sobremesa = '';

      this.quantSelecionada1Sobremesa = 1;
      this.quantSelecionada2Sobremesa = 1;
      this.quantSelecionada3Sobremesa = 1;
      this.quantSelecionada4Sobremesa = 1;
      this.quantSelecionada5Sobremesa = 1;
      this.quantSelecionada6Sobremesa = 1;
      this.quantSelecionada7Sobremesa = 1;
      this.quantSelecionada8Sobremesa = 1;

      this.observacoes1Sobremesa = '';
      this.observacoes2Sobremesa = '';
      this.observacoes3Sobremesa = '';
      this.observacoes4Sobremesa = '';
      this.observacoes5Sobremesa = '';
      this.observacoes6Sobremesa = '';
      this.observacoes7Sobremesa = '';
      this.observacoes8Sobremesa = '';

      const element = document.getElementById('divCheckboxecompania');
      if(element) {
        const topOffset = element.getBoundingClientRect().top + this.viewportScroller.getScrollPosition()[1];
        const margin = 30 * 16; // 10em em pixels (assumindo font-size padrão de 16px)
        const position = topOffset - margin;
        this.viewportScroller.scrollToPosition([0, position]);
      }
    }
  }

  scrollFinalDaPagina() {
    const element = document.getElementById('botaoEnviar');
      if(element) {
        const topOffset = element.getBoundingClientRect().top + this.viewportScroller.getScrollPosition()[1];
        const margin = 30 * 16; // 10em em pixels (assumindo font-size padrão de 16px)
        const position = topOffset - margin;
        this.viewportScroller.scrollToPosition([0, position]);
      }
  }
}
