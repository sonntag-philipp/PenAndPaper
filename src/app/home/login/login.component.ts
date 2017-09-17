import { Router } from '@angular/router';
import { ErrorService } from './../../shared/services/error.service';
import { MdSnackBar } from '@angular/material';
import { AccountService } from '../../shared/services/account.service';
import { AccountModel } from './../../shared/models/account.model';
import { ConstantService } from '../../shared/services/constants.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private constantService: ConstantService,
    private errorService: ErrorService,
    private snackBar: MdSnackBar,
    private router: Router
  ) { }

  onBtnRegister(username: string, password: string) {

    let acc = new AccountModel();
    acc.username = username;

    this.http.post(this.constantService.restURL + "/account/" + username, JSON.stringify(acc)).subscribe(
      (result) => {
        this.snackBar.open("Erfolgreich registriert.", "Okay", {
          duration: 2000
        });
      },
      (error) => {
        this.errorService.showSnackbar((<HttpErrorResponse> error).status);
      }
    );
  }
  
  onBtnLogin(username: string, password: string) {
    this.http.get<AccountModel>(this.constantService.restURL + "/account/" + username).subscribe(
      (result) => {
        this.cookieService.put("account_username", username);
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.errorService.showSnackbar((<HttpErrorResponse> error).status);
      }
    )
  }

}
