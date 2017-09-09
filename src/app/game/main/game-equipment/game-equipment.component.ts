import { EquipmentItemDialog } from './equipment-item-dialog/equipment-item-dialog.component';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
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
  selector: 'app-game-equipment',
  templateUrl: './game-equipment.component.html',
  styleUrls: ['./game-equipment.component.css']
})
export class GameEquipmentComponent {

  public displayedColumns = ['name', 'effect', 'price'];
  public dataSource: ItemDataSource;
  public gameService: GameService;

  constructor(gameService: GameService, public dialog: MdDialog) { 
    this.gameService = gameService;
    this.dataSource = new ItemDataSource(gameService.character.equipped, this.gameService);
  }

  public onSelectItem(item: ItemModel): void{
    let dialogRef = this.dialog.open(EquipmentItemDialog, {
      data: item
    });
  }
}

export class ItemDataSource extends DataSource<ItemModel> {
    private dataChange: BehaviorSubject<ItemModel[]> = new BehaviorSubject<ItemModel[]>(this.itemData);

    public addItem(item: ItemModel): void {
      const copiedData = this.itemData.slice();
      copiedData.push(item);
      this.itemData = copiedData;
      this.dataChange.next(this.itemData);
    }

    public updateData(): void {
      const copiedData = this.itemData.slice();
      this.itemData = copiedData;
      this.dataChange.next(this.itemData);
    }

    constructor(private itemData: ItemModel[], private gameService: GameService){
      super();
    }
  
    public connect(): Observable<ItemModel[]> {
      return this.gameService.equipmentSubject.asObservable();
    }
  
    public disconnect() {}
}
