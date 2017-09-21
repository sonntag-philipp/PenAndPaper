import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../shared/services/error.service';
import { SimpleDialog } from './../../shared/dialogs/simple-dialog/simple-dialog.component';
import { MdDialog } from '@angular/material';
import { CharacterService } from '../../shared/services/character.service';
import { ItemModel } from '../../shared/models/item.model';
import { EquipmentService } from './../../shared/services/equipment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-equipment',
  templateUrl: './game-equipment.component.html',
  styleUrls: ['./game-equipment.component.css']
})
export class GameEquipmentComponent implements OnInit {

  constructor(
    public equipmentService: EquipmentService,
    private characterService: CharacterService,
    private dialog: MdDialog,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
  }
  
  public onSelectItem(item: ItemModel) {
    
        let useCase;
    
        // There is no short if here )=
        if(item.usable) {
          useCase = "Benutzen";
        }
        if(item.equippable) {
          useCase = "Ausrüsten";
        }
    
    
        this.dialog.open(SimpleDialog, {
          data: {
            title: item.name,
            inputs: [
              {name: "Name", value: ""},
              {name: "Effekt", value: ""},
              {name: "Preis", value: 0, type: "number"},
            ],
            buttons: [
              {name: "Ablegen", value: false},
              {name: "Wegwerfen", value: false},
              {name: "Okay", value: false}
            ]
          }
        }).afterClosed().subscribe(
          (result) => {
            if(result === undefined) return;
            
            if(result.buttons[1].value) this.characterService.inventory.remove(item);
            
            if(result.buttons[0].value) {
              this.characterService.equipment.remove(item);
              this.characterService.inventory.add(item);
            }
            if(result.buttons[2].value) {
              item.name = result.inputs[0].value;
              item.effect = result.inputs[1].value;
              item.price = result.inputs[2].value;
            }
          },
          (error) => {
            this.errorService.showSnackbar((<HttpErrorResponse> error).status);
          }
        )
  }

}
