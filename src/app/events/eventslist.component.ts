import { Component } from '@angular/core';

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


export class EventsListComponent {
	eventLogoImgUrl: string = '/assets/images/event-logo.png';
	events : any[] = [
		{
			srno:1,
			name:"Event IPL",
			date:"12-Dec-2020",
			totalRegistrationSoFar:Math.floor((Math.random() * 100) + 1),
			mode:"Online",
			ticketPrice:1200
		},
		{
			srno:2,
			name:"Event WC-T20",
			date:"12-Mar-2021",
			totalRegistrationSoFar:Math.floor((Math.random() * 100) + 1),
			mode:"Offline",
			ticketPrice:1200
		}
 	];
	showRegCount:Boolean = false;
	visitorName: string;
	filterByText:string;
	filteredEvents:any[] = this.events;

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
