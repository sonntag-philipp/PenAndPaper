import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreatorComponent } from './character/creator/creator.component';
import { MainComponent } from './game/main/main.component';

const appRoutes: Routes = [
  { path: 'game', component: MainComponent},
  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent},
  { path: 'create', component: CreatorComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
