import { EffectService } from '../../shared/services/effects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-effects',
  templateUrl: './game-effects.component.html',
  styleUrls: ['./game-effects.component.css']
})
export class GameEffectsComponent implements OnInit {

  constructor(
    public effectService: EffectService
  ) { }

  ngOnInit() {
  }

}
