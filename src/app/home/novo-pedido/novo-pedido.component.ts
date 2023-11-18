import { Component, ElementRef, HostListener } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogPedidoDiferenteComponent } from 'src/app/dialogs/dialog-pedido-diferente/dialog-pedido-diferente.component';
import { MatTableDataSource } from '@angular/material/table';
import { DialogEditCarrinhoComponent } from 'src/app/dialogs/dialog-edit-carrinho/dialog-edit-carrinho.component';
import { entradas, pasteis, lanches, petiscos, frangos, contraFiles, saladas, risotos, sopas, frutosDoMar, massas, bebidasCompleto, alcool, sobremesas } from 'src/app/shared/pratos';


interface nomeQuarto {
  value: string;
}

interface Pratos {
  nome: string;
  valor: number;
}


interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
  id: any,
  nomeGarcom: any
}

interface pedidosCarrinho {
  nome: string,
  valor: number,
  obs: string,
  qnt: number,
  bebida: boolean
}

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent {

  constructor(private firestoreService: FirestoreService,  private el: ElementRef, public dialog: MatDialog, private _formBuilder: FormBuilder) {
  }

  animationDuration: string = '0';

  ngIfEntradas: boolean = true;
  ngIfSaladas: boolean = false;
  ngIfSopas: boolean = false;
  ngIfLanches: boolean = false;
  ngIfPetiscos: boolean = false;
  ngIfPasteis: boolean = false;
  ngIfPratos: boolean = false;
  ngIfSobremesas: boolean = false;
  ngIfBebidas: boolean = false;
  ngIfAddPedido: boolean = true;

  pedidoSelecionado: Pratos = {
    nome: '',
    valor: 0
  };
  pedidoObs: string = "";
  pedidoQnt: number = 1;

  pedidoSelecionadoControl = new FormControl(null);

  nomeGarcom: string = '';

  arrayPedidos: pedidosCarrinho[] = [];
  displayedColumns: string[] = ['obs', 'pedido', 'qnt'];
  dataSource2: any;

  myControl = new FormControl('');

  entradas: Pratos[] = entradas;
  pasteis: Pratos[] = pasteis;
  lanches: Pratos[] = lanches;
  petiscos: Pratos[] = petiscos;
  frangos: Pratos[] = frangos;
  contraFiles: Pratos[] = contraFiles;
  saladas: Pratos[] = saladas;
  risotos: Pratos[] = risotos;
  sopas: Pratos[] = sopas;
  frutosDoMar: Pratos[] = frutosDoMar;
  massas: Pratos[] = massas;
  bebidas: Pratos[] = bebidasCompleto;
  alcool: Pratos[] = alcool;
  sobremesas: Pratos[] = sobremesas;

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

  firstFormGroup = this._formBuilder.group({
    firstCrontrol: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    nomeQuarto: ['', Validators.required],
    nomePassante: ['', Validators.required],
  });

  bebida: boolean = false;

  abrirJanelaDoPedido(pedido: string) {
    this.ngIfEntradas = false;
    this.ngIfSaladas = false;
    this.ngIfSopas = false;
    this.ngIfLanches = false;
    this.ngIfPetiscos = false;
    this.ngIfPasteis = false;
    this.ngIfPratos = false;
    this.ngIfSobremesas = false;
    this.ngIfBebidas = false;
    this.ngIfAddPedido = false;
    this.bebida = false;

    this.pedidoSelecionadoControl.setValue(null);
    this.pedidoObs = '';
    this.pedidoQnt = 1;
    switch(pedido){
      case 'entradas':
        this.ngIfEntradas = true;
        this.ngIfAddPedido = true;
        break;
      case 'saladas':
        this.ngIfSaladas = true;
        this.ngIfAddPedido = true;
        break;
      case 'sopas':
        this.ngIfSopas = true;
        this.ngIfAddPedido = true;
        break;
      case 'lanches':
        this.ngIfLanches = true;
        this.ngIfAddPedido = true;
        break;
      case 'petiscos':
        this.ngIfPetiscos = true;
        this.ngIfAddPedido = true;
        break;
      case 'pasteis':
        this.ngIfPasteis = true;
        this.ngIfAddPedido = true;
        break;
      case 'pratos':
        this.ngIfPratos = true;
        this.ngIfAddPedido = true;
        break;
      case 'sobremesas':
        this.ngIfSobremesas = true;
        this.ngIfAddPedido = true;
        break;
      case 'bebidas':
        this.ngIfBebidas = true;
        this.ngIfAddPedido = true;
        this.bebida = true;
        break;
    }
  }

  addPedido() {
    if(this.pedidoSelecionado.nome !== null && this.pedidoSelecionado.valor !== 0) {
      let pedido: pedidosCarrinho = {
        nome: this.pedidoSelecionado.nome,
        valor: this.pedidoSelecionado.valor,
        obs: this.pedidoObs,
        qnt: this.pedidoQnt,
        bebida: this.bebida
      }
      this.arrayPedidos.push(pedido);
      this.pedidoSelecionadoControl.setValue(null);
      this.pedidoObs = '';
      this.pedidoQnt = 1;
    }
    this.dataSource2 = new MatTableDataSource(this.arrayPedidos);
  }

  onRowClicked(pedido: any) {
    const index = this.arrayPedidos.findIndex((item) => item === pedido);

    this.openDialogEdit(pedido, index);
  }

  openDialogEdit(row: any, index: any): void {
    const dialogRef = this.dialog.open(DialogEditCarrinhoComponent, {
      width: '350px',
      data: { index: index, row: row},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.editado === true) {
        this.arrayPedidos[index].obs = result.obs;
        this.arrayPedidos[index].qnt = result.qnt;
        let confirmDialog = document.getElementById('confirm-dialog');
        let confirmDialogMessage = document.getElementById('confirm-dialog-message');
        confirmDialogMessage!.innerHTML = 'Atualizado com sucesso.';
        confirmDialog!.style.display = 'flex';
      } else if (result.excluido === true) {
        console.log("excluido = ",result, index);
        this.arrayPedidos.splice(index, 1);
        this.dataSource2 = new MatTableDataSource(this.arrayPedidos);
        let confirmDialog = document.getElementById('confirm-dialog');
        let confirmDialogMessage = document.getElementById('confirm-dialog-message');
        confirmDialogMessage!.innerHTML = 'Excluído com sucesso.';
        confirmDialog!.style.display = 'flex';
      }
    });
  }


  async envio() {
    await this.getNomeGarcom();

    if((this.myControl.value === '' || this.myControl.value === undefined) && (this.quartoSelecionado === '' || this.quartoSelecionado === undefined)) {
      alert("Hospede ou Passante NÃO selecionado!");
      return;
    }else if(this.arrayPedidos.length === 0) {
      alert("Pedido NÃO selecionado!");
      return;
    }else if(this.quartoSelecionado === '' && this.myControl.value !== '') {
      this.firestoreService.enviarPedido2(this.myControl.value || '', this.arrayPedidos, this.nomeGarcom);
    }else if(this.quartoSelecionado !== '' && this.nomePassanteSelecionado === '') {
      this.firestoreService.enviarPedido2(this.quartoSelecionado.value, this.arrayPedidos, this.nomeGarcom);
    }

    this.arrayPedidos = [];
    this.quartoSelecionado = '';
    this.nomePassanteSelecionado = '';
    this.myControl.setValue('');
    this.dataSource2 = new MatTableDataSource();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPedidoDiferenteComponent, {
      width: '500px',
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      let pedido: pedidosCarrinho = {
        nome: result[0].nome,
        valor: result[0].valor,
        obs: result[0].obs,
        qnt: result[0].qnt,
        bebida: result[0].bebida
      }
      this.arrayPedidos.push(pedido);
      this.dataSource2 = new MatTableDataSource(this.arrayPedidos);
    });
  }

  private touchStartX!: number;
  private touchStartY!: number;
  private touchEndX!: number;
  private touchEndY!: number;
  private hasTouchMove = false;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.hasTouchMove = false;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
    this.touchEndY = event.touches[0].clientY;
    this.hasTouchMove = true;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;

    if (this.hasTouchMove) {
      if (deltaX > 100 && Math.abs(deltaY) < 90) {
        this.openDialog();
      }
    }
  }




















  ngOnInit() {
    const servidos$ = this.firestoreService.getServidos();
    const returnPedidos$ = this.firestoreService.getReturnPedidos();
    const bebidas$ = this.firestoreService.getBebidas();

    combineLatest([servidos$, returnPedidos$, bebidas$]).subscribe(([servidos, returnPedidos, bebidas]: [todosPedidos[], todosPedidos[], todosPedidos[]]) => {
      // Concatena todos os arrays de valores
      const allValues = [...servidos, ...returnPedidos, ...bebidas]
        .map((pedido: todosPedidos) => pedido.nomeQuartoOuPassante)
        .filter((value, index, self) => self.indexOf(value) === index)
        .filter(value => value !== 'Norte' && value !== 'Sul' && value !== 'Leste' && value !== 'Sol'&& value !== 'Master 1' && value !== 'Master 2' && value !== 'Master 3' && value !== 'Master 4' && value !== 'Master 5' && value !== 'Vip 1' && value !== 'Vip 2' && value !== 'Vip 3' && value !== 'Ilha' && value !== 'Chalé');

      this.options = allValues;

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  selectedOption: string = '';
  dataSource: todosPedidos[] = [];









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
    { value: 'Chalé'},
    { value: 'Anexo'},
    { value: 'Aroeira'},
  ];
  nomePassanteSelecionado?: any;
  quartoSelecionado?: any;

  estadoCheckbox?: number;
  nomeQuartoCheck: boolean = true;
  nomePassanteCheck: boolean = true;

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedOption = event.option.value;
    this.getData(this.selectedOption);
  }

  async getData(option: any) {
    this.firestoreService.getServidos().subscribe((val: todosPedidos[]) => {
      this.dataSource = val.filter((pedido: todosPedidos) => {
        return pedido.nomeQuartoOuPassante === option;
      });
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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

  getNomeGarcom() {
    this.firestoreService.getNomeGarcomService().subscribe((email) => {
      this.nomeGarcom = email.charAt(0).toUpperCase() + email.slice(1).split(/@/)[0];
    })
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    if (target.classList.contains('confirm-dialog-backdrop')) {
      this.fecharDialog();
    }
  }

  // Função para fechar o diálogo
  fecharDialog(): void {
    let confirmDialog = document.getElementById('confirm-dialog');

    confirmDialog!.style.display = 'none';
  }



















}


