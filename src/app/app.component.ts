import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './services/login-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  isLoggedIn$: Observable<boolean>;
  userDetails = {
    userFirstName: null,
    userLastName: null,
    userEmail: null,
    userContactNumber: null
  };

  constructor ( private router: Router, private loginService: LoginServiceService ) {}
  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    for(const property in this.userDetails){
      this.userDetails[property] = localStorage.getItem(property) ? localStorage.getItem(property) : sessionStorage.getItem(property) ? sessionStorage.getItem(property) : null
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.loginService.logout();
  }
}
