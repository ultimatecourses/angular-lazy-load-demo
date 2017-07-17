import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Lazy loading demo</h1>
      <nav class="app-nav">
        <div class="wrapper">
          <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="settings" routerLinkActive="active">Settings</a>
          <a routerLink="reports" routerLinkActive="active">Reports</a>
        </div>
      </nav>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
