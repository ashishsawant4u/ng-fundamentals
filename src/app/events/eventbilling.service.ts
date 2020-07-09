import { Injectable } from '@angular/core';
import { eventNames } from 'process';

@Injectable()
export class EventBillingService
{
    getEventFees(eventName :  string) : any
    {
        console.log("getEventFees.........."+eventName);
        return {
            "eventName":eventName,
            "fees":Math.floor((Math.random() * 10000) + 1)
        };
    }
}