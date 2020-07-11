import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  styles:[`
  	ul {list-style-type: none;margin: 0;padding: 0;}
	ul a{color:#f0ab00;font-family: Georgia;font-size: 15pt;}
  	`],
  template: `
  	<div>
		<ul>
			<li><a [routerLink]="['/']">Home</a></li>
			<li><a [routerLink]="['/events']">Events</a></li>
			<li><a [routerLink]="['/register']">Register</a></li>
		  </ul>
	</div>
	<br><br>
	<router-outlet></router-outlet>
  `
})


export class EventsAppComponent {
  title = 'ng-fundamentals';
}
