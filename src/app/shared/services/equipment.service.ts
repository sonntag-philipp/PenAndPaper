import { ItemModel } from '../models/item.model';
import { Injectable } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { CharacterService } from './character.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EquipmentService extends DataSource<any> {

  public columns = ['name', 'effect', 'price'];

  constructor(public characterService: CharacterService) {
    super();
  }

  public connect(collectionViewer: CollectionViewer): Observable<ItemModel[]> {
    return this.characterService.equipment.subject.asObservable();
  }

  public disconnect() {}
}