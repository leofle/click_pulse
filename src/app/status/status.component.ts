import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'status',
  template: `
  <div class="status_wrapper">
    <div class="inner_status" *ngFor="let item of items; let i = index; trackBy:index;">
      <div class="status_container">
          <span class="platform_name">Current {{item.name}} Status:</span><i [class]="'material-icons ' + item.status">{{item.status}}</i>
      </div>
      <div class="error_message" [class.showme]="item.showStyle" *ngIf="item.status !== 'done' ">
        <span class="close_message" (click)="item.showStyle = !item.showStyle;">
          <i class="material-icons">close</i>
        </span>
        <span class="error_self">{{ item.error_msg }}</span>
      </div>
      <div class="services_container">
        <ul>
          <li *ngFor="let region of item.regions;">
            <span class="service_unit">{{ region.name }}</span>
            <span class="service_unit_status isGood">
              <i [class]="'material-icons ' + region.status">{{ region.status }}</i>
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
  showStyle: Boolean = false;

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
