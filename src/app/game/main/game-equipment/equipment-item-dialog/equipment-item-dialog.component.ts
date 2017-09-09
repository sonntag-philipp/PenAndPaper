import { GameService } from '../../../services/game.service';
import { ItemModel } from '../../../../shared/models/item.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-equipment-item-dialog',
  templateUrl: './equipment-item-dialog.component.html',
  styleUrls: ['./equipment-item-dialog.component.css']
})
export class EquipmentItemDialog {

  constructor(
    public gameService: GameService,
    public dialogRef: MdDialogRef<EquipmentItemDialog>, 
    @Inject(MD_DIALOG_DATA) public data: ItemModel
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onBtnUnequip(): void {
    this.gameService.removeEquipment(this.data);
    this.gameService.addInventory(this.data);
    this.dialogRef.close();
  }

  onBtnThrow(): void {
    this.gameService.removeEquipment(this.data);
    this.dialogRef.close();
  }

  onBtnSell(): void {
    this.gameService.removeEquipment(this.data);
    this.dialogRef.close();
  }

}
