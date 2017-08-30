import { CharCreatorService } from './char-creator.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-creator',
  templateUrl: './char-creator.component.html',
  styleUrls: ['./char-creator.component.css']
})
export class CharCreatorComponent implements OnInit {

  private creationIndex: number = 2;
  
  constructor(private charCreatorService: CharCreatorService) { }

  ngOnInit() {
  }

}