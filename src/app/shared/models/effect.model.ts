import { StatusModel } from './status.model';
export class EffectModel {

  constructor (
    public Name: string, 
    public Description: string, 
    public Strength: number,
    public Status: string
  ) { }
}