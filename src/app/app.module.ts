import { ErrorService } from './shared/services/error.service';
import { ConstantService } from './shared/services/constants.service';
import { SimpleDialog } from './shared/dialogs/simple-dialog/simple-dialog.component';
import { AccountService } from './shared/services/account.service';
import { CookieModule } from 'ngx-cookie';
import { EffectService } from './shared/services/effects.service';
import { SkillTreeService } from './shared/services/skill-tree.service';
import { CharacterService } from './shared/services/character.service';
import { ToolbarService } from './toolbar/toolbar.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { GameModule } from './game/game.module';
import { EditorModule } from './editor/editor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { 
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdSnackBarModule,
  MdProgressBarModule
} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './home/login/login.component';
import { CharacterCardComponent } from './dashboard/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SimpleDialog,
    DashboardComponent,
    ErrorPageComponent,
    LoginComponent,
    CharacterCardComponent
  ],
  imports: [
    EditorModule,
    GameModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot(),
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdProgressBarModule
  ],
  entryComponents: [
    SimpleDialog
  ],
  providers: [
    ToolbarService, 
    CharacterService, 
    SkillTreeService, 
    EffectService, 
    AccountService,
    ConstantService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
