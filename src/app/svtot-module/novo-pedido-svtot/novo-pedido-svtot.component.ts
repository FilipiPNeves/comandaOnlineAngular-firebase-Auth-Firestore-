import { PratosNovo } from 'src/app/pratos-novo';
import { Component, HostListener } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MatDialog } from '@angular/material/dialog';
import { entradasNovo, pasteisNovo, lanchesNovo, petiscosNovo, frangosNovo, carneNovo, saladasNovo, risotosNovo, sopasNovo, frutosDoMarNovo, massasNovo, bebidasCompletoNovo, alcoolNovo, docesNovo } from 'src/app/shared/pratos';
import { DialogNovoEditCarrinhoComponent } from 'src/app/dialogs/dialog-novo-edit-carrinho/dialog-novo-edit-carrinho.component';
import { Timestamp } from 'firebase/firestore';
import { ShareddataService } from 'src/app/services/shareddata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novo-pedido-svtot',
  templateUrl: './novo-pedido-svtot.component.html',
  styleUrls: ['./novo-pedido-svtot.component.css']
})

export class NovoPedidoSvtotComponent{
  constructor(
    private firestoreService: FirestoreService,
    private dialog: MatDialog,
    private sharedDataService: ShareddataService,
    private route: ActivatedRoute,
    private router: Router
    )
  {
    this.route.params.subscribe(params => {
      this.nomeCliente = params['nomeCliente'];
    });
    this.adjustGrid();
    this.resetVisibilidadeDivs();
    this.visibilidadeDivs['frutosDoMar'] = true;
    this.getNomeGarcom();
    this.getClientes();
  }

  botaoEnviar = true;
  ngIfTab1: boolean = true;
  ngIfTab2: boolean = false;
  cols: number = 3;
  rowHeight: string = '5:2.6';


  todosClientes: string[] = [];
  nomeCliente: string = '';
  nomeGarcom: string = '';
  selecionado: string = 'frutosDoMar';

  carrinho: PratosNovo[] = [];
  itensSelecionados: any[] = [];

  entradasNovo: PratosNovo[] = entradasNovo;
  pasteisNovo: PratosNovo[] = pasteisNovo;
  lanchesNovo: PratosNovo[] = lanchesNovo;
  petiscosNovo: PratosNovo[] = petiscosNovo;
  frangosNovo: PratosNovo[] = frangosNovo;
  carneNovo: PratosNovo[] = carneNovo;
  saladasNovo: PratosNovo[] = saladasNovo;
  risotosNovo: PratosNovo[] = risotosNovo;
  sopasNovo: PratosNovo[] = sopasNovo;
  frutosDoMarNovo: PratosNovo[] = frutosDoMarNovo;
  massasNovo: PratosNovo[] = massasNovo;
  bebidasNovo: PratosNovo[] = bebidasCompletoNovo;
  alcoolNovo: PratosNovo[] = alcoolNovo;
  docesNovo: PratosNovo[] = docesNovo;

  todosNovo: PratosNovo[] = ([] as PratosNovo[]).concat(
    entradasNovo,
    saladasNovo,
    sopasNovo,
    lanchesNovo,
    petiscosNovo,
    pasteisNovo,
    docesNovo,
    alcoolNovo,
    bebidasCompletoNovo,
    frangosNovo,
    carneNovo,
    risotosNovo,
    massasNovo,
    frutosDoMarNovo,
  );
  todosNovoFiltrado: PratosNovo[] = [];


  visibilidadeDivs: { [key: string]: boolean } = {};
  categorias: any[] = [
    { tipo: 'todos', lista: this.todosNovo },
    { tipo: 'entradas', lista: this.entradasNovo },
    { tipo: 'pasteis', lista: this.pasteisNovo },
    { tipo: 'lanches', lista: this.lanchesNovo },
    { tipo: 'petiscos', lista: this.petiscosNovo },
    { tipo: 'frangos', lista: this.frangosNovo },
    { tipo: 'carnes', lista: this.carneNovo },
    { tipo: 'saladas', lista: this.saladasNovo },
    { tipo: 'risotos', lista: this.risotosNovo },
    { tipo: 'sopas', lista: this.sopasNovo },
    { tipo: 'frutosDoMar', lista: this.frutosDoMarNovo },
    { tipo: 'massas', lista: this.massasNovo },
    { tipo: 'bebidas', lista: this.bebidasNovo },
    { tipo: 'alcool', lista: this.alcoolNovo },
    { tipo: 'doces', lista: this.docesNovo }
  ];

  filtroPedido: string = '';

  filtrarItems(novoValor: string): void {
    this.todosNovoFiltrado = [];
    this.todosNovo.forEach((item) => {
      if(item.nome.toLowerCase().includes(novoValor.toLowerCase())) {
        this.todosNovoFiltrado.push(item);
      }
    });
    this.categorias[0] = { tipo: 'todos', lista: this.todosNovoFiltrado };
    this.abrirDivPedido('todos');
  }

  getTodosItems() {
    this.filtroPedido = '';
    this.categorias[0] = { tipo: 'todos', lista: this.todosNovo }
  }

  abrirDivPedido(tipoPedido: string) {
    this.resetVisibilidadeDivs();
    this.visibilidadeDivs[tipoPedido] = true;
    this.selecionado = tipoPedido;
  }

  resetVisibilidadeDivs() {
    this.categorias.forEach(cat => this.visibilidadeDivs[cat.tipo] = false);
  }

  selectItem(item: PratosNovo) {
    const index = this.carrinho.indexOf(item);
    if (index === -1) {
      item.adicional1!.nome = '';
      item.adicional1!.valor = 0;
      item.adicional2!.nome = '';
      item.adicional2!.valor = 0;
      item.descricao = '';
      item.quantidade = 1;

      this.carrinho.push(item);
      this.itensSelecionados.push(item);
    } else {
      this.carrinho.splice(index, 1);
      const selectedIndex = this.itensSelecionados.indexOf(item);
      if (selectedIndex !== -1) {
        this.itensSelecionados.splice(selectedIndex, 1);
      }
    }
  }

  getNomeGarcom() {
    this.sharedDataService.getNomeGarcom().subscribe((nomeGarcom) => {
      this.nomeGarcom = nomeGarcom;
    });
  }

  getClientes() {
    this.sharedDataService.getClientes().subscribe((clientes) => {
      this.todosClientes = clientes;
    });
  }

  filterOptions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.todosClientes.filter(option => option.toLowerCase().includes(filterValue));
  }

  get filteredOptions(): string[] {
    return this.filterOptions(this.nomeCliente);
  }

  async envioNovo() {
    this.botaoEnviar = false;
    if(this.nomeCliente === '') {
      alert("Escreva o nome do CLIENTE!");
      return;
    }
    if(this.carrinho.length === 0) {
      alert("Seleciona algum ITEM!");
      return;
    }
    await this.carrinho.forEach((item) => {
      item.garcom = this.nomeGarcom;
      item.cliente = this.nomeCliente;
      const currentDate = new Date();
      const minhaTimestamp = Timestamp.fromDate(currentDate);
      item.horario = minhaTimestamp;
    });
    await this.firestoreService.enviarPedidoNovo(this.carrinho);
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    if (target.classList.contains('confirm-dialog-backdrop')) {
      document.getElementById('confirm-dialog')!.style.display = 'none';
      this.router.navigate(['principal/caixa/']);
    }
  }

  editItemOpenDialog(item: PratosNovo) {
    const dialogRef = this.dialog.open(DialogNovoEditCarrinhoComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(item => {
    });
  }

  formatToBrazilianReal(value: number | string): string {
    let formattedValue = Number(value.toString().replace(',', '.')).toFixed(2);
    return `R$ ${formattedValue.replace('.', ',')}`;
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





  adjustGrid(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      this.cols = 5;
      this.rowHeight = '5:1.5';
    }
  }

  tab(tab: string) {
    if(tab === 'cardapio') {
      this.ngIfTab2 = false;
      this.ngIfTab1 = true;
    }
    if(tab === 'carrinho') {
      this.ngIfTab1 = false;
      this.ngIfTab2 = true;
    }
  }
}

