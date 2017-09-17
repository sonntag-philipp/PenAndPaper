import { ErrorService } from '../shared/services/error.service';
import { CharacterModel } from './../shared/models/character.model';
import { ConstantService } from './../shared/services/constants.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    private toolbarService: ToolbarService,
    private characterService: CharacterService,
    private http: HttpClient,
    private constantService: ConstantService,
    private errorService: ErrorService
  ) { }
 
  ngOnInit() {
    this.toolbarService.title = "Pen and Paper - Editor";
    this.toolbarService.saveBtn = true;
    this.toolbarService.loadBtn = true;

    this.http.get<CharacterModel>(this.constantService.restURL + "/character/default/").subscribe(
      (result) => {
        console.log(result);
        this.characterService.setCharacter(result);
      },
      (error) => {
        this.errorService.showSnackbar((<HttpErrorResponse> error).status);
      }
    )
  }

  ngOnDestroy() {
    this.toolbarService.saveBtn = false;
    this.toolbarService.loadBtn = false;
  }
}
