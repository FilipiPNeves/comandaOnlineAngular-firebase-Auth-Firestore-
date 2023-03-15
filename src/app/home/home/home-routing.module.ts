import { ListaDePedidosComponent } from './../lista-de-pedidos/lista-de-pedidos.component';
import { NovoPedidoComponent } from './../novo-pedido/novo-pedido.component';
import { HomeComponent } from './../home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', redirectTo: 'novopedido', pathMatch: 'full' },
    { path: 'novopedido', component: NovoPedidoComponent },
    { path: 'listadepedidos', component: ListaDePedidosComponent }
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
