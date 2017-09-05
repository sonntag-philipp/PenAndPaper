import { StatusModel } from './status.model';
import { EffectModel } from './effect.model';
import { SkillModel } from './skill.model';
import { ItemModel } from './item.model';

export class CharacterModel {

  level: number;
  
  name: string;
  title: string;
  height: string;
  age: string;
  nation: string;
  religion: string;
  profession: string;

  // Saves the life, mana or the experience status, can be extended the way the user wants to
  statuses: StatusModel[] = [];

  // The items stored in the characters inventory
  inventory: ItemModel[] = [];

  // The items equipped by the character
  equippedItems: ItemModel[] = [];

  // The skills of the character
  skills: SkillModel[] = [];

  // Effects that are focused on the character
  effects: EffectModel[] = [];

  constructor() { }
}