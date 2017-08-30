import { CharacterModel } from '../shared/models/character.model';
import { NgForm } from '@angular/forms';

export class CharCreatorService {

  public character: CharacterModel;
  
  public creationIndex: number = 0;

  
  constructor () {
    this.character = new CharacterModel();
  }
}