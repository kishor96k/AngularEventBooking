import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MyBookingsComponent } from './Components/my-bookings/my-bookings.component';
import { NewEventComponent } from './Components/new-event/new-event.component';
import { EventListComponent } from './Components/event-list/event-list.component';
import { EventBookingsComponent } from './Components/event-bookings/event-bookings.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyBookingsComponent,
    NewEventComponent,
    EventListComponent,
    EventBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
