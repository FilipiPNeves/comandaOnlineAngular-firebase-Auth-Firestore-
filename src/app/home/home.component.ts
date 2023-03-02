import { FirestoreService } from './../services/firestore.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private firestore: FirestoreService) {}

  email!: string;

  ngOnInit() {
    let email: string = this.firestore.getInf();
    this.email = email;
  }

  logout() {
    this.firestore.logoutService();
  }

}
