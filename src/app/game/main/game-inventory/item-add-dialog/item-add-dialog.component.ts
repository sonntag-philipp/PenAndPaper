import { GameService } from '../../../services/game.service';
import { ItemModel } from '../../../../shared/models/item.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-add-dialog.component.html',
  styleUrls: ['./item-add-dialog.component.css']
})
export class ItemAddDialogComponent {

  constructor(
    public gameService: GameService,
    public dialogRef: MdDialogRef<ItemAddDialogComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onBtnAdd(name: string, effect: string, price: number, equippable: boolean, usable: boolean): void {
    this.gameService.addInventory(new ItemModel(name, effect, price, equippable, usable));
    this.dialogRef.close();
  }
}
