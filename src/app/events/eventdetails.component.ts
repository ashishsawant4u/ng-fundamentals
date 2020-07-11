import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';

@Component({
	templateUrl : "./eventdetails.component.html"
})
export class EventDetailsComponet implements OnInit
{
	activatedRouterService : ActivatedRoute;
	srno : string;

	constructor(activatedRouterService : ActivatedRoute)
	{
		this.activatedRouterService = activatedRouterService;
	}

	ngOnInit()
	{
		this.srno = this.activatedRouterService.snapshot.paramMap.get("srno");	
	}
}