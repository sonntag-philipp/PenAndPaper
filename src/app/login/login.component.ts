import { Response } from '@angular/http';
import { MessageModel } from '../shared/models/message.model';
import { BackendService } from '../shared/services/backend.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private cookieService: CookieService, private backendService: BackendService) { }

  onSubmitLogin(form: NgForm){

    this.backendService.sendRequest(
      new MessageModel(
        'login', 
        JSON.stringify({username: form.value.username, password: form.value.password}
        )
      )
    ).subscribe(
      (response: Response) => {
        
        console.log(JSON.parse(response.text()).session_id);
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.router.navigate(['/dashboard/']);
  }

}
