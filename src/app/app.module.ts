import { SimpleInputDialog } from './shared/dialogs/simple-input-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { GameModule } from './game/game.module';
import { CharacterModule } from './character/character.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestService } from './shared/services/rest.service';
import { SocketService } from './shared/services/socket.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { 
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule
} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    NewComponent,
    SimpleInputDialog
  ],
  imports: [
    CharacterModule,
    GameModule,
    AppRoutingModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    SimpleInputDialog
  ],
  providers: [RestService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
