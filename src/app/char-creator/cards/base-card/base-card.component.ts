import { CharCreatorService } from '../../char-creator.service';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent implements AfterViewInit {

  @ViewChild("baseForm") form: NgForm;

  constructor(private charCreatorService: CharCreatorService) { }

  

  ngAfterViewInit() {
    this.charCreatorService.BaseForm = this.form;
  }

}
