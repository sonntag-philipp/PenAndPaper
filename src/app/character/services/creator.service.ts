import { HttpClient } from '@angular/common/http';
import { CharacterService } from './../../shared/services/character.service';
import { BehaviorSubject } from 'rxjs/Rx';
import { ItemModel } from '../../shared/models/item.model';
import { SkillModel } from '../../shared/models/skill.model';
import { CharacterModel } from '../../shared/models/character.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CreatorService {

  public skillSubject: BehaviorSubject<SkillModel[]>;

  public currentSkills: SkillModel[];

  constructor(
    private characterService: CharacterService, 
    private http: HttpClient
  ) {
    
  }
}
