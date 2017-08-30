import { StatusModel } from './status.model';
import { EffectModel } from './effect.model';
import { SkillModel } from './skill.model';
import { ItemModel } from './item.model';

export class CharacterModel {

  Level : number;
  
  Name: string;
  Height: string;
  Age: string;
  Nation: string;
  Religion: string;
  Profession: string;

  // Saves the life, mana or the experience status, can be extended the way the user wants to
  Statuses: StatusModel[] = [];

  // The items stored in the characters inventory
  Inventory: ItemModel[] = [];

  // The items equipped by the character
  EquippedItems: ItemModel[] = [];

  // The skills of the character
  Skills: SkillModel[] = [];

  // Effects that are focused on the character
  Effects: EffectModel[] = [];

  constructor() { }
}