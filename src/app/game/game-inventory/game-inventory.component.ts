import { SimpleDialog } from './../../shared/dialogs/simple-dialog/simple-dialog.component';
import { MdDialog } from '@angular/material';
import { InventoryService } from './../../shared/services/inventory.service';
import { ItemModel } from '../../shared/models/item.model';
import { CharacterService } from './../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-inventory',
  templateUrl: './game-inventory.component.html',
  styleUrls: ['./game-inventory.component.css']
})
export class GameInventoryComponent implements OnInit {


  constructor(
    public inventoryService: InventoryService,
    private characterService: CharacterService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  public onAddItem() {
    this.dialog.open(SimpleDialog, {
      data: {
        title: "Item hinzufügen",
        inputs: [
          {name: "Name", value: ""},
          {name: "Effekt", value: ""},
          {name: "Preis", value: 0, type: "number"},
        ],
        radiogroups: [
          [
            {name: "Ausrüstbar", checked: false},
            {name: "Benutzbar", checked: false}
          ]
        ],
        buttons: [
          {name: "Hinzufügen", value: false}
        ]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result === undefined) return;

        if(result.radiogroups[0].value === "Ausrüstbar") {
          result.radiogroups[0].value = true;
        }else {
          result.radiogroups[0].value = false;
        }

        this.characterService.inventory.add(
          new ItemModel(
            result.inputs[0].value,
            result.inputs[1].value,
            result.inputs[2].value, 
            result.radiogroups[0].value,
            !result.radiogroups[0].value
          )
        );        
      }
    );
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
          {name: useCase, value: false},
          {name: "Wegwerfen", value: false},
          {name: "Okay", value: false}
        ]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result === undefined) return;

        if(result.buttons[1].value) this.characterService.inventory.remove(item);

        if(result.buttons[0].value) {
          if(result.buttons[0].name === "Benutzen") {
            this.characterService.inventory.remove(item);
          }
          if(result.buttons[0].name === "Ausrüsten") {
            this.characterService.inventory.remove(item);
            this.characterService.equipment.add(item);
          }
        }
        if(result.buttons[2].value) {
          item.name = result.inputs[0].value;
          item.effect = result.inputs[1].value;
          item.price = result.inputs[2].value;
        }
      }
    )
  }

}
