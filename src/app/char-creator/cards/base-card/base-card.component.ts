import { CharCreatorService } from '../../char-creator.service';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent {

  private form: NgForm;

  constructor(private charCreatorService: CharCreatorService) { }

  public onNextCard(form: NgForm): void {
    this.form = form;
    this.addCharacteristics();

    this.charCreatorService.creationIndex++;
  }

  private addCharacteristics(): void {

    // TODO: Make this better :/
    this.charCreatorService.character.Age = this.form.value.age;
    this.charCreatorService.character.Height = this.form.value.height;
    this.charCreatorService.character.Name = this.form.value.name;
    this.charCreatorService.character.Religion = this.form.value.religion;
    this.charCreatorService.character.Profession = this.form.value.profession;
    this.charCreatorService.character.Nation = this.form.value.nation;
  }

}
