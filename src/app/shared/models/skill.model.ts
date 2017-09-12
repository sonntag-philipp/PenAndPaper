export class SkillModel {

  constructor(name: string, chance: number){
    this.chance = chance;
    this.name = name;
  }

  public name: string;

  public chance: number;
}