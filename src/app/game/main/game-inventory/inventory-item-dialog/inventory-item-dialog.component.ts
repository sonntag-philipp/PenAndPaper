import { GameService } from '../../../services/game.service';
import { ItemModel } from '../../../../shared/models/item.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-inventory-item-dialog',
  templateUrl: './inventory-item-dialog.component.html',
  styleUrls: ['./inventory-item-dialog.component.css']
})
export class InventoryItemDialog {

  constructor(
    public gameService: GameService,
    public dialogRef: MdDialogRef<InventoryItemDialog>, 
    @Inject(MD_DIALOG_DATA) public data: ItemModel
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onBtnEquip(): void {
    this.gameService.addEquipment(this.data);
    this.gameService.removeInventory(this.data);
    this.dialogRef.close();
  }
  
  onBtnUse(): void {
    this.gameService.removeInventory(this.data);
    this.dialogRef.close();
  }

  onBtnThrow(): void {
    this.gameService.removeInventory(this.data);
    this.dialogRef.close();
  }

  onBtnSell(): void {
    this.gameService.removeInventory(this.data);
    this.dialogRef.close();
  }

}
