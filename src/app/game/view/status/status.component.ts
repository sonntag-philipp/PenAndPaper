import { StatusModel } from '../../../shared/models/status.model';
import { GameService } from '../../shared/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  private getPercentage(item: StatusModel): number{
    return (item.value / item.maxValue * 100);
  }

  constructor(private gameService: GameService) { }

}
