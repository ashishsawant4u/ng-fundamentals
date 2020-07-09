import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'events-list',
  templateUrl:'./eventslist.component.html',
  styles:[`
  	.ml10 {margin-left:10px;}
  	.events-text {font-family: Georgia;font-size: 15pt;}
  	.event-logo {height: 50px;width: 50px;margin-bottom: -18px;}
  	.y-color {color:#f0ab00}
  	.fr {float:right}
  	.break {display:block;}
  	.event-section{background-color:#3b3a3a;padding:15px;margin: 10px;}
  `] 
})


export class EventsListComponent implements OnInit{
	
	eventLogoImgUrl: string = '/assets/images/event-logo.png';
	events : any[];
	eventsService : EventsService;

	constructor(evetsService : EventsService)
	{
		this.eventsService = evetsService;
	}

	showRegCount:Boolean = false;
	visitorName: string;
	filterByText:string;
	filteredEvents:any[] = this.events;


	ngOnInit(): void {
		this.events = this.eventsService.getAllEvents();
		this.filteredEvents = this.events;
	}

	toogleRegCount():void
	{
		this.showRegCount = !this.showRegCount;
	}

	eventModeClickEventListener(eventModeDetails : string):void
	{
		alert(eventModeDetails);
	}

	filterEvents(): void
	{
		if(this.filterByText)
		{
			this.filteredEvents = this.events.filter((event:any) =>
				event.name.toLowerCase().indexOf(this.filterByText) !== -1		
			)
		}
		else
		{
			this.filteredEvents = this.events;
		}
		
	}

	
}
