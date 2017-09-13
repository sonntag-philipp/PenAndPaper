import { Injectable } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { CharacterService } from './character.service';
import { Observable } from 'rxjs/Observable';
import { SkillModel } from '../models/skill.model';

@Injectable()
export class EffectService extends DataSource<any> {

  public columns: string[] = ["name", "chance"];

  constructor(private characterService: CharacterService) {
    super();
  }

  public connect(collectionViewer: CollectionViewer): Observable<SkillModel[]> {
    return this.characterService.skillTree.subject.asObservable();
  }

  public disconnect() {}
}