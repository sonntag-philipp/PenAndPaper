import { CookieService } from 'ngx-cookie';
import { MessageModel } from '../models/message.model';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class BackendService {

  constructor(private http: Http, private cookieService: CookieService) { }

  public sendRequest(msg: MessageModel): Observable<Response> {
    msg.sessionID = this.cookieService.get("session_id");
    
    return this.http.post("http://localhost:8080", JSON.stringify(msg));
  }
}