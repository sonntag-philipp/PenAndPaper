import { GameService } from '../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-head',
  templateUrl: './game-head.component.html',
  styleUrls: ['./game-head.component.css']
})
export class GameHeadComponent {

  constructor(public gameService: GameService) { }

}
