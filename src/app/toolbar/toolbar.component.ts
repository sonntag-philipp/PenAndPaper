import { SimpleInputDialog } from './../shared/dialogs/simple-input-dialog/simple-input-dialog.component';
import { MdDialog } from '@angular/material';
import { CharacterService } from '../shared/services/character.service';
import { ToolbarService } from './toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public toolbarService: ToolbarService, 
    private characterService: CharacterService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  public onBtnLoad() {
    this.dialog.open(SimpleInputDialog, {
      data: {inputs: [{name: "Charakter UID", value: ""}], title: "Charakter Laden"}
    }).afterClosed().subscribe(
      (result) => {
        if(result !== undefined) {
           this.characterService.getCharacter(result.inputs[0].value);
        }
      }
    );
  }
  
  public onBtnSave() {
    this.characterService.postCharacter();
  }
}
