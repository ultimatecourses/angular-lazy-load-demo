import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { DashboardComponent } from './dashboard.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}