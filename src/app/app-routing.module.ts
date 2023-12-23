import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { EventListComponent } from './Components/event-list/event-list.component';
import { MyBookingsComponent } from './Components/my-bookings/my-bookings.component';
import { NewEventComponent } from './Components/new-event/new-event.component';
import { EventBookingsComponent } from './Components/event-bookings/event-bookings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Event-List',
    component: EventListComponent
  },
  {
    path: 'My-Bookings',
    component: MyBookingsComponent
  },
  {
    path: 'New-Event',
    component: NewEventComponent
  },
  {
    path: 'Event-Bookings',
    component: EventBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
