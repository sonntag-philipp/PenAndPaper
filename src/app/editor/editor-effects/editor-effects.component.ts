import { EffectModel } from '../../shared/models/effect.model';
import { CharacterService } from '../../shared/services/character.service';
import { SimpleDialog } from '../../shared/dialogs/simple-dialog/simple-dialog.component';
import { MdDialog } from '@angular/material';
import { EffectService } from '../../shared/services/effects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-effects',
  templateUrl: './editor-effects.component.html',
  styleUrls: ['./editor-effects.component.css']
})
export class EditorEffectsComponent implements OnInit {

  constructor(
    public effectService: EffectService,
    private characterService: CharacterService,
    private dialog: MdDialog
  ) { }

  public onBtnAddEffect() {
    this.dialog.open(SimpleDialog, {
      data: {
      inputs: [
        {name: "Name", value: ""}, 
        {name: "Beschreibung", value: ""},
        {name: "Stärke", value: 0, type: "number"}
      ],
      buttons: [
        {name: "Hinzufügen", value: false}
      ]
    }
    }).afterClosed().subscribe(
      (result) => {
        if(result !== undefined && result.buttons[0].value) this.characterService.effects.add(new EffectModel(result.inputs[0].value, result.inputs[1].value, result.inputs[2].value,));
      }
    )
  }

  public onEffectSelected(item: any) {
    this.dialog.open(SimpleDialog, {
      data: {
        title: item.name,
        inputs: [
          {name: "Name", value: ""},
          {name: "Stärke", value: item.strength, type: "number"},
          {name: "Beschreibung", value: item.description}
        ],
        buttons: [
          {name: "Löschen", value: false}
        ]
      } 
    }).afterClosed().subscribe(
      (result) => {
        if(result !== undefined) {
          if(result.buttons[0].value) {
            this.characterService.effects.remove(item);
          }
          else {
            this.characterService.effects.change(item, new EffectModel(result.inputs[0].value, result.inputs[2].value, result.inputs[1].value));
          }
        }
      }
    )
  }

  ngOnInit() {
  }

}
