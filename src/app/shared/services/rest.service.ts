import { Observable } from 'rxjs/Rx';
import { SkillModel } from './../models/skill.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  constructor(public http: HttpClient) {
    
  }

  public getAvailableSkills(skillTree: string): Observable<Object> {
    return this.http.get("http://api.pnp.delaiyoid.de:8080/get/skills/" + skillTree + "/");
  }

  public putCharacter(character: string): Observable<Object> {

    return this.http.post("http://api.pnp.delaiyoid.de:8080/put/character/", character);
  }
}