import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/navbar.component';
import { AppComponent } from './app.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventService } from './shared/event.service';

@NgModule({
  // imports: [BrowserModule, RouterModule],
  // declarations: [AppComponent, NavComponent, EventDetailComponent],
  // providers: [EventService],
  // bootstrap: [AppComponent],
})
export class AppModule {}
