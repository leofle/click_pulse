import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CardStatusComponent } from '../card-status/card-status.component';
import { ErrorCardComponent } from '../error-card/error-card.component';
import { RegionCardComponent } from '../region-card/region-card.component';

@Component({
  selector: 'status',
  template: `
  <div class="status_wrapper">
    <div class="inner_status" *ngFor="let item of items; let i = index; trackBy:index;">
      <card-status [item]="item"></card-status>
      <error-card [item]="item" *ngIf="item.status !== 'done' "></error-card>
      <region-card [item]="item"></region-card>
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
  ismedium: Boolean = false;
  myregion: string;

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
