import { CharacterService } from '../shared/services/character.service';
import { ToolbarService } from './../toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService,
    public characterService: CharacterService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Pen and Paper";
  }

}
