export class SkillModel {

  constructor(name: string, chance: number){
    if(chance <= 100) this._chance = chance;
    this.name = name;
  }

  public name: string;
  public _chance: number;
  set chance(chance: number) {
    if(chance <= 100) this._chance = chance;
  }
  get chance(): number {
    return this._chance;
  }
}