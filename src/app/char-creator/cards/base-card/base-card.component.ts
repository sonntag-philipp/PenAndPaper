import { CharCreatorService } from '../../char-creator.service';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent {

  constructor(private charCreatorService: CharCreatorService) { }

  public onNextCard(form: NgForm): void {
    this.charCreatorService.creationIndex++;
  }

}
