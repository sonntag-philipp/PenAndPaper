import { CharacterModel } from '../../shared/models/character.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input("character") character: CharacterModel;

  constructor() { }

  ngOnInit() {
  }

  public onBtnPlay() {

  }

  public onBtnDelete() {
    
  }

}
