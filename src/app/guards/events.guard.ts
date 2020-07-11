import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    "providedIn":"root"
})
export class EventAccessGuard implements CanActivate
{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        let srno : string = route.paramMap.get("srno");

        if(isNaN(srno) || Number(srno) < 1)
        {
            alert('unauthorized access');
            return false;
        }
        return true;
    }

}