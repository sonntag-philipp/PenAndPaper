import { CookieOptions, CookieService } from 'ngx-cookie';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginService{

  constructor(private http: Http, private cookieService: CookieService) {}

  login(username: string, password: string){

    this.cookieService.put('session_id', username + "  " + password);

    


    const headers = new Headers({'Content-Type': 'application/json'});



    // return this.http.post("http://localhost:4200", value);
  }

}