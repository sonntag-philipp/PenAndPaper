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
import { CreatorSkillsComponent } from './creator/creator-skills/creator-skills.component';
import { SkillsTableComponent } from './creator/creator-skills/skills-table/skills-table.component';

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
    CreatorSkillsComponent,
    SkillsTableComponent
  ],
  providers: [CreatorService, CookieService]
})
export class CharacterModule { }
