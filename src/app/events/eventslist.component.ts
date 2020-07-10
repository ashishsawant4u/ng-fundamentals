import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { EventBillingService } from './eventbilling.service';

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
	.mt20 {margin-top: 20px;}
	  `],
  providers:[
	EventBillingService
  ] 
  
})


export class EventsListComponent implements OnInit{
	
	eventLogoImgUrl: string = '/assets/images/event-logo.png';
	events : any[];
	eventsService : EventsService;
	eventBillingService : EventBillingService;
	eventBasicFees : any;
	errorMessage : String;

	constructor(evetsService : EventsService,eventBillingService : EventBillingService)
	{
		this.eventsService = evetsService;
		this.eventBillingService = eventBillingService;
	}

	showRegCount:Boolean = false;
	visitorName: string;
	filterByText:string;
	filteredEvents:any[] = this.events;


	ngOnInit(): void {
		this.eventsService.getAllEvents()
			.subscribe({
				next: response =>{
					this.events = response;
					this.filteredEvents = this.events;
				},
				error: err =>{
					console.log("Something went Worng"+err);
					this.errorMessage = "Something went Worng";
				}
			});
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

	getBasicEventFees(eventName : string)
	{
		this.eventBasicFees =  this.eventBillingService.getEventFees(eventName);
	}
	
}
