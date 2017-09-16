import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  onBtnRegister(username: string, password: string) {
    this.cookieService.put("accountID", username);
  }
  
  onBtnLogin(username: string, password: string) {

  }

}
