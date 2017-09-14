import { BehaviorSubject } from 'rxjs/Rx';
import { ItemModel } from '../../shared/models/item.model';
import { SkillModel } from '../../shared/models/skill.model';
import { CharacterModel } from '../../shared/models/character.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  public character: CharacterModel;

  public inventorySubject: BehaviorSubject<ItemModel[]>;
  public equipmentSubject: BehaviorSubject<ItemModel[]>;

  constructor() {
    this.character = new CharacterModel();

    this.inventorySubject = new BehaviorSubject<ItemModel[]>(this.character.inventory);
    this.equipmentSubject = new BehaviorSubject<ItemModel[]>(this.character.equipment);
  }

  public addEquipment(item: ItemModel): void {
    if(item.name === "" || item.effect === "" || item.price === null) return;


    this.character.equipment.push(item);
    this.equipmentSubject.next(this.character.equipment.slice());
  }

  public removeEquipment(item: ItemModel): void {
    this.character.equipment.splice(this.character.equipment.indexOf(item), 1);
    this.equipmentSubject.next(this.character.equipment);
  }
  


  public removeInventory(item: ItemModel): void {
    this.character.inventory.splice(this.character.inventory.indexOf(item), 1);
    this.inventorySubject.next(this.character.inventory);
  }

  public addInventory(item: ItemModel): void {
    if(item.name === "" || item.effect === "" || item.price === null) return;

    this.character.inventory.push(item);
    this.inventorySubject.next(this.character.inventory.slice());
  }

}
