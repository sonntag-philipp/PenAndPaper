import { ConstantService } from './constants.service';
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
import {MdSnackBar} from '@angular/material';

@Injectable()
export class CharacterService {

  private character: CharacterModel = new CharacterModel();

  // Classes that provide an array of the explicit data and also an behaviorsubject for any views.
  public inventory: Inventory;
  public equipment: Equipment;
  public skillTree: SkillTree;
  public effects:   Effects;


  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private constantService: ConstantService,
    private snackBar: MdSnackBar
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

    this.http.post<CharPostResponseModel>(this.constantService.restURL + "/character/", JSON.stringify(this.character)).subscribe(
      (result) => {
        console.log(result);
        this.cookieService.putObject(result.guid , this.character.name);
      },
      (error) => {
        this.snackBar.open("Fehler beim Verbinden zur Datenbank.", "Okay", {
          duration: 3000
        });
      }
    )
  }

  public getCharacter(): CharacterModel {
    return this.character;
  }

  public setCharacter(character: CharacterModel) {
    this.character = character;

    
    this.skillTree.set(this.character.skillTrees[0].skills);
    this.skillTree.updateSubject();

    this.effects.set(this.character.effects);
    this.effects.updateSubject();

    this.inventory.set(this.character.inventory);
    this.inventory.updateSubject();
    
    this.equipment.set(this.character.equipment);
    this.equipment.updateSubject();
  }

  /*public getCharacter(guid: string) {

    this.http.get<CharacterModel>(this.constantService.restURL + "/character/" + guid).subscribe(
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
        this.snackBar.open("Fehler beim Verbinden zur Datenbank.", "Okay", {
          duration: 3000
        });
      }
    )
  }*/
}