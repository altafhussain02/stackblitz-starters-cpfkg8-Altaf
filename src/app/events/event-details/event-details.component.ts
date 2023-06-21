import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailComponent implements OnInit {
  events: any;
  event: any;
  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.event = this.eventService.getEvent(1);
  }
}
