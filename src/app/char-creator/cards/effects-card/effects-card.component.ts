import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effects-card',
  templateUrl: './effects-card.component.html',
  styleUrls: ['./effects-card.component.css']
})
export class EffectsCardComponent implements OnInit {

  private charExtrasItems = [];

  constructor() { }

  ngOnInit() {
  }
  
  onAddBonus(input: any){

    if(input.value !== ''){
      this.charExtrasItems.push({content: input.value, type: 'bonus'});
      input.value = '';
    }
  }

}
