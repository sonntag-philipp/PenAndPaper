import { CharacterModel } from './../models/character.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {

  public character: CharacterModel;

  constructor() {
    
  }
}