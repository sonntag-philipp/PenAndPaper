import { BehaviorSubject } from 'rxjs/Rx';
import { EffectModel } from './../models/effect.model';

export class Effects {
  
    public effects: EffectModel[];
    public subject: BehaviorSubject<EffectModel[]> = new BehaviorSubject<EffectModel[]>(this.effects);
  
    constructor(effects: EffectModel[]) {
      this.effects = effects;
    }
  
    public add(effect: EffectModel): void {
      this.effects.push(effect);
      this.subject.next(this.effects.slice());
    }
    
    public change(toChange: EffectModel, changeValue: EffectModel): void {
  
      this.effects[this.effects.indexOf(toChange)] = changeValue;
      this.subject.next(this.effects.slice());
    }
  
    public remove(effect: EffectModel): void {
      this.effects.splice(this.effects.indexOf(effect), 1);
      this.subject.next(this.effects.slice());
    }
  
    public set(effects: EffectModel[]): void {
      this.effects = effects;
      this.subject.next(this.effects.slice());
    }
    
    public updateSubject(): void {
      this.subject.next(this.effects.slice());
    }
  }