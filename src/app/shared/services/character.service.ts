import { AccountService } from './account.service';
import { CookieService } from 'ngx-cookie';
import { EffectModel } from './../models/effect.model';
import { SkillTreeModel } from './../models/skill-tree.model';
import { SkillModel } from './../models/skill.model';
import { CharPostResponseModel } from './../models/char-post-response.model';
import { HttpClient } from '@angular/common/http';
import { Effects } from './../classes/effects.class';
import { SkillTree } from './../classes/skills-tree.class';
import { Equipment } from '../classes/equipment.class';
import { Inventory } from './../classes/inventory.class';
import { CharacterModel } from './../models/character.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CharacterService {

  public character: CharacterModel = new CharacterModel();

  // Classes that provide an array of the explicit data and also an behaviorsubject for any views.
  public inventory: Inventory;
  public equipment: Equipment;
  public skillTree: SkillTree;
  public effects:   Effects;


  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.character = new CharacterModel();
    this.character.skillTrees[0] = new SkillTreeModel();

    this.inventory  = new Inventory(this.character.inventory);
    this.equipment  = new Equipment(this.character.equipment);
    this.skillTree  = new SkillTree(this.character.skillTrees[0].skills, this);
    this.effects    = new Effects(this.character.effects);
  }

  public postCharacter() {
    console.log("Posting character...");

    this.http.post<CharPostResponseModel>("http://localhost:8080/character/", JSON.stringify(this.character)).subscribe(
      (result) => {
        console.log(result);
        this.cookieService.putObject(result.guid , this.character.name);
      },
      (error) => {
        prompt("Error while accessing API.");
      }
    )
  }

  public getCharacter(guid: string) {

    this.http.get<CharacterModel>("http://localhost:8080/character/" + guid).subscribe(
      (result) => {
        this.character = result;

        this.skillTree.set(this.character.skillTrees[0].skills);
        this.skillTree.updateSubject();

        this.effects.set(this.character.effects);
        this.effects.updateSubject();

        this.inventory.set(this.character.inventory);
        this.inventory.updateSubject();
        
        this.equipment.set(this.character.equipment);
        this.equipment.updateSubject();
      },
      (error) => {
        prompt("Error while accessing API.");
      }
    )
  }
}