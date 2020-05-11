import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/sign-up.service';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  allUsers = [];
  fname;
  lname;
  email;
  contactNo;
  password;
  signUpError = false;
  errors = {
    fname : '',
    lname : '',
    email : '',
    password : ''
  }
  constructor(
    private signUpService: SignUpService,
    private loginService: LoginServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginService.getUsers().subscribe(users => {
      this.allUsers = users;
    })
  }

  signUp() {
    this.signUpError = false;
    let count = 0;
    const user = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      contactNumber: this.contactNo,
      password: this.password
    }
    for(const property in user){
      if(!user[property] && property!= 'contactNumber'){
        this.errors[property] = "Field Required"
      } else {
        const emailRegex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        const passwordRegex = new RegExp('^[a-zA-Z]{1,}[0-9]{1,}$');
        if(property === 'email'){
          const emailOkay = emailRegex.test(user[property])
          this.errors[property] = emailOkay? '' : "please enter valid email"
        } else if(property === 'password' && !passwordRegex.test(user[property]) && this.password.length < 8){
          this.errors[property] = "please enter valid password"
        } else {
          this.errors[property] = ''
        }
      }
    }
    for(const error in this.errors){
      if(this.errors[error]!==''){
        count += 1
      }
    }
    const userAlreadyExists = this.allUsers.find(_=>_.email === this.email)
    if (!userAlreadyExists && count == 0){
      this.signUpService.addUser(user).subscribe((user)=>{
        sessionStorage.setItem('userFirstName', this.fname );
        sessionStorage.setItem('userLastName', this.lname );
        sessionStorage.setItem('userEmail', this.email );
        sessionStorage.setItem('userContactNumber', this.contactNo );
        this.loginService.login();
        this.router.navigate(['']);
      })
    } else {
      this.signUpError = count === 0 ? true : false;
    }
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

}
