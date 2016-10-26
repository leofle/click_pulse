import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pulse-status',
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
    this.dataService.getItems().subscribe(
      items => this.items = items,
      error => console.error('Error: ' + error),
      () => console.log('Completed!' + this.items)
    );

  }

  ngOnInit(){}

}
