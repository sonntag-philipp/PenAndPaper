import { ItemModel } from './item.model';
import { SkillModel } from './skill.model';
export class CharacterModel {

  public name: string;
  public title: string;
  public age: number;
  public nation: string;
  public profession: string;

  public maxLife: number;


  

  public skills: any = [];

  public inventory: ItemModel[] = [];
  public equipped: ItemModel[] = [];

  // Statuses
  public _life: number;
  set life(life: number) {
    if(life <= this.maxLife) this._life = life;
  }
  get life(): number {
    return this._life;
  }

  public maxMana: number;
  public _mana: number;
  set mana(mana: number) {
    if(mana <= this.maxMana) this._mana = mana;
  }
  get mana(): number {
    return this._mana;
  }
}

class Skills {
  sectionName: string;
  skills: SkillModel[];
}