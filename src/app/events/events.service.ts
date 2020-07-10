import { Injectable } from '@angular/core';
import { RegisterationService } from '../registration/registration.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class EventsService
{
    registrationService : RegisterationService;

    constructor(registrationService : RegisterationService,private httpService :HttpClient)
    {
        this.registrationService = registrationService;
    }

    getAllEvents(): Observable<any>
    {
        console.log("service getAllEvents...");

        return this.httpService.get("https://run.mocky.io/v3/e8d86473-8d66-4ba3-b4fb-627f6216e9cf")
            .pipe(
                tap(responseData => console.log(responseData)),
                catchError(err =>{
                    console.log(err.error);
                    throw err;
                })
            );
    }

    
}