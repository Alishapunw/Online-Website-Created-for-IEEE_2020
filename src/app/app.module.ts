import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CouncilComponent } from './council/council.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { IEEETvComponent } from './ieeetv/ieeetv.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ContactusComponent,
    CouncilComponent,
    SponsorsComponent,
    IEEETvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
