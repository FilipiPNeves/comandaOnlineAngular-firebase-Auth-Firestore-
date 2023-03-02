import { FirestoreService } from './../services/firestore.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore.LoginAutomatico();
  }

  login(objLogin: NgForm) {
    this.firestore.loginService(objLogin);
  }
}
