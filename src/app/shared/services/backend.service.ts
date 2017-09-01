import { CookieService } from 'ngx-cookie';
import { MessageModel } from '../models/message.model';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class BackendService {

  constructor(private http: Http, private cookieService: CookieService) { }

  public sendRequest(msg: MessageModel): Observable<Response> {

    if((this.cookieService.get("session_id") === undefined)) {
      console.log("Please log in!");
    } else {
      msg.sessionID = this.cookieService.get("session_id");
    }
    
    return this.http.post("http://localhost:8080", JSON.stringify(msg));
  }

  public sendLoginRequest(username: string, password: string): Observable<Response> {
    return this.http.post("http://localhost:8080", 
      JSON.stringify(
        new MessageModel(
          "login", 
          JSON.stringify({username: username, password: password})
        )
      )
    );

  }
}