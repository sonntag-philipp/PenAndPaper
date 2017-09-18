import { ErrorService } from './error.service';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { MdSnackBar } from '@angular/material';
import { ConstantService } from './constants.service';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { CharacterService } from './character.service';
import { AccountModel } from '../models/account.model';
import { CharacterModel } from './../models/character.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor(
    private http: HttpClient,
    private constantService: ConstantService,
    private snackBar: MdSnackBar,
    private errorService: ErrorService
  ) { }

  private account: AccountModel = new AccountModel();
  public characters: CharacterModel[] = [];

  /**
   * Removes a character of the character array and of the characterIDs of the account model
   * and puts the account onto the server.
   * @param characterID Character ID of the character to be removed.
   */
  public removeCharacter(characterID: string) {
    this.characters.forEach(item => {
      if(item.uid === characterID) {
        this.characters.splice(this.characters.indexOf(item), 1);
      }
    });

    this.account.characterIDs.splice(this.account.characterIDs.indexOf(characterID), 1);

    console.log(this.account);
    
    this.http.put(this.constantService.restURL + "/account/" + this.account.username, JSON.stringify(this.account)).subscribe(
      (result) => {
        console.log(result);
        this.snackBar.open("Charakter erfolgreich gelöscht.", "Okay", {
          duration: 2000
        });
      },
      (error) => {
        this.errorService.showSnackbar((<HttpErrorResponse> error).status);
      }
    );
  }

  /**
   * Returns the character ids of the account model as an URL.
   */
  public getCharacterIDs(): string {
    let value: string = "";

    this.account.characterIDs.forEach(item => {
      value += "/" + item;
    });

    return value;
  }

  /**
   * Adds a characterID to the account model and puts it onto the server.
   * @param characterID The ID of the character to be added.
   */
  public addCharacterID(characterID: string) {
    this.account.characterIDs.push(characterID);
  }

  /**
   * Gets the account model from the backend.
   * @param username Username of the account model
   */
  public getAccount(): AccountModel {
    return this.account;
  }

  /**
   * Sets the account of the service.
   * @param account Account the service account should be set to
   */
  public setAccount(account: AccountModel) {
    this.account = account;
  }
}