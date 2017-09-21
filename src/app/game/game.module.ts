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
import { GameHeadComponent } from './game-head/game-head.component';
import { GameSkillsComponent } from './game-skills/game-skills.component';
import { GameEffectsComponent } from './game-effects/game-effects.component';
import { GameInventoryComponent } from './game-inventory/game-inventory.component';
import { GameEquipmentComponent } from './game-equipment/game-equipment.component';

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
    GameComponent,
    GameHeadComponent,
    GameSkillsComponent,
    GameEffectsComponent,
    GameInventoryComponent,
    GameEquipmentComponent
  ]
})
export class GameModule { }
