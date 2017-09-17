import { CharacterModel } from './../shared/models/character.model';
import { ErrorService } from '../shared/services/error.service';
import { ConstantService } from './../shared/services/constants.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { ToolbarService } from '../toolbar/toolbar.service';
import { AccountService } from '../shared/services/account.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AccountModel } from './../shared/models/account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public accountService: AccountService,
    private toolbarService: ToolbarService,
    private cookieService: CookieService,
    private http: HttpClient,
    private constantService: ConstantService,
    private errorService: ErrorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Pen and Paper - Dashboard";


    this.http.get<AccountModel>(this.constantService.restURL + "/account/" + this.cookieService.get("account_username")).subscribe(
      (result) => {
        this.accountService.setAccount(result);

        if(this.accountService.getCharacterIDs() != "") {
          this.http.get<CharacterModel[]>(this.constantService.restURL + "/character" + this.accountService.getCharacterIDs()).subscribe(
            (result) => {
              let characters = [];
              this.accountService.characters = characters.concat(result);
            },
            (error) => {
              this.errorService.showSnackbar((<HttpErrorResponse> error).status);
            }
          );
        }

      },
      (error) => {
        this.errorService.showSnackbar((<HttpErrorResponse> error).status);
      }
    );
  }

  public onBtnGameStart() {
    
  }

  public onBtnAddCharacter() {
    this.router.navigate(['editor']);
  }
}
