import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { SettingsComponent } from './settings.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: SettingsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}