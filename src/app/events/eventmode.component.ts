import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'event-mode',
  templateUrl:'./eventmode.component.html',
  styles:[`
  	.event-mode-img {height: 50px;width: 50px;margin-bottom: -18px;}
  `] 
})

export class EventModeComponent {
	@Input() eventMode:string;
	@Output() eventModeClickEvent: EventEmitter<string> = new EventEmitter<string>();


	handleEventModeClickEvent(): void
	{
		if(this.eventMode === "Online")
		{
			this.eventModeClickEvent.emit("Event will be conducted at https://cx.sap.com");
		}	
		if(this.eventMode === "Offline")
		{
			this.eventModeClickEvent.emit("Event will be conducted at 14 avenue park,Aukland,NZ");
		}	
	}
}
