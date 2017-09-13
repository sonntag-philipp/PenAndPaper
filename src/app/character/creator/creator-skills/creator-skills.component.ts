import { SimpleInputDialog } from '../../../shared/dialogs/simple-input-dialog.component';
import { MdDialog } from '@angular/material';
import { CharacterService } from './../../../shared/services/character.service';
import { SkillTreeService } from './../../../shared/services/skill-tree.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-skills',
  templateUrl: './creator-skills.component.html',
  styleUrls: ['./creator-skills.component.css']
})
export class CreatorSkillsComponent implements OnInit {

  constructor(
    public skillTreeService: SkillTreeService,
    public characterService: CharacterService,
    private dialog: MdDialog
  ) { }

  private onSkillSelected(item: any, currentIndex: number): void {
    this.dialog.open(SimpleInputDialog, {
      data: {
        inputs: [{name: "Chance", value: 0, type: "number"}]
      }
    }).afterClosed().subscribe(
      (result) => {
        this.characterService.skillTree.change(item, result.inputs[0].value);
      }
    )
  }

  ngOnInit() {
  }
}