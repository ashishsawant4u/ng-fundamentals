import { Component,Input } from '@angular/core';

@Component({
  selector: 'event-mode',
  templateUrl:'./eventmode.component.html',
  styles:[`
  	.event-mode-img {height: 50px;width: 50px;margin-bottom: -18px;}
  `] 
})

export class EventModeComponent {
	@Input() eventMode:string;
}
