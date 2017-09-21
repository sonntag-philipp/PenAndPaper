import { AccountService } from './../shared/services/account.service';
import { ItemModel } from '../shared/models/item.model';
import { ErrorService } from '../shared/services/error.service';
import { ConstantService } from './../shared/services/constants.service';
import { CharacterModel } from '../shared/models/character.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { CharacterService } from '../shared/services/character.service';
import { ToolbarService } from './../toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService,
    public characterService: CharacterService,
    private cookieService: CookieService,
    private http: HttpClient,
    private constantService: ConstantService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Pen and Paper";

    if(this.characterService.character === null) console.log("Mongou");
    this.cookieService.get("game_character");

    this.http.get<CharacterModel>(this.constantService.restURL + "/character/" + this.cookieService.get("game_character")).subscribe(
      (result) => {
        this.characterService.character = result;

      },
      (error) => {
        this.errorService.showSnackbar((<HttpErrorResponse> error).status);
      }
    )
  }

}
