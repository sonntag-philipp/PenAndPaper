import { Observable } from 'rxjs/Rx';
import { ToolbarService } from './../toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.title = "Pen and Paper";
  }

}
