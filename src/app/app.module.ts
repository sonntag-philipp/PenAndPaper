import { PlatformLocation } from '@angular/common/src/location/platform_location';
import { Location } from '@angular/common';
import { SocketIOService } from './shared/services/socketio.service';
import { BackendService } from './shared/services/backend.service';
import { CharCreatorService } from './char-creator/char-creator.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout'
import { 
  MdCardModule, 
  MdChipsModule, 
  MdInputModule, 
  MdMenuModule, 
  MdButtonModule,
  MdToolbarModule,
  MdListModule,
  MdDialogModule,
  MdSelectModule,
  MdTabsModule,
  MdTableModule,
  MdGridListModule
} from '@angular/material';

import { CookieModule, CookieService } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { CharCreatorComponent } from './char-creator/char-creator.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { BaseCardComponent } from './char-creator/cards/base-card/base-card.component';
import { EffectsCardComponent } from './char-creator/cards/effects-card/effects-card.component';
import { SkillsCardComponent } from './char-creator/cards/skills-card/skills-card.component';
import { SkillComponent } from './char-creator/cards/skills-card/skill/skill.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryCardComponent } from './char-creator/cards/summary-card/summary-card.component';

const appPaths = [
  {path: '', component: HomeComponent},
  {path: 'play', component: GameComponent},
  {path: 'create', component: CharCreatorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    CharCreatorComponent,
    ToolbarComponent,
    GameComponent,
    HomeComponent,
    BaseCardComponent,
    EffectsCardComponent,
    SkillsCardComponent,
    SkillComponent,
    LoginComponent,
    DashboardComponent,
    SummaryCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CookieModule.forRoot(),
    RouterModule.forRoot(appPaths),
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdToolbarModule,
    MdListModule,
    MdSelectModule,
    MdTabsModule,
    MdTableModule,
    MdGridListModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [CookieService, CharCreatorService, BackendService, SocketIOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
