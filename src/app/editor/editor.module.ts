import { EditorSkillsComponent } from './editor-skills/editor-skills.component';
import { EditorExtrasComponent } from './editor-extras/editor-extras.component';
import { EditorEffectsComponent } from './editor-effects/editor-effects.component';
import { EditorBaseComponent } from './editor-base/editor-base.component';
import { EditorComponent } from './editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdProgressBarModule,
  MdTableModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
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
    EditorComponent,
    EditorBaseComponent,
    EditorEffectsComponent,
    EditorExtrasComponent,
    EditorSkillsComponent
  ],
  bootstrap: [
    EditorComponent
  ]
})
export class EditorModule { }
