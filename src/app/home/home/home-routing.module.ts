import { CaixaComponent } from './../caixa/caixa.component';
import { ListaDePedidosComponent } from './../lista-de-pedidos/lista-de-pedidos.component';
import { NovoPedidoComponent } from './../novo-pedido/novo-pedido.component';
import { HomeComponent } from './../home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioComponent } from '../relatorio/relatorio.component';
import { BebidasComponent } from '../bebidas/bebidas.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', redirectTo: 'novopedido', pathMatch: 'full' },
    { path: 'novopedido', component: NovoPedidoComponent },
    { path: 'listadepedidos', component: ListaDePedidosComponent },
    { path: 'bebidas', component: BebidasComponent },
    { path: 'caixa', component: CaixaComponent },
    { path: 'relatorio1', component: RelatorioComponent }
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
