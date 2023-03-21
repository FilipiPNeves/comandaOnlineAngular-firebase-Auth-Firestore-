import { FirestoreService } from 'src/app/services/firestore.service';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface todosPedidos {
  horario: any,
  obs: any,
  prato: any,
  valor: any,
  quant: any,
  nomeQuartoOuPassante: any,
}


@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  constructor(private firestoreService: FirestoreService) {}

  myControl = new FormControl('');
  options: string[] = ['Norte', 'Sul', 'Leste', 'Sol', 'Master 1', 'Master 2', 'Master 3', 'Master 4', 'Master 5', 'Vip 1', 'Vip 2', 'Vip 3', 'Ilha', 'Chalé' ];
  filteredOptions?: Observable<string[]>;
  selectedOption: string = '';

  displayedColumns: string[] = ['obs', 'pedido', 'quant', 'valor'];
  dataSource: todosPedidos[] = [];

  flagPopUp: boolean = false;
  idPopUp: string = '';
  pratoPopUp: string = '';
  quartoPopUp: string = '';
  horarioPopUp: string = '';
  obsPopUp: string = '';
  valorPopUp: number = 0;
  quantPopUp: number = 0;

  valorTotal: number = 0;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
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


}
