import { SimpleInputDialog } from './../../../shared/dialogs/simple-input-dialog.component';
import { RestService } from './../../../shared/services/rest.service';
import { Component } from '@angular/core';
import { CreatorService } from '../../services/creator.service';
import { SkillModel } from '../../../shared/models/skill.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-creator-skills',
  templateUrl: './creator-skills.component.html',
  styleUrls: ['./creator-skills.component.css']
})
export class CreatorSkillsComponent {

  public displayedColumns = ['name', 'chance'];
  public lastSkillIndex: number = 0;

  constructor(public creatorService: CreatorService, public dialog: MdDialog, public restService: RestService) {
    this.restService.getAvailableSkills("default").subscribe(
      (result) => {
        this.creatorService.changeCurrentSkills(result[0].skills);
      },
      (error) => {
        console.log("Error while requesting skills");
      }
    )
  }

  public onChangeTabs(value: number) {

    this.creatorService.changeCurrentSkills(this.creatorService.character.skills[value].skills);
  }

  public onBtnAddSkill(): void {
    this.dialog.open(SimpleInputDialog, {
      data: {inputs: [{name: "Name", value: ""}, {name: "Chance", value: 0, type: "number"}]}
    })
    .afterClosed().subscribe(result => {
      if(result === undefined) return;
      if(result.inputs[0].value !== ""){
        let skillModel = new SkillModel(result.inputs[0].value, result.inputs[1].value);
        this.creatorService.addSkill(skillModel);
        this.creatorService.skillPointsAvailable -= skillModel.chance;
      }
    });
  }
}
