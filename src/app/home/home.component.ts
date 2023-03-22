import { FirestoreService } from './../services/firestore.service';
import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuario: string = '';

  constructor(
    private firestore: FirestoreService
  ) {
    const email = localStorage.getItem('email') || '';
    this.usuario = email.charAt(0).toUpperCase() + email.slice(1).split(/@/)[0];
  }

  logout() {
    this.firestore.logoutService();
  }
}
