import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreatorComponent } from './creator/creator.component';
import { CreatorService } from './services/creator.service';
import { CreatorBaseComponent } from './creator/creator-base/creator-base.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { 
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdProgressBarModule,
  MdTableModule,
  MdTabsModule
} from '@angular/material';
import { CreatorEffectsComponent } from './creator/creator-effects/creator-effects.component';
import { CreatorExtrasComponent } from './creator/creator-extras/creator-extras.component';
import { EffectsTableComponent } from './creator/creator-effects/effects-table/effects-table.component';
import { CreatorSkillsComponent } from './creator/creator-skills/creator-skills.component';

@NgModule({
  imports: [
    CookieModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdProgressBarModule,
    MdTableModule,
    MdTabsModule
  ],
  declarations: [
    CreatorComponent,
    CreatorBaseComponent,
    CreatorEffectsComponent,
    CreatorExtrasComponent,
    EffectsTableComponent,
    CreatorSkillsComponent
  ],
  providers: [CreatorService, CookieService]
})
export class CharacterModule { }
