import { StatusModel } from '../shared/models/status.model';
import { CharacterModel } from '../shared/models/character.model';
import { NgForm } from '@angular/forms';

export class CharCreatorService {

  // Defines the card index of the char-creator component.
  public creationIndex: number = 0;

  public character: CharacterModel;
  

  constructor () {
    this.character = new CharacterModel();

    this.character.Statuses.push(new StatusModel("Lebenspunkte", 400, 400));
    this.character.Statuses.push(new StatusModel("Manapunkte", 200, 200));
  }

  public saveChar(): void {
    
  }
}