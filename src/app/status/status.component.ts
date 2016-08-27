import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'status',
  template: `
  <div class="status_wrapper">
    <div class="inner_status" *ngFor="let item of items; let i = index;">
      <div class="status_container">
          <span class="platform_name">Current {{item.name}} Status:</span><i class="material-icons {{item.status}}">{{item.status}}</i>
      </div>
      <div class="services_container">
        <ul>
          <li>
            <span class="service_unit">Click Field Service Edge:</span>
            <span class="service_unit_status isGood">
              <i class="material-icons">done</i>
            </span>
          </li>
          <li>
            <span class="service_unit">Click Field Service Edge:</span>
            <span class="service_unit_status isGood">
              <i class="material-icons">done</i>
            </span>
          </li>
          <li>
            <span class="service_unit">Click Field Service Edge:</span>
            <span class="service_unit_status isGood">
              <i class="material-icons">done</i>
            </span>
          </li>
        </ul>
        <button md-raised-button>more</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['status.component.scss'],
  providers: [DataService]
})
export class StatusComponent implements OnInit {
	getData: any;
  inter: any;
  items: Array<any>;
  constructor(private dataService: DataService) {
    this.items = dataService.getItemsMock();
  }

  ngOnInit(): void {
    // this.dataService.getItems().subscribe(
    //   data => this.getData = JSON.stringify(data),
    //   error => alert(error),
    //   () => this.items = eval(this.getData)
    //   //() => console.log(eval(this.getData))
    // );

  }

}
