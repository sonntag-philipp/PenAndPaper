import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../../services/creator.service';

@Component({
  selector: 'app-creator-base',
  templateUrl: './creator-base.component.html',
  styleUrls: ['./creator-base.component.css']
})
export class CreatorBaseComponent implements OnInit {

  constructor(public characterService: CreatorService) { }

  ngOnInit() {
  }

}
