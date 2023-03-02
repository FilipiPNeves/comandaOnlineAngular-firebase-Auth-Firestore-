import { FirebaseApp } from '@angular/fire/app';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private app: FirebaseApp, private route: Router) {}

  canActivate(): boolean {
    const auth = getAuth(this.app);

    let v: boolean = true;

    onAuthStateChanged(auth, (user) => {
      if (user) {
      }else this.route.navigate(['login']); v = false;
    });

    return v;

  }
}
