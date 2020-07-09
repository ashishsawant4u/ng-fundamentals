import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './eventsapp.component';
import { EventsListComponent } from './events/eventslist.component';
import { EventModeComponent } from './events/eventmode.component';
import { FormsModule } from '@angular/forms';
import { ReplaceStringPipe } from './Utilities/utilities.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterationService } from './registration/registration.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventModeComponent,
    ReplaceStringPipe,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    RegisterationService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
