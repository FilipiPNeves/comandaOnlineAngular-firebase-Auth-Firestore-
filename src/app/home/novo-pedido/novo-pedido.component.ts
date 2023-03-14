import { Component } from '@angular/core';

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


  nomesQuartos: nomeQuarto[] = [
    { value: 'Sol'},
    { value: 'Master'},
    { value: 'Vip'},
  ];
  nomePassanteSelecionado?: string;
  quartoSelecionado?: string;

  estadoCheckbox?: number;
  nomeQuartoCheck: boolean = true;
  nomePassanteCheck: boolean = true;




  pasteis: Pratos[] = [
    { nome: 'Pastel Napolitado', valor: 0 },
    { nome: 'Pastel de queijo', valor: 0 },
    { nome: 'Pastel de carne', valor: 0 }
  ]

  lanches: Pratos[] = [
    { nome: 'Misto quente', valor: 0 },
    { nome: 'Cachorro quente', valor: 0 },
    { nome: 'Hambúrguer', valor: 0 },
    { nome: 'Desejos', valor: 0 }
  ]

  petiscos: Pratos[] = [
    { nome: 'Polvo a vinagrete', valor: 0 },
    { nome: 'Tataki', valor: 0 },
    { nome: 'Cevitche', valor: 0 },
    { nome: 'Lula dore', valor: 0 },
    { nome: 'Camarão dore', valor: 0 },
    { nome: 'Camarão alho', valor: 0 },
    { nome: 'Bolinho de bacalhau', valor: 0 },
    { nome: 'Frango a passarinho', valor: 0 },
    { nome: 'Filé aperetivo', valor: 0 },
    { nome: 'Fritas', valor: 0 },
    { nome: 'Tabua de frios', valor: 0 }
  ]

  frangos: Pratos[] = [
    { nome: 'Frango Grelhado a campanha', valor: 0 },
    { nome: 'Frango a parmegiana', valor: 0 },
    { nome: 'Frango ao molho curry', valor: 0 },
    { nome: 'Strogonoff de frango', valor: 0 }
  ]

  contraFiles: Pratos[] = [
    { nome: 'Contra-filé grelhado a campanha', valor: 0 },
    { nome: 'Contra-filé a parmegiana', valor: 0 },
    { nome: 'Contra-filé a cavala', valor: 0 },
    { nome: 'Contra-filé ao molho gorgonzola', valor: 0 },
    { nome: 'Contra-filé ao molho madeira', valor: 0 }
  ]
  saladas: Pratos[] = [
    { nome: 'Salada grega', valor: 0 },
    { nome: 'Salada tropical', valor: 0 },
    { nome: 'Salada Sentinelas', valor: 0 }
  ]

  sopas: Pratos[] = [
    { nome: 'Frutos do mar', valor: 0 },
    { nome: 'Do dia', valor: 0 }
  ]

  frutosDoMar: Pratos[] = [
    { nome: 'Peixes na brasa', valor: 0 },
    { nome: 'Peixe frito', valor: 0 },
    { nome: 'Peixe grelhado', valor: 0 },
    { nome: 'Ao molho de camarão', valor: 0 },
    { nome: 'Camarão no abacaxi', valor: 0 },
    { nome: 'Camarão ao catupiry', valor: 0 },
    { nome: 'Camarão empanado', valor: 0 },
    { nome: 'Risoto', valor: 0 },
    { nome: 'Moqueca', valor: 0 }
    ]

  massas: Pratos[] = [
    { nome: 'Espaguete com camarão ao pesto', valor: 0 },
    { nome: 'Parisiense', valor: 0 },
    { nome: 'Primavera', valor: 0 },
    { nome: 'Nhoque', valor: 0 },
    { nome: 'Rondelli', valor: 0 },
    { nome: 'Canelone', valor: 0 },
    { nome: 'Raviolli', valor: 0 }
  ]

  bebidasCom: Pratos[] = [
    { nome: 'Cervejas', valor: 0 },
    { nome: 'Dose Whisky', valor: 0 },
    { nome: 'Dose cachaça', valor: 0 },
    { nome: 'Dose de run', valor: 0 },
    { nome: 'Dose de gin', valor: 0 },
    { nome: 'Dose de vodka', valor: 0 },
    { nome: 'Vinhos', valor: 0 },
    { nome: 'Espumantes', valor: 0 },
    { nome: 'Grin tônica', valor: 0 },
    { nome: 'Caipivodka', valor: 0 },
    { nome: 'Caipirinha', valor: 0 },
    { nome: 'Pina colada', valor: 0 },
    { nome: 'Margarita', valor: 0 },
    { nome: 'Mojito', valor: 0 },
    { nome: 'Sex on the beach', valor: 0 },
    { nome: 'Corona rita', valor: 0 },
    { nome: 'Cosmopolitan', valor: 0 },
    { nome: 'Sunset sentinelas', valor: 0 },
    { nome: 'Roney night', valor: 0 }
  ];


  bebidasSem: Pratos[] = [
    { nome: 'Água sem gás', valor: 0 },
    { nome: 'Água com gás', valor: 0 },
    { nome: 'Água de coco', valor: 0 },
    { nome: 'Refrigerante', valor: 0 },
    { nome: 'Sucos naturais', valor: 0 }
    ];

    sobremesas: Pratos[] = [
      { nome: 'Petiti gateau', valor: 0 },
      { nome: 'Peras caramelizadas', valor: 0 },
      { nome: 'Pudim', valor: 0 },
      { nome: 'Do dia', valor: 0 }
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

  observacoes1Alcool?: string;
  observacoes2Alcool?: string;
  observacoes3Alcool?: string;
  observacoes4Alcool?: string;
  observacoes5Alcool?: string;
  observacoes6Alcool?: string;
  observacoes7Alcool?: string;
  observacoes8Alcool?: string;




  pratoSelecionado1SemAlcool: string = '';
  pratoSelecionado2SemAlcool: string = '';
  pratoSelecionado3SemAlcool: string = '';
  pratoSelecionado4SemAlcool: string = '';
  pratoSelecionado5SemAlcool: string = '';
  pratoSelecionado6SemAlcool: string = '';
  pratoSelecionado7SemAlcool: string = '';
  pratoSelecionado8SemAlcool: string = '';

  quantSelecionada1SemAlcool?: number = 1;
  quantSelecionada2SemAlcool?: number = 1;
  quantSelecionada3SemAlcool?: number = 1;
  quantSelecionada4SemAlcool?: number = 1;
  quantSelecionada5SemAlcool?: number = 1;
  quantSelecionada6SemAlcool?: number = 1;
  quantSelecionada7SemAlcool?: number = 1;
  quantSelecionada8SemAlcool?: number = 1;

  observacoes1SemAlcool?: string;
  observacoes2SemAlcool?: string;
  observacoes3SemAlcool?: string;
  observacoes4SemAlcool?: string;
  observacoes5SemAlcool?: string;
  observacoes6SemAlcool?: string;
  observacoes7SemAlcool?: string;
  observacoes8SemAlcool?: string;





  pratoSelecionado1Sobremesa: string = '';
  pratoSelecionado2Sobremesa: string = '';
  pratoSelecionado3Sobremesa: string = '';
  pratoSelecionado4Sobremesa: string = '';
  pratoSelecionado5Sobremesa: string = '';
  pratoSelecionado6Sobremesa: string = '';
  pratoSelecionado7Sobremesa: string = '';
  pratoSelecionado8Sobremesa: string = '';

  quantSelecionada1Sobremesa?: number = 1;
  quantSelecionada2Sobremesa?: number = 1;
  quantSelecionada3Sobremesa?: number = 1;
  quantSelecionada4Sobremesa?: number = 1;
  quantSelecionada5Sobremesa?: number = 1;
  quantSelecionada6Sobremesa?: number = 1;
  quantSelecionada7Sobremesa?: number = 1;
  quantSelecionada8Sobremesa?: number = 1;

  observacoes1Sobremesa?: string;
  observacoes2Sobremesa?: string;
  observacoes3Sobremesa?: string;
  observacoes4Sobremesa?: string;
  observacoes5Sobremesa?: string;
  observacoes6Sobremesa?: string;
  observacoes7Sobremesa?: string;
  observacoes8Sobremesa?: string;

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

  novoPedido(novoPedido: any) {
    console.log(novoPedido.value.prato1.nome);

  }
}
