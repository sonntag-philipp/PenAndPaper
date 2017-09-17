import { HttpClient } from '@angular/common/http';
import { CharacterService } from './../shared/services/character.service';
import { ToolbarService } from './../toolbar/toolbar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  constructor(
    public toolbarService: ToolbarService,
    public characterService: CharacterService
  ) { }
 
  ngOnInit() {
    this.toolbarService.title = "Pen and Paper - Editor";
    this.toolbarService.saveBtn = true;
    this.toolbarService.loadBtn = true;

    this.characterService.getCharacter("default");
  }

  ngOnDestroy() {
    this.toolbarService.saveBtn = false;
    this.toolbarService.loadBtn = false;
  }
}
