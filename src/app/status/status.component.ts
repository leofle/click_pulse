import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'status',
  template: `
  <div class="status_wrapper">
    <p>
      status works!
    </p>
  </div>
  `,
  styleUrls: ['status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
