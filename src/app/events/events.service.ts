import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class EventsService
{
    getAllEvents(): any[]
    {
        console.log("service getAllEvents...");
        return  [
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
    }
}