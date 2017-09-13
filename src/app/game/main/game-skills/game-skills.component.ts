import { GameService } from '../../services/game.service';
import { SkillModel } from '../../../shared/models/skill.model';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-game-skills',
  templateUrl: './game-skills.component.html',
  styleUrls: ['./game-skills.component.css']
})
export class GameSkillsComponent {

  public displayedColumns = ['name', 'chance'];
  public dataSource: SkillDataSource;
  public gameService: GameService;

  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

}

export class SkillDataSource extends DataSource<any> {

  constructor(public skillData: SkillModel[]){
    super();
  }

  public connect(): Observable<SkillModel[]> {
    return Observable.of(this.skillData);
  }

  public disconnect() {}
}