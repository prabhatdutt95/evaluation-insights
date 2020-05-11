import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allUsers = [];
  email;
  password;
  rememberMe = false;
  loginError = ''
  passwordFound;
  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loginService.getUsers().subscribe(usersResponse => {
      this.allUsers = usersResponse;
    });
  }

  checkUser() {
    const userFound = this.allUsers.find(_ => _.email == this.email)
    this.loginError = userFound ? userFound.password === this.password ? '' : 'Incorrect password' : 'User not found! Please sign up'
    const loggedInUser = this.allUsers.find(_ => _.email == this.email);
    console.log(JSON.stringify(loggedInUser), userFound && userFound.password === this.password);
    if (userFound && userFound.password === this.password) {
      if(this.rememberMe) {
        localStorage.setItem('userFirstName', loggedInUser.fname );
        localStorage.setItem('userLastName', loggedInUser.lname );
        localStorage.setItem('userEmail', loggedInUser.email );
        localStorage.setItem('userContactNumber', loggedInUser.contactNumber );
      } else {
        sessionStorage.setItem('userFirstName', loggedInUser.fname );
        sessionStorage.setItem('userLastName', loggedInUser.lname );
        sessionStorage.setItem('userEmail', loggedInUser.email );
        sessionStorage.setItem('userContactNumber', loggedInUser.contactNumber );
      }
      this.loginService.login();
    }
  }
  goToSignUp() {
    this.router.navigate(['signup']);
  }

}
