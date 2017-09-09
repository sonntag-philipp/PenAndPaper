export class ItemModel {

  constructor(name: string, effect: string, price: number, equippable: boolean, usable: boolean){
    this.name = name;
    this.effect = effect;
    this.price = price;
    this.equippable = equippable;
    this.usable = usable;
  }

  public usable: boolean;
  public equippable: boolean;
  public name: string;
  public effect: string;
  public description: string;
  public price: number;
}