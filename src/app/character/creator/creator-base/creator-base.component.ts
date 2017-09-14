import { CharacterService } from '../../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-base',
  templateUrl: './creator-base.component.html',
  styleUrls: ['./creator-base.component.css']
})
export class CreatorBaseComponent {

  constructor(
    public characterService: CharacterService
  ) { }

}
