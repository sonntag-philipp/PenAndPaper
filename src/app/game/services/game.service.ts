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
    this.character.name = "Geralt von Riva";
    this.character.title = "Schlächter von Blaviken";
    this.character.maxLife = 400;
    this.character.maxMana = 400;
    this.character.mana = 400;
    this.character.life = 276;

    this.inventorySubject = new BehaviorSubject<ItemModel[]>(this.character.inventory);
    this.equipmentSubject = new BehaviorSubject<ItemModel[]>(this.character.equipped);


    this.character.skills.handeln.push(new SkillModel("Schleichen", 43));
    this.character.skills.handeln.push(new SkillModel("Diebstahl", 43));
    this.character.skills.handeln.push(new SkillModel("Schlösserknacken", 43));
    this.character.skills.handeln.push(new SkillModel("Attentat", 43));
    this.character.skills.handeln.push(new SkillModel("Spurenlesen", 43));
    this.character.skills.wissen.push(new SkillModel("Stadtwissen", 43));
    this.character.skills.wissen.push(new SkillModel("Magiekunde", 43));
    this.character.skills.wissen.push(new SkillModel("Heilkunde", 43));
    this.character.skills.wissen.push(new SkillModel("Sprachen und Schriften", 43));
    this.character.skills.wissen.push(new SkillModel("Giftkunde", 43));
    this.character.skills.interagieren.push(new SkillModel("Täuschen", 43));
    this.character.skills.interagieren.push(new SkillModel("Ablenken", 43));
    this.character.skills.interagieren.push(new SkillModel("Sinnesschärfe", 43));
    this.character.skills.interagieren.push(new SkillModel("Überreden", 43));
    this.character.skills.interagieren.push(new SkillModel("Einschüchtern", 43));
    this.addInventory(new ItemModel("Schild", "+10HP", 0.1, true, false));
    this.addInventory(new ItemModel("Magischer Trank", "+9000HP", 0.1, false, true));

    this.addEquipment(new ItemModel("Schild", "+10HP", 0.1, true, false));
    this.addEquipment(new ItemModel("Schwert", "+9000HP", 0.1, true, false));
  } 
 
  public addEquipment(item: ItemModel): void {
    if(item.name === "" || item.effect === "" || item.price === null) return;


    this.character.equipped.push(item);
    this.equipmentSubject.next(this.character.equipped.slice());
  }

  public removeEquipment(item: ItemModel): void {
    this.character.equipped.splice(this.character.equipped.indexOf(item), 1);
    this.equipmentSubject.next(this.character.equipped);
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
