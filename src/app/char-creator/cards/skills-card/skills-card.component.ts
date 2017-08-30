import { CharCreatorService } from '../../char-creator.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent {

  constructor(private charCreatorService: CharCreatorService) { }
  
  public onNextCard(form: NgForm): void {
    this.charCreatorService.skillForm = form;
    this.charCreatorService.creationIndex++;
  }

}
