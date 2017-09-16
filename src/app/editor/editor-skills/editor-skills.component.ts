import { SimpleDialog } from '../../shared/dialogs/simple-dialog/simple-dialog.component';
import { SkillModel } from '../../shared/models/skill.model';
import { MdDialog } from '@angular/material';
import { CharacterService } from '../../shared/services/character.service';
import { SkillTreeService } from '../../shared/services/skill-tree.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-skills',
  templateUrl: './editor-skills.component.html',
  styleUrls: ['./editor-skills.component.css']
})
export class EditorSkillsComponent implements OnInit {

  constructor(
    public skillTreeService: SkillTreeService,
    public characterService: CharacterService,
    private dialog: MdDialog
  ) { }

  private onSkillSelected(item: any, currentIndex: number): void {
    this.dialog.open(SimpleDialog, {
      data: {
        inputs: [{name: "Chance", value: 0, type: "number"}],
        title: item.name
      }
    }).afterClosed().subscribe(
      (result) => {
        console.log(result);
        if(result !== undefined) this.characterService.skillTree.change(item, result.inputs[0].value);
      }
    );
  }

  public onBtnAddSkill() {
    this.dialog.open(SimpleDialog, {
      data: {
        inputs: [{name: "Name", value: ""}]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result !== undefined) this.characterService.skillTree.add(new SkillModel(result.inputs[0].value));
      }
    );
  }

  ngOnInit() {
  }
}