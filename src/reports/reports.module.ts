import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { ReportsComponent } from './reports.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: ReportsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ReportsComponent
  ]
})
export class ReportsModule {}