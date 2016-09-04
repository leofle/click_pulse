import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pulse-date',
  template:`
    <div class="{{ timeclass }}_wrapper">
      <i class="material-icons">{{ iconclass }}</i>
      <span class="{{ timeclass }}_container">{{ today | date:dateformat }}</span>
    </div>
  `,
  styleUrls: ['date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() today: number;
  @Input() date: number;
  @Input() timeclass: string;
  @Input() iconclass: string;
  @Input() dateformat: string;

  constructor() {
  }

  ngOnInit() {
  }

}
