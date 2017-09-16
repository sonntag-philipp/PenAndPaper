import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  MdCardModule,
  MdTableModule,
  MdProgressBarModule,
  MdButtonModule,
  MdTabsModule,
  MdDialogModule,
  MdDialog,
  MdInputModule,
  MdCheckboxModule
} from '@angular/material';
import { GameComponent } from './game.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdCardModule,
    MdTableModule,
    MdProgressBarModule,
    MdButtonModule,
    MdTabsModule,
    MdDialogModule,
    MdInputModule,
    MdCheckboxModule
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule { }
