import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginService{


  constructor(private http: Http) {}

  login(value: any){
    const headers = new Headers({'Content-Type': 'application/json'});
    console.log(value);

    return this.http.post("http://localhost:4200", value);
  }

}