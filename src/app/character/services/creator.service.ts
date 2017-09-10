import { RestService } from './../../shared/services/rest.service';
import { BehaviorSubject } from 'rxjs/Rx';
import { ItemModel } from '../../shared/models/item.model';
import { SkillModel } from '../../shared/models/skill.model';
import { CharacterModel } from '../../shared/models/character.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CreatorService {

  public skillSubject: BehaviorSubject<SkillModel[]>;

  public maxSkillPoints: number = 550;
  public skillPointsAvailable: number = this.maxSkillPoints;

  public character: CharacterModel;

  public currentSkills: SkillModel[];

  constructor(private restService: RestService) {
    this.character = new CharacterModel();
    

    this.restService.getAvailableSkills("default").subscribe(
      (result) => {
        this.character.skills = result;
      },
      (error) => {
        console.log("Error while requesting skills");
      }
    )

    this.skillSubject = new BehaviorSubject<SkillModel[]>(this.currentSkills);
  }

  public addSkill(skill: SkillModel) {
    this.currentSkills.push(skill);
    this.skillSubject.next(this.currentSkills.slice());
  }

  public changeSkillChance(skill: SkillModel, value: number) {

    if(value <= this.skillPointsAvailable && value <= 100 && value > 0) {
      this.skillPointsAvailable -= (value - skill.chance);

      skill.chance = value;

      this.skillSubject.next(this.currentSkills.slice());
    }
  }

  public changeCurrentSkills(skills: SkillModel[]) {
    this.currentSkills= skills;
    this.skillSubject.next(this.currentSkills.slice());
  }

}
