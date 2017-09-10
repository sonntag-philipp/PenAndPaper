import { Observable } from 'rxjs/Rx';
import { SkillModel } from './../models/skill.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  constructor(public http: HttpClient) {
    
  }

  public getAvailableSkills(skillTree: string): Observable<Object> {
    return this.http.get("http://localhost:8080/skills/" + skillTree + "/");
  }
}