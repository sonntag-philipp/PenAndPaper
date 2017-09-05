import { EffectModel } from './effect.model';

export class ItemModel {
  name: string;
  description: string;

  effect: EffectModel;

  constructor(name:string, effect: EffectModel, description: string) {
    this.name = name;
    this.effect = effect;
    this.description = description;
  }
}