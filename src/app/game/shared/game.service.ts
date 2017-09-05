import { EffectModel } from '../../shared/models/effect.model';
import { ItemModel } from '../../shared/models/item.model';
import { StatusModel } from '../../shared/models/status.model';
import { CharacterModel } from '../../shared/models/character.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  public character: CharacterModel;

  constructor() {
    this.character = new CharacterModel();
    this.character.statuses.push(new StatusModel("Leben", 98, 400));
    this.character.statuses.push(new StatusModel("Mana", 45, 400));
    let effect = new EffectModel("Kartoffelstärke", "Stärke", -20, "Leben");

    this.character.equippedItems.push(new ItemModel("Kartoffel", effect,"Kartoffel essen"));
    this.character.equippedItems.push(new ItemModel("Karzenhalter", effect,"Kartoffel essen"));


    effect = new EffectModel("Kartoffelstärke", "Stärke", 20, "Leben");

    this.character.inventory.push(new ItemModel("Schnitzel", effect,"Kartoffel essen"));
    this.character.inventory.push(new ItemModel("Schreibtisch", effect,"Kartoffel essen"));
    this.character.name = "Geralt von Riva";
    this.character.title = "Schlächter von Blaviken"; 
  }
}
