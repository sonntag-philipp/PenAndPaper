import { InventoryItemDialog } from './inventory-item-dialog/inventory-item-dialog.component';
import { ItemAddDialogComponent } from './item-add-dialog/item-add-dialog.component';
import { BehaviorSubject } from 'rxjs/Rx';
import { ItemModel } from '../../../shared/models/item.model';
import { GameService } from '../../services/game.service';
import { SkillModel } from '../../../shared/models/skill.model';
import { Observable } from 'rxjs/Observable';
import { NextObserver, Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-game-inventory',
  templateUrl: './game-inventory.component.html',
  styleUrls: ['./game-inventory.component.css']
})
export class GameInventoryComponent {

  public displayedColumns = ['name', 'effect', 'price'];
  public dataSource: ItemDataSource;
  public gameService: GameService;


  constructor(gameService: GameService, public dialog: MdDialog) { 
    this.gameService = gameService;
    this.dataSource = new ItemDataSource(gameService.character.inventory, this.gameService);
  }

  public onBtnItemAdd(): void {
    let dialogRef = this.dialog.open(ItemAddDialogComponent);
  }

  public onSelectItem(item: ItemModel): void {
    let dialogRef = this.dialog.open(InventoryItemDialog, {
      data: item
    });
  }

}

class ItemDataSource extends DataSource<ItemModel> {

    constructor(private itemData: ItemModel[], private gameService: GameService){
      super();
    }
  
    public connect(): Observable<ItemModel[]> {
      return this.gameService.inventorySubject.asObservable();
    }
  
    public disconnect() {}
}