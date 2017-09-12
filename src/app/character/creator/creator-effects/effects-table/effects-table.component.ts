import { CharacterService } from './../../../../shared/services/character.service';
import { CreatorService } from '../../../services/creator.service';
import { Observable } from 'rxjs/Observable';
import { EffectModel } from './../../../../shared/models/effect.model';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effects-table',
  templateUrl: './effects-table.component.html',
  styleUrls: ['./effects-table.component.css']
})
export class EffectsTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
