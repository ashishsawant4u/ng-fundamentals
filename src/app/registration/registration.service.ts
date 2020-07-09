import { Injectable } from '@angular/core';


@Injectable()
export class RegisterationService
{
    getRegistrationCountForEvent(eventName : string) : number
    {
        console.log("inside registration service..."+eventName);
        return Math.floor((Math.random() * 100) + 1);
    }    
}