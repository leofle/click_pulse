import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app_wrapper">
    <h1>{{title}}</h1>
    <pulse-header></pulse-header>
    <router-outlet></router-outlet>
    <pulse-footer></pulse-footer>
  </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  title = 'clicksoftware2';

}
