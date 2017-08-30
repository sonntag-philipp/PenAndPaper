import { StatusModel } from '../../../shared/models/status.model';
import { ViewChild } from '@angular/core/src/metadata/di';
import { EffectModel } from '../../../shared/models/effect.model';
import { CharCreatorService } from '../../char-creator.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-effects-card',
  templateUrl: './effects-card.component.html',
  styleUrls: ['./effects-card.component.css']
})
export class EffectsCardComponent {

  private selectedStatus: string;
  private name: string;
  private strength: number;

  constructor(private charCreatorService: CharCreatorService) { 

  }
  
  public onNextCard(): void {
    console.log(this.charCreatorService);

    this.charCreatorService.creationIndex++;
  }

  private onAddEffect(): void {
    this.charCreatorService.character.Effects.push(new EffectModel(this.name, "Not available", this.strength, this.selectedStatus));

    this.selectedStatus = "";
    this.name = "";
    this.strength = 0;
  }
}
