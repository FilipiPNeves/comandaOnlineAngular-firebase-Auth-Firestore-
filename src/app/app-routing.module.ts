import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path:
    'home',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  { path:
    'principal',
    loadChildren: () => import('./svtot-module/svtot-module.module').then(m => m.SvtotModuleModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
