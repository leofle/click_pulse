import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'availability',
  template: `
  <div class="availability_wrapper">
    <div class="inner_availability">
      <div class="pod_name">{{ this.route.params._value.name }}</div>
      <div class="calendar_container" *ngFor="let pod of podim; let i = index;">
        <div class="region_name">{{ pod.region_name }}</div>
        <div class="pod_calendar">
          <div class="daily_capacity {{pod.capacity.dates[0].today}}"></div>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['availability.component.scss']
})
export class AvailabilityComponent implements OnInit ,OnDestroy{
  podim:Array<any>;
  private sub: Subscription;
  constructor(private route: ActivatedRoute){
    this.podim = [
      {
      "region_name":"U.S",
      "capacity":{"dates":[
        {"today":"done"}
      ]}
    },
    {
    "region_name":"Europe",
      "capacity":{"dates":[
        {"today":"done"}
      ]}
    },
    {
    "region_name":"Australia",
      "capacity":{"dates":[
        {"today":"done"}
      ]}
    }
  ]

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     let name = params['name'];
     console.log(this.route.params)
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
