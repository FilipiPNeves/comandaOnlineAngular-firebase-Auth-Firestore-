import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvtotModuleRoutingModule } from './svtot-module-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { NovoPedidoSvtotComponent } from './novo-pedido-svtot/novo-pedido-svtot.component';
import { CaixaSvtotComponent } from './caixa-svtot/caixa-svtot.component';
import { PedidosCaixaSvtotComponent } from './pedidos-caixa-svtot/pedidos-caixa-svtot.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    NovoPedidoSvtotComponent,
    CaixaSvtotComponent,
    PedidosCaixaSvtotComponent
  ],
  imports: [
    CommonModule,
    SvtotModuleRoutingModule,
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

  ]
})
export class SvtotModuleModule { }
