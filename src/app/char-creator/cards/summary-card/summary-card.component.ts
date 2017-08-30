import { CharCreatorService } from '../../char-creator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent {

  constructor(private charCreatorService: CharCreatorService) {
    console.log(charCreatorService.baseForm);
    console.log(charCreatorService.skillForm);
  }

}
