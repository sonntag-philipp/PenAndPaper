import { CharCreatorService } from './char-creator/char-creator.service';
import { LoginService } from './login/login.service';
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
  MdTableModule
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
    DashboardComponent
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
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [LoginService, CookieService, CharCreatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
