import { StatusModel } from './status.model';
export class EffectModel {

  constructor (
    public name: string, 
    public description: string, 
    public strength: number,
    public status: string
  ) { }
}