import { GameService } from './shared/game.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ViewComponent } from './view/view.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { StatusComponent } from './view/status/status.component';
import { InventoryComponent } from './view/inventory/inventory.component';
import { EquippedComponent } from './view/equipped/equipped.component';
import { SkillsComponent } from './view/skills/skills.component';
import { HeadComponent } from './view/head/head.component';

import { 
  MdCardModule,
  MdProgressBarModule,
  MdListModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdCardModule,
    MdProgressBarModule,
    MdListModule
  ],
  declarations: [
    ViewComponent,
    StatusComponent,
    InventoryComponent,
    EquippedComponent,
    SkillsComponent,
    HeadComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }
