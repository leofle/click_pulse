import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-status',
  template: `
  <div class="status_container">
      <span class="platform_name">Current {{item.name}} Status:</span>
        <i [class]="'material-icons ' + item.status">{{item.status}}</i>
  </div>
  `,
  styleUrls: ['card-status.component.scss']
})
export class CardStatusComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
