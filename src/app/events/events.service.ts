import { Injectable } from '@angular/core';
import { RegisterationService } from '../registration/registration.service';

@Injectable({
    providedIn:"root"
})
export class EventsService
{
    registrationService : RegisterationService;

    constructor(registrationService : RegisterationService)
    {
        this.registrationService = registrationService;
    }

    getAllEvents(): any[]
    {
        console.log("service getAllEvents...");
        return  [
            {
                srno:1,
                name:"Event IPL",
                date:"12-Dec-2020",
                totalRegistrationSoFar:this.registrationService.getRegistrationCountForEvent("Event IPL"),
                mode:"Online",
                ticketPrice:1200
            },
            {
                srno:2,
                name:"Event WC-T20",
                date:"12-Mar-2021",
                totalRegistrationSoFar:this.registrationService.getRegistrationCountForEvent("Event WC-T20"),
                mode:"Offline",
                ticketPrice:1200
            }
         ];
    }
}