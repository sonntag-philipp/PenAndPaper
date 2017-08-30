import { IMessageModel } from '../interfaces/models/message.model';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class BackendService {

  private requestOptions: RequestOptionsArgs;

  constructor(private http: Http) { }
  

  public sendRequest(msg: IMessageModel): Observable<Response> {

    this.requestOptions.headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post("http://localhost:4200", msg, this.requestOptions);
  }
}