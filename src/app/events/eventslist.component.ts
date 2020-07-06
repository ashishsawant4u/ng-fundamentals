import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl:'./eventslist.component.html',
  styles:[`
  	.ml10 {margin-left:10px;}
  	.events-text {font-family: Georgia;font-size: 15pt;}
  `] 
})


export class EventsListComponent {
	event = {
		srno:1,
		name:"Event X",
		date:"12-Dec-2002"
	}
}
