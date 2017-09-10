import { RestService } from './../../shared/services/rest.service';
import { CreatorService } from './../services/creator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor(public creatorService: CreatorService, public restService: RestService) { }

  ngOnInit() {
  }

  public onBtnSave(): void {
    this.restService.putCharacter(JSON.stringify(this.creatorService.character)).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
