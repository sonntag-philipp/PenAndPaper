import { CharCreatorService } from '../../char-creator.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-effects-card',
  templateUrl: './effects-card.component.html',
  styleUrls: ['./effects-card.component.css']
})
export class EffectsCardComponent {

  constructor(private charCreatorService: CharCreatorService) { }

  
  public onNextCard(): void {
    this.charCreatorService.creationIndex++;
  }

}
