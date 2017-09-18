import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../shared/services/error.service';
import { SimpleDialog } from '../../shared/dialogs/simple-dialog/simple-dialog.component';
import { MdDialog } from '@angular/material';
import { CharacterService } from './../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-head',
  templateUrl: './game-head.component.html',
  styleUrls: ['./game-head.component.css']
})
export class GameHeadComponent implements OnInit {

  constructor(
    public characterService: CharacterService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
  }
  // TODO: Stop the mass of ifs ;_;

  public onBtnRemoveLife() {
    this.dialog.open(SimpleDialog, {
      data: {
        title: "Leben entfernen",
        inputs: [
          {name: "Lebenspunkte", value: 0, type: "number"}
        ],
        buttons: [
          {name: "Okay", value: false}
        ]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result.buttons[0].value && result.inputs[0].value > 0) {
          if(result.inputs[0].value > this.characterService.character.life){
            this.characterService.character.life = 0;
          } else {
            this.characterService.character.life -= result.inputs[0].value;
          }
        }
      }
    );
  }

  public onBtnAddLife() {
    this.dialog.open(SimpleDialog, {
      data: {
        title: "Leben hinzufügen",
        inputs: [
          {name: "Lebenspunkte", value: 0, type: "number"}
        ],
        buttons: [
          {name: "Okay", value: false}
        ]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result.buttons[0].value && result.inputs[0].value > 0) {

          if((+result.inputs[0].value + this.characterService.character.life) > this.characterService.character.maxLife){
            this.characterService.character.life = this.characterService.character.maxLife;
          } else {
            this.characterService.character.life += +result.inputs[0].value;
          }

        }
      }
    );
  }

  public onBtnRemoveMana() {
    this.dialog.open(SimpleDialog, {
      data: {
        title: "Mana entfernen",
        inputs: [
          {name: "Lebenspunkte", value: 0, type: "number"}
        ],
        buttons: [
          {name: "Okay", value: false}
        ]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result.buttons[0].value && result.inputs[0].value > 0) {
          if(result.inputs[0].value > this.characterService.character.mana){
            this.characterService.character.mana = 0;
          } else {
            this.characterService.character.mana -= result.inputs[0].value;
          }
        }
      }
    );
  }

  public onBtnAddMana() {
    this.dialog.open(SimpleDialog, {
      data: {
        title: "Mana hinzufügen",
        inputs: [
          {name: "Manapunkte", value: 0, type: "number"}
        ],
        buttons: [
          {name: "Okay", value: false}
        ]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result.buttons[0].value && result.inputs[0].value > 0) {

          if((+result.inputs[0].value + this.characterService.character.mana) > this.characterService.character.maxMana){
            this.characterService.character.mana = this.characterService.character.maxMana;
          } else {
            this.characterService.character.mana += +result.inputs[0].value;
          }

        }
      }
    );
  }

}
