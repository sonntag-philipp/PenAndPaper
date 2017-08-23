import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-creator',
  templateUrl: './char-creator.component.html',
  styleUrls: ['./char-creator.component.css']
})
export class CharCreatorComponent implements OnInit {

  charExtrasItems = [];
  
  constructor() { }

  onAddBonus(input: any){

    if(input.value !== ''){
      this.charExtrasItems.push({content: input.value, type: 'bonus'});
      input.value = '';
    }
  }

  onRemoveBonus(){
    this.charExtrasItems.pop();
  }

  ngOnInit() {
  }

}