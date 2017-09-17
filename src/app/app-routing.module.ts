import { ErrorPageComponent } from './error-page/error-page.component';
import { GameComponent } from './game/game.component';
import { EditorComponent } from './editor/editor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Routing Document: https://docs.google.com/document/d/1wf5LhtevvF4cyFC1SqmbPp7WwfrsMnfdKD6cYlHU7XY/edit?usp=sharing

/**
 * Routing constant for the application.
 */
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  { 
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { 
      message: 'Seite wurde nicht gefunden!'
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
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
