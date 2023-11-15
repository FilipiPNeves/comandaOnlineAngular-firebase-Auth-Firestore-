import { Router } from '@angular/router';
import { FirestoreService } from './../services/firestore.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome: string = '';

  constructor(
    private firestore: FirestoreService,
    private router: Router
  ) {
    this.getNomeGarcom();
  }

  reload() {
    const rotaDesejada = '/home/listadepedidos';
    // Redireciona para a rota desejada
    this.router.navigateByUrl(rotaDesejada).then(() => {
      window.location.reload();
    });
  }

  getNomeGarcom() {
    this.firestore.getNomeGarcomService().subscribe((email) => {
      this.nome = email.charAt(0).toUpperCase() + email.slice(1).split(/@/)[0];
    })
  }


  logout() {
    this.firestore.logoutService();
  }

  toolbarHidden = true;
  toggleToolbar() {
    this.toolbarHidden = !this.toolbarHidden;
  }

}
