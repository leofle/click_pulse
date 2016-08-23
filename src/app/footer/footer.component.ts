import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer_wrapper">
    <p>clicksoftware 2016</p>
  </div>
  `,
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
