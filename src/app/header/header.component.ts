import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DateComponent } from '../date/date.component';

@Component({
  selector: 'pulse-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="pulseHeader">
    <h2>{{sub_title}}</h2>
    <span class="logo_container pulse">
      <i class="material-icons">favorite</i>
    </span>
    <nav>
      <a routerLink="/status" routerLinkActive="active">status</a>
      <a routerLink="/availability" routerLinkActive="active">availability</a>
    </nav>
    <div class="timedate_wrapper">
      <pulse-date [timeclass]="isdate" [today]="today" [iconclass]="icondate" [dateformat]=" "></pulse-date>
      <pulse-date [timeclass]="ishour" [today]="today" [iconclass]="iconhour" [dateformat]="shortdate"></pulse-date>
    </div>
  </div>
  `,
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  sub_title = 'Pulse';
  today: number;
  date: number;
  isdate: string = 'date';
  ishour: string = 'hour';
  icondate: string = 'today';
  iconhour: string = 'watch_later';
  shortdate: string = 'shortTime';

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
