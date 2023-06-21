import { Routes } from '@angular/router';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list.component';

export const AppRoutes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
];
