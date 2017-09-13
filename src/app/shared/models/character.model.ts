import { SkillTreeModel } from './skill-tree.model';
import { EffectModel } from './effect.model';
import { ItemModel } from './item.model';

export class CharacterModel {


  // Personal Information:
  public name: string;
  public title: string;
  public nation: string;
  public profession: string;
  public gender: string;
  public religion: string;

  public height: number;
  public age: number;


  // Game relevant Information
  public maxLife: number = 100;
  public life: number = this.maxLife;

  public maxMana: number = 50;
  public mana: number = this.maxMana;

  
  public equipment:   ItemModel[] = [];
  public inventory:   ItemModel[] = [];
  public effects:     EffectModel[] = [];
  public skillTrees:      SkillTreeModel[] = [];
}