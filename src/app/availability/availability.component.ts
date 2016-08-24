import { Component } from '@angular/core';
@Component({
  selector: 'availability',
  template: `
  <div class="availability_wrapper">
    <div class="inner_availability">
      <div class="calendar_container" *ngFor="let pod of podim; let i = index;">
        <div class="pod_name">{{ pod.pod_name }}</div>
        <div class="pod_calendar">
          <div class="daily_capacity {{pod.capacity.dates[0].today}}"></div>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['availability.component.scss']
})
export class AvailabilityComponent {
  podim:Array<any>;
constructor(){
  this.podim = [
    {
    "pod_name":"Schedule",
    "capacity":{"dates":[
      {"today":"done"}
    ]}
  },
  {
  "pod_name":"Mobile",
    "capacity":{"dates":[
      {"today":"done"}
    ]}
  },
  {
  "pod_name":"Integration",
    "capacity":{"dates":[
      {"today":"done"}
    ]}
  }
]

}

}
