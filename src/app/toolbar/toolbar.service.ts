import { EventEmitter } from 'events';
import { Injectable, Output } from '@angular/core';

@Injectable()
export class ToolbarService {

  constructor() { }

  public title: string;
  public saveBtn: boolean;
  public loadBtn: boolean;
}