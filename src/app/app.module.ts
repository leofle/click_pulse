import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { AvailabilityComponent } from './availability/availability.component';
import { StatusComponent } from './status/status.component';
import { HttpModule }     from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
