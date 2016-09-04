import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error-card',
  template: `
  <div class="error_message" [class.showme]="item.showStyle" *ngIf="item.status !== 'done' ">
    <span class="close_message" (click)="item.showStyle = !item.showStyle;">
      <i class="material-icons">close</i>
    </span>
    <span class="error_self">{{ item.error_msg }}</span>
  </div>
  `,
  styleUrls: ['error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {
@Input() item;

  constructor() { }

  ngOnInit() {
  }

}
