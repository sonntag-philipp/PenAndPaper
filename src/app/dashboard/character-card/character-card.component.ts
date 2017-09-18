import { CharacterService } from '../../shared/services/character.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './../../shared/services/error.service';
import { SimpleDialog } from './../../shared/dialogs/simple-dialog/simple-dialog.component';
import { MdDialog } from '@angular/material';
import { AccountService } from '../../shared/services/account.service';
import { CharacterModel } from '../../shared/models/character.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input("character") character: CharacterModel;

  constructor(
    private characterService: CharacterService,
    private accountService: AccountService,
    private dialog: MdDialog,
    private errorService: ErrorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onBtnPlay() {
    this.characterService.setCharacter(this.character);
    this.router.navigate(['game']);
  }

  public onBtnDelete() {
    this.dialog.open(SimpleDialog, {
      data: {
        title: this.character.name + " wirklich löschen?",
        buttons: [
          {name: "Ja", value: false},
          {name: "Nein", value: false}
        ]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result.buttons[0].value) {
          this.accountService.removeCharacter(this.character.uid);
        }
      },
      (error) => {
        this.errorService.showSnackbar((<HttpErrorResponse> error).status);
      }
    )
  }

}
