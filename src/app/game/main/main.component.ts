import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { CharacterModel } from '../../shared/models/character.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public gameService: GameService) {
    // this.gameService.character = <CharacterModel> cookieService.getObject("char");
  }

  ngOnInit() {
  }

}
