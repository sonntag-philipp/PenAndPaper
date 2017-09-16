import { CharacterService } from '../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-base',
  templateUrl: './editor-base.component.html',
  styleUrls: ['./editor-base.component.css']
})
export class EditorBaseComponent {

  constructor(
    public characterService: CharacterService
  ) { }

}
