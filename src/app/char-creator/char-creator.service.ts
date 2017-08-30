import { StatusModel } from '../shared/models/status.model';
import { CharacterModel } from '../shared/models/character.model';
import { NgForm } from '@angular/forms';

export class CharCreatorService {

  public character: CharacterModel;
  
  public creationIndex: number = 0;

  private m: StatusModel;

  
  constructor () {
    this.character = new CharacterModel();


    this.character.Statuses.push(new StatusModel("Lebenspunkte", 400, 400));
    this.character.Statuses.push(new StatusModel("Manapunkte", 200, 200));
  }
}