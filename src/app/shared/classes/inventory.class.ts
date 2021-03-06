import { ItemModel } from './../models/item.model';
import { BehaviorSubject } from 'rxjs/Rx';

export class Inventory {
  
  public items: ItemModel[];
  public subject: BehaviorSubject<ItemModel[]> = new BehaviorSubject<ItemModel[]>(this.items);

  constructor(items: ItemModel[]) {
    this.items = items;
  }

  public add(item: ItemModel): void {
    this.items.push(item);
    this.subject.next(this.items.slice());
  }

  public remove(item: ItemModel): void {
    this.items.splice(this.items.indexOf(item), 1);
    this.subject.next(this.items.slice());
  }

  public set(items: ItemModel[]): void {
    this.items = items;
    this.subject.next(this.items.slice());
  }
  
  public updateSubject(): void {
    this.subject.next(this.items.slice());
  }
}