import { GameService } from '../../shared/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}
