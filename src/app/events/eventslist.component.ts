import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl:'./eventslist.component.html' 
})


export class EventsListComponent {
	event = {
		srno:1,
		name:"Event X",
		date:"12-Dec-2002"
	}
}
