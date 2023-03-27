import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
  id: any
}

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  selectedOption: string = '';
  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'valor'];
  dataSource: todosPedidos[] = [];
  idPopUp: string = '';
  pratoPopUp: string = '';
  quartoPopUp: string = '';
  horarioPopUp: string = '';
  obsPopUp: string = '';
  valorPopUp: number = 0;
  quantPopUp: number = 0;
  valorTotal?: number;
  flagDialog: boolean = false;

  constructor(
    private firestoreService: FirestoreService,
    private _eref: ElementRef
  ) {}

  ngOnInit() {
    this.firestoreService.getServidos().subscribe((val: todosPedidos[]) => {
      // Filtra os valores duplicados
      this.options = val.map((pedido: todosPedidos) => pedido.nomeQuartoOuPassante)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedOption = event.option.value;
    this.getData(this.selectedOption);
  }

  getData(option: any) {
    this.firestoreService.getServidos().subscribe((val: todosPedidos[]) => {
      this.dataSource = val.filter((pedido: todosPedidos) => {

        return pedido.nomeQuartoOuPassante === option;
      });

      this.valorTotal = this.dataSource.reduce((total, pedido) => {
        return total + Number(pedido.valor);
      }, 0);
    });
  }

  finalizarComanda() {
    this.dataSource.forEach((pedido) => {
      this.firestoreService.finalizarcomanda(pedido.id);

    })
    this.flagDialog = false;
  }

  openDialog() {
    this.flagDialog = true;
  }

  fecharPopUp() {
    this.flagDialog = false;
  }

  @HostListener('document:click', ['$event'])
  closePopUp(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.flagDialog = false;
    }
  }

}

