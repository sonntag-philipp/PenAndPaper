import { EffectModel } from './../../../shared/models/effect.model';
import { CharacterService } from './../../../shared/services/character.service';
import { SimpleInputDialog } from '../../../shared/dialogs/simple-input-dialog/simple-input-dialog.component';
import { MdDialog } from '@angular/material';
import { EffectService } from './../../../shared/services/effects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-effects',
  templateUrl: './creator-effects.component.html',
  styleUrls: ['./creator-effects.component.css']
})
export class CreatorEffectsComponent implements OnInit {

  constructor(
    public effectService: EffectService,
    private characterService: CharacterService,
    private dialog: MdDialog
  ) { }

  public onBtnAddEffect() {
    this.dialog.open(SimpleInputDialog, {
      data: {inputs: [
        {name: "Name", value: ""}, 
        {name: "Beschreibung", value: ""},
        {name: "Stärke", value: 0, type: "number"}
      ]}
    }).afterClosed().subscribe(
      (result) => {
        if(result !== undefined) this.characterService.effects.add(new EffectModel(result.inputs[0].value, result.inputs[1].value, result.inputs[2].value,));
      }
    )
  }

  public onEffectSelected(item: any) {
    this.dialog.open(SimpleInputDialog, {
      data: {
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
            this.characterService.effects.change(item, new EffectModel(result.inputs[0].value, result.inputs[1].value, result.inputs[2].value));
          }
        }
      }
    )
  }

  ngOnInit() {
  }

}
