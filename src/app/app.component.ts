import { Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="app_wrapper">
    <h1>{{title}}</h1>
      <div class="pulseHeader">
      <h2>{{sub_title}}</h2>
      <nav>
        <a routerLink="/status" routerLinkActive="active">status</a>
        <a routerLink="/availability" routerLinkActive="active">availability</a>
      </nav>
        <div class="timedate_wrapper">
          <div class="date_wrapper">
            <i class="material-icons">today</i>
            <span class="date_container">{{today | date}}</span>
          </div>
          <div class="hour_wrapper">
            <i class="material-icons">watch_later</i>
            <span class="hour_container">{{today | date:'shortTime'}}</span>
          </div>
        </div>
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
  today: number = Date.now();

  constructor(private ref: ChangeDetectorRef) {
      // ref.detach();
      setInterval(() => {
        this.today = Date.now();
        this.ref.markForCheck();
        // console.log(this.today);
      }, 1000);
    }
}
