import { HttpClient } from '@angular/common/http';
import { CharacterService } from './character.service';
import { AccountModel } from '../models/account.model';
import { CharacterModel } from './../models/character.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor(
    private characterService: CharacterService,
    private http: HttpClient
  ) { }

  public account: AccountModel;

  public getAccount(uid: string): AccountModel {
    this.account = new AccountModel();
    this.account.uid = uid;

    this.http.get<CharacterModel>("http://localhost:8080/character/test_char").subscribe(
      (result) => {
        this.account.characters.push(result);
      },
      (error) => {
        prompt("Error while accessing API.");
      }
    )
    
    return this.account;
  }

  public getCharacters(): CharacterModel[] {
    return this.account.characters;
  }
}