import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreensModule } from './screens/screens.module';
import { ScreensRoutingModule } from './screens/screens-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ScreensModule,
    HttpClientModule,
    FormsModule,
    ScreensRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MDBBootstrapModule],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
