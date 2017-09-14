export class EffectModel {

  constructor(name: string, description: string, strength: number) {
    this.name = name;
    this.description = description;
    this.strength = strength;
  }

  public name: string;
  public description: string;
  public strength: number;
}