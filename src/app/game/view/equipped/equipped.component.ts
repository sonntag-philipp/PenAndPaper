import { GameService } from '../../shared/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipped',
  templateUrl: './equipped.component.html',
  styleUrls: ['./equipped.component.css']
})
export class EquippedComponent {

  constructor(private gameService: GameService) { }

}
