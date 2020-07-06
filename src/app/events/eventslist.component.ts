import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl:'./eventslist.component.html',
  styles:[`
  	.ml10 {margin-left:10px;}
  	.events-text {font-family: Georgia;font-size: 15pt;}
  	.event-logo {height: 50px;width: 50px;margin-bottom: -18px;}
  	.regSoFar {color:#f0ab00}
  	.fr {float:right}
  `] 
})


export class EventsListComponent {
	eventLogoImgUrl: string = '/assets/images/event-logo.png';
	event = {
		srno:1,
		name:"Event X",
		date:"12-Dec-2002",
		totalRegistrationSoFar:Math.floor((Math.random() * 100) + 1),
		mode:"Online"
	};
	showRegCount:Boolean = false;
	visitorName: string;

	toogleRegCount():void
	{
		this.showRegCount = !this.showRegCount;
	}
}
