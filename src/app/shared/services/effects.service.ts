import { EffectModel } from '../models/effect.model';
import { Injectable } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { CharacterService } from './character.service';
import { Observable } from 'rxjs/Observable';
import { SkillModel } from '../models/skill.model';

@Injectable()
export class EffectService extends DataSource<any> {

  public columns: string[] = ["name", "description", "strength"];

  constructor(private characterService: CharacterService) {
    super();
  }

  public connect(collectionViewer: CollectionViewer): Observable<EffectModel[]> {
    return this.characterService.effects.subject.asObservable();
  }

  public disconnect() {}
}