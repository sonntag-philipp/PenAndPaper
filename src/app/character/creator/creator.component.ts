import { HttpClient } from '@angular/common/http';
import { CharacterService } from './../../shared/services/character.service';
import { ToolbarService } from './../../toolbar/toolbar.service';
import { CreatorService } from './../services/creator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor(
    public toolbarService: ToolbarService,
    public characterService: CharacterService
  ) { }
 
  ngOnInit() {
    this.toolbarService.title = "Charakter Editor";
    this.toolbarService.saveBtn = true;
    this.toolbarService.loadBtn = true;

    this.characterService.getCharacter("default");
  }
}
