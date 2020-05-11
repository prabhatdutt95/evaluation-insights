import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  loggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkLoggedInUser());
  constructor(private http: HttpClient, private router: Router) { }

  getUsers() : Observable<any>{
    return this.http.get<any>('http://localhost:3000/users');
  }

  checkLoggedInUser() : boolean {
    const userLoggedIn = localStorage.getItem('userEmail') ? true : sessionStorage.getItem('userEmail') ? true : false;
    return userLoggedIn;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  login() {
    this.loggedIn.next(true);
    this.router.navigate(['/']);
  }
}
