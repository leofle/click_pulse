import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="app_wrapper">
    <h1>{{title}}</h1>
    <div class="pulseHeader">
    <h2>{{sub_title}}</h2>
    <nav>
      <a routerLink="/status" routerLinkActive="active">status</a>
      <a routerLink="/availability" routerLinkActive="active">availability</a>
    </nav>
    <i class="material-icons">schedule</i>
    </div>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'clicksoftware';
  sub_title = 'ClickPulse';
}
