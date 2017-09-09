import { GameService } from './services/game.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { GameHeadComponent } from './main/game-head/game-head.component';
import { GameInventoryComponent } from './main/game-inventory/game-inventory.component';
import { GameSkillsComponent } from './main/game-skills/game-skills.component';
import { GameEquipmentComponent } from './main/game-equipment/game-equipment.component';
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
import { InventoryItemDialog } from './main/game-inventory/inventory-item-dialog/inventory-item-dialog.component';
import { ItemAddDialogComponent } from './main/game-inventory/item-add-dialog/item-add-dialog.component';
import { EquipmentItemDialog } from './main/game-equipment/equipment-item-dialog/equipment-item-dialog.component';

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
    MainComponent,
    GameHeadComponent,
    GameInventoryComponent,
    GameSkillsComponent,
    GameEquipmentComponent,
    InventoryItemDialog,
    ItemAddDialogComponent,
    EquipmentItemDialog
  ],
  entryComponents: [
    InventoryItemDialog,
    ItemAddDialogComponent,
    EquipmentItemDialog
  ],
  providers: [
    GameService
  ],
  bootstrap: [MainComponent]
})
export class GameModule { }
