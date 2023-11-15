import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

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
  selector: 'app-dialog-pedido-diferente',
  templateUrl: './dialog-pedido-diferente.component.html',
  styleUrls: ['./dialog-pedido-diferente.component.css']
})
export class DialogPedidoDiferenteComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogPedidoDiferenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public firestoreService: FirestoreService,
    public dialog: MatDialog,
    public router: Router
  ) {}

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

      this.filteredOptions = this.nomePassante.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  estadoCheckbox?: number;
  nomeQuartoCheck: boolean = false;
  nomePassanteCheck: boolean = false;

  nomeQuarto = new FormControl('');
  nomePassante = new FormControl('');
  recepOuBebi = new FormControl('');
  pedido = new FormControl('');
  valor = new FormControl();
  obs = new FormControl('');
  quantidade = new FormControl(1);

  nomeGarcom: string = '';


  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  selectedOption: string = '';
  dataSource: todosPedidos[] = [];

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

  pedido2: pedidosCarrinho[] = [];

  async enviarPedido() {
    if(this.recepOuBebi.value === '') {
      alert("Recepção ou Bebidas não selecionados!");
      return;
    }else if(this.pedido.value === '' || this.valor.value === null) {
      alert("Faltando Pedido ou Valor!");
      return;
    }else {
      this.nomeGarcom = await this.getNomeGarcom();
      if(this.recepOuBebi.value === "Recepção") {
        this.pedido2 = [
          {
          nome: this.pedido.value || '',
          valor: this.valor.value,
          obs: this.obs.value || '',
          qnt: this.quantidade.value ?? 1,
          bebida: false
          }
        ]
      }else if(this.recepOuBebi.value === "Bebidas") {
        this.pedido2 = [
          {
          nome: this.pedido.value || '',
          valor: this.valor.value,
          obs: this.obs.value || '',
          qnt: this.quantidade.value ?? 1,
          bebida: true
          }
        ]
      }

      try {
        let result = this.pedido2
        this.dialogRef.close(result);
      } catch (error) {
        console.log('erro');
      }
    }
  }

  getNomeGarcom(): Promise<string> {
    return new Promise((resolve) => {
      this.firestoreService.getNomeGarcomService().subscribe((email) => {
        const nomeGarcom = email.charAt(0).toUpperCase() + email.slice(1).split(/@/)[0];
        resolve(nomeGarcom);
      });
    });
  }


  onChangeCheckbox() {
    if(this.estadoCheckbox == 1) {
      this.nomePassanteCheck = false;
      this.nomeQuartoCheck = true;
      this.nomePassante.setValue('');
    }else {
      this.nomeQuarto.setValue('');
      this.nomeQuartoCheck = false;
      this.nomePassanteCheck = true;
    }

  }

  async getData(option: any) {
    this.firestoreService.getServidos().subscribe((val: todosPedidos[]) => {
      this.dataSource = val.filter((pedido: todosPedidos) => {
        return pedido.nomeQuartoOuPassante === option;
      });
    });
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedOption = event.option.value;
    this.getData(this.selectedOption);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onNoClick(result: any): void {
    this.dialogRef.close(result);
  }
}
