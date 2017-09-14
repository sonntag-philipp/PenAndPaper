import { AccountResolver } from './dashboard/account-resolver.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreatorComponent } from './character/creator/creator.component';
import { MainComponent } from './game/main/main.component';

const appRoutes: Routes = [
  { path: 'game', component: MainComponent},
  { 
    path: '', 
    component: DashboardComponent,

    children: [
      {path: ":accountID", component: DashboardComponent, resolve: {account: AccountResolver}}
    ]
  },
  { path: 'new', component: NewComponent},
  { path: 'edit', component: CreatorComponent}
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
