import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="pulseHeader">
    <h2>{{sub_title}}</h2>
    <span class="logo_container">
      <i class="material-icons">favorite</i>
    </span>
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
  `,
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

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

  ngOnInit() {
  }

}
