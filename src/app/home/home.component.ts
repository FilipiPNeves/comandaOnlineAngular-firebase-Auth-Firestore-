import { FirestoreService } from './../services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome: string = '';

  constructor(
    private firestore: FirestoreService
  ) {
    this.getNomeGarcom();
  }



  getNomeGarcom() {
    this.firestore.getNomeGarcomService().subscribe((email) => {
      this.nome = email.charAt(0).toUpperCase() + email.slice(1).split(/@/)[0];
    })
  }


  logout() {
    this.firestore.logoutService();
  }
}
