import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  addUser(user) : Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }
}
