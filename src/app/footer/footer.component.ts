import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pulse-footer',
  template: `
  <div class="footer_wrapper">
    <ul class="inner_footer">
      <li>
        <a href="#">Privacy statement</a>
      </li>
      <li>
        <a href="www.clicksoftware.com">clicksoftware.com</a>
      </li>
      <li>
        <a href="#">clicksoftware 2016</a>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
