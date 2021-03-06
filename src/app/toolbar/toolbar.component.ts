import { Router } from '@angular/router';
import { CharacterModel } from '../shared/models/character.model';
import { CharPostResponseModel } from './../shared/models/char-post-response.model';
import { AccountService } from '../shared/services/account.service';
import { ErrorService } from './../shared/services/error.service';
import { ConstantService } from './../shared/services/constants.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SimpleDialog } from '../shared/dialogs/simple-dialog/simple-dialog.component';
import { MdDialog, MdSnackBar } from '@angular/material';
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
    private characterService: CharacterService,
    private accountService: AccountService,
    private dialog: MdDialog,
    private http: HttpClient,
    private constantService: ConstantService,
    private errorService: ErrorService,
    private snackBar: MdSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onBtnLoad() {
    this.dialog.open(SimpleDialog, {
      data: {
        title: "Charakter laden",
        inputs: [
          {name: "Charakter ID", value: ""}
        ],
        buttons: [
          {name: "Okay", value: false}
        ]
      }
    }).afterClosed().subscribe(
      (result) => {
        if(result !== undefined) {

          this.http.get<CharacterModel>(this.constantService.restURL + "/character/" + result.inputs[0].value).subscribe(
            (result) => {
              this.characterService.setCharacter(result);
            }
          )
        }
      }
    );
  }
  
  public onBtnSave() {
    if(this.characterService.character.name === undefined || this.characterService.character.title === undefined) return;
    if(this.characterService.character.name.trim() === "" || this.characterService.character.title.trim() === "") return;

    this.http.post<CharPostResponseModel>(this.constantService.restURL + "/character/", JSON.stringify(this.characterService.getCharacter())).subscribe(
      (result) => {
        this.accountService.addCharacterID(result.guid);

        this.http.put(this.constantService.restURL + "/account/" + this.accountService.getAccount().username, this.accountService.getAccount()).subscribe(
          (result) => {
            this.snackBar.open("Account wurde gespeichert", "Okay", {
              duration: 2000
            });
            this.router.navigate(['dashboard']);
          },
          (error) => {
            this.errorService.showSnackbar((<HttpErrorResponse> error).status);
          }
        )
      },
      (error) => {
        this.errorService.showSnackbar((<HttpErrorResponse> error).status);
      }
    );
  }
}
