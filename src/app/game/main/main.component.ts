import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CharacterModel } from '../../shared/models/character.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public gameService: GameService, public cookieService: CookieService) {
    this.gameService.character = <CharacterModel> cookieService.getObject("char");
  }

  ngOnInit() {
  }

}
