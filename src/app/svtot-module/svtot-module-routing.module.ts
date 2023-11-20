import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { NovoPedidoSvtotComponent } from './novo-pedido-svtot/novo-pedido-svtot.component';
import { CaixaSvtotComponent } from './caixa-svtot/caixa-svtot.component';
import { PedidosCaixaSvtotComponent } from './pedidos-caixa-svtot/pedidos-caixa-svtot.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent , children: [
    { path: '', redirectTo: 'caixa', pathMatch: 'full' },
    { path: 'novopedido/:nomeCliente', component: NovoPedidoSvtotComponent },
    { path: 'caixa', component: CaixaSvtotComponent },
    { path: 'pedidoscaixa/:nomeCliente', component: PedidosCaixaSvtotComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvtotModuleRoutingModule { }
