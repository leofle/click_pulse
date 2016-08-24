import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="app_wrapper">
    <h1>{{title}}</h1>
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  title = 'clicksoftware';

}
