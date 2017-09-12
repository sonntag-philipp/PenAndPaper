import { BehaviorSubject } from 'rxjs/Rx';
import { SkillModel } from './../models/skill.model';

export class SkillTree {
  
    public experience: number = 550;

    public skills: SkillModel[];
    public subject: BehaviorSubject<SkillModel[]> = new BehaviorSubject<SkillModel[]>(this.skills);
  
    constructor(skills: SkillModel[]) {
      this.skills = skills;
    }
  
    public add(skill: SkillModel): void {
      skill.chance = 0;

      this.skills.push(skill);
      this.subject.next(this.skills.slice());
    }
    
    public change(toChange: SkillModel, changeValue: number): void {
      if(changeValue > 1000 || changeValue < 0) return;

      this.experience -= (changeValue - toChange.chance);

      this.skills[this.skills.indexOf(toChange)].chance = changeValue;
      this.subject.next(this.skills.slice());
    }
  
    public remove(skill: SkillModel): void {
      this.skills.splice(this.skills.indexOf(skill), 1);
      this.subject.next(this.skills.slice());
    }
  
    public set(skills: SkillModel[]): void {
      this.skills = skills;
      this.subject.next(this.skills.slice());
    }
  }