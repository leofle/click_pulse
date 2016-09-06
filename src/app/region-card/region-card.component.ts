import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'region-card',
  template: `
  <div class="regions_container">
    <ul>
      <li *ngFor="let region of item.regions;">
        <span class="region_unit">{{ region.name }}</span>
        <span class="region_unit_status isGood">
          <i [class]="'material-icons ' + region.status" >{{ region.status }}</i>
        </span>
      </li>
    </ul>
    <button md-raised-button (click)="onSelect(region)">more</button>
  </div>
  `,
  styleUrls: ['region-card.component.scss']
})
export class RegionCardComponent implements OnInit {
@Input() item;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect() {
     this.router.navigate(['/availability', this.item.name]);
     console.log(this.item.name);
  }

}
