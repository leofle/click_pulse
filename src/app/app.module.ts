import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { AvailabilityComponent } from './availability/availability.component';
import { StatusComponent } from './status/status.component';
import { HttpModule }     from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';
import { CardStatusComponent } from './card-status/card-status.component';
import { ErrorCardComponent } from './error-card/error-card.component';
import { RegionCardComponent } from './region-card/region-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    StatusComponent,
    FooterComponent,
    HeaderComponent,
    DateComponent,
    CardStatusComponent,
    ErrorCardComponent,
    RegionCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [appRoutingProviders],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
