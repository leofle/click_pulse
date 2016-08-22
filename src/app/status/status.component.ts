import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'status',
  template: `
  <div class="status_wrapper">
    <div class="inner_status" *ngFor="let item of items; let i = index;">
      <div class="status_container">
          <span class="platform_name">Current {{item.name}} Status:</span><span>{{item.status}}</span>
      </div>
      <div class="services_container">
        <ul>
          <li><span class="service_unit">Click Field Service Edge:</span><span class="service_unit_status isGood">good</span></li>
          <li><span class="service_unit">Click Field Service Edge:</span><span class="service_unit_status isGood">good</span></li>
          <li><span class="service_unit">Click Field Service Edge:</span><span class="service_unit_status isGood">good</span></li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['status.component.scss']
})
export class StatusComponent {

    constructor() { }

  items = [{
    "name":"Schedule",
    "status":"good"
  },{
    "name":"Mobile",
    "status":"bad"
  },{
    "name":"Integration",
    "status":"good"
  }];

}
