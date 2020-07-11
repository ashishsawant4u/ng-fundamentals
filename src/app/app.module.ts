import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }  from '@angular/router';


import { EventsAppComponent } from './eventsapp.component';
import { EventsListComponent } from './events/eventslist.component';
import { EventModeComponent } from './events/eventmode.component';
import { EventDetailsComponet } from './events/eventdetails.component';

import { FormsModule } from '@angular/forms';
import { ReplaceStringPipe } from './Utilities/utilities.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterationService } from './registration/registration.service';
import { EventAccessGuard } from './guards/events.guard';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventModeComponent,
    ReplaceStringPipe,
    RegistrationComponent,
    EventDetailsComponet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"events", component:EventsListComponent},
      {path:"register", component:RegistrationComponent},
      {path:"event/:srno", component:EventDetailsComponet,canActivate:[EventAccessGuard]}
    ])
  ],
  providers: [
    RegisterationService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
