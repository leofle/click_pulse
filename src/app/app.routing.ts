import { Routes, RouterModule }   from '@angular/router';
import { StatusComponent }  from './status/status.component';
import { AvailabilityComponent }  from './availability/availability.component';

const appRoutes: Routes = [
  { path: '', component: StatusComponent },
  { path: 'status', component: StatusComponent },
  { path: 'availability', component: AvailabilityComponent },
  { path: 'availability/:name', component: AvailabilityComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
