import { CaixaComponent } from './../caixa/caixa.component';
import { PedidosFeitosComponent } from './../pedidos-feitos/pedidos-feitos.component';
import { ListaDePedidosComponent } from './../lista-de-pedidos/lista-de-pedidos.component';
import { NovoPedidoComponent } from './../novo-pedido/novo-pedido.component';
import { HomeComponent } from './../home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', redirectTo: 'novopedido', pathMatch: 'full' },
    { path: 'novopedido', component: NovoPedidoComponent },
    { path: 'listadepedidos', component: ListaDePedidosComponent },
    { path: 'pedidosfeitos', component: PedidosFeitosComponent },
    { path: 'caixa', component: CaixaComponent }
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
