import { SkillTreeService } from '../../shared/services/skill-tree.service';
import { CharacterService } from '../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-skills',
  templateUrl: './game-skills.component.html',
  styleUrls: ['./game-skills.component.css']
})
export class GameSkillsComponent implements OnInit {

  constructor(
    public characterService: CharacterService,
    public skillTreeService: SkillTreeService
  ) { }

  ngOnInit() {
  }

}
