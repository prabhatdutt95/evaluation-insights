import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginServiceService } from './login-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public loginService: LoginServiceService, public router: Router) {}
  canActivate(): boolean {
    if (!this.loginService.checkLoggedInUser()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}