import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';

@Component({
	templateUrl : "./eventdetails.component.html"
})
export class EventDetailsComponet implements OnInit
{
	activatedRouterService : ActivatedRoute;
	routerService : Router;
	srno : string;

	constructor(activatedRouterService : ActivatedRoute,routerService : Router)
	{
		this.activatedRouterService = activatedRouterService;
		this.routerService = routerService;
	}

	ngOnInit()
	{
		this.srno = this.activatedRouterService.snapshot.paramMap.get("srno");	
	}

	backToEventList() : void
	{
		this.routerService.navigate(["/events"]);
	}

}