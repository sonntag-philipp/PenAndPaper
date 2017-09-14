import { CookieService } from 'ngx-cookie';
import { CharacterService } from './../shared/services/character.service';
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
    public toolbarService: ToolbarService,
    public characterService: CharacterService,
    public cookieService: CookieService
  ) { }

  ngOnInit() {
    this.toolbarService.saveBtn = false;
    this.toolbarService.loadBtn = false;
    this.toolbarService.title = "Pen and Paper";
  }

}
