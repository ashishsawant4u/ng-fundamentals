import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './eventsapp.component';
import { EventsListComponent } from './events/eventslist.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
