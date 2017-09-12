import { CharacterService } from '../shared/services/character.service';
import { ToolbarService } from './toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public toolbarService: ToolbarService, 
    private characterService: CharacterService
  ) { }

  ngOnInit() {
  }

}
