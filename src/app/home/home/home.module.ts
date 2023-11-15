import { NovoPedidoComponent } from './../novo-pedido/novo-pedido.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home.component';
import { CaixaComponent } from '../caixa/caixa.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RelatorioComponent } from '../relatorio/relatorio.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BebidasComponent } from '../bebidas/bebidas.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from 'src/app/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DialogOpcoesPedidosComponent } from 'src/app/dialogs/dialog-opcoes-pedidos/dialog-opcoes-pedidos.component';
import { DialogEditPedidosComponent } from 'src/app/dialogs/dialog-edit-pedidos/dialog-edit-pedidos.component';
import { DialogEditBebidasComponent } from 'src/app/dialogs/dialog-edit-bebidas/dialog-edit-bebidas.component';
import { DialogEditCaixaComponent } from 'src/app/dialogs/dialog-edit-caixa/dialog-edit-caixa.component';
import { DialogFinalizarComandaComponent } from 'src/app/dialogs/dialog-finalizar-comanda/dialog-finalizar-comanda.component';
import { DialogPedidoDiferenteComponent } from 'src/app/dialogs/dialog-pedido-diferente/dialog-pedido-diferente.component';
import {MatStepperModule} from '@angular/material/stepper';
import { DialogEditCarrinhoComponent } from 'src/app/dialogs/dialog-edit-carrinho/dialog-edit-carrinho.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogNovoEditCarrinhoComponent } from 'src/app/dialogs/dialog-novo-edit-carrinho/dialog-novo-edit-carrinho.component';


@NgModule({
  declarations: [
    HomeComponent,
    NovoPedidoComponent,
    CaixaComponent,
    RelatorioComponent,
    BebidasComponent,
    DialogOverviewExampleDialog,
    DialogOpcoesPedidosComponent,
    DialogEditPedidosComponent,
    DialogEditBebidasComponent,
    DialogEditCaixaComponent,
    DialogFinalizarComandaComponent,
    DialogPedidoDiferenteComponent,
    DialogEditCarrinhoComponent,
    DialogNovoEditCarrinhoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule,
    MatGridListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
