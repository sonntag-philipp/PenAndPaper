import { ToolbarService } from './../toolbar/toolbar.service';
import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  public message: string;

  constructor(
    private route: ActivatedRoute,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    );
    this.toolbarService.title = "Pen and Paper - Home";
  }

}
