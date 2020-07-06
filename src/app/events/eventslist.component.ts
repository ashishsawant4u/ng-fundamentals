import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  			 <h2>List of Events</h2>
  			 <hr>
  			 <b>{{event.name}} </b> on {{event.date}}
  			`
})


export class EventsListComponent {
	event = {
		srno:1,
		name:"Event X",
		date:"12-Dec-2002"
	}
}
