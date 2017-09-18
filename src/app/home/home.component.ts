import { MdSnackBar } from '@angular/material';
import { ErrorService } from '../shared/services/error.service';
import { ConstantService } from '../shared/services/constants.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AccountModel } from './../shared/models/account.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs/Rx';
import { ToolbarService } from './../toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private constantService: ConstantService,
    private errorService: ErrorService,
    private router: Router,
    private toolbarService: ToolbarService,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Pen and Paper - Login";

    if(this.cookieService.get("account_username") != undefined) {
      this.router.navigate(['dashboard']);
    }
  }
  
  onBtnLogin(username: string, password: string) {

    if(username.trim() === "") {
      this.snackBar.open("Bitte gebe einen Wert ein.", "Okay", {
        duration: 2000
      });
      return;
    }

    this.http.get<AccountModel>(this.constantService.restURL + "/account/" + username).subscribe(
      (result) => {
        this.cookieService.put("account_username", username);
        this.router.navigate(['dashboard']);
      },
      (error) => {
        if((<HttpErrorResponse> error).status === 404) {

          let acc = new AccountModel();
          acc.username = username;
      
          this.http.post(this.constantService.restURL + "/account/" + username, JSON.stringify(acc)).subscribe(
            (result) => {
              this.snackBar.open("Erfolgreich registriert. Klicke nochmal auf anmelden um zum dashboard zu gelangen.", "Okay", {
                duration: 2000
              });
            },
            (error) => {
              this.errorService.showSnackbar((<HttpErrorResponse> error).status);
            }
          );


        } else {
          this.errorService.showSnackbar((<HttpErrorResponse> error).status);
        }
      }
    )
  }

}
