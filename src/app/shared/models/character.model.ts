import { ItemModel } from './item.model';
import { SkillModel } from './skill.model';
export class CharacterModel {

  public name: string;
  public title: string;
  public age: number;
  public nation: string;
  public profession: string;

  public maxLife: number = 100;
  public maxMana: number = 50;

  public gender: string;
  public religion: string;

  public height: number;


  

  public skills: any = [];

  public inventory: ItemModel[] = [];
  public equipped: ItemModel[] = [];

  // Statuses
  public _life: number = this.maxLife;
  set life(life: number) {
    if(life <= this.maxLife) this._life = life;
  }
  get life(): number {
    return this._life;
  }

  public _mana: number = this.maxMana;
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