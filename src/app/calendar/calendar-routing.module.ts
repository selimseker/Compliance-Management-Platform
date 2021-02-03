import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';


const routes: Routes = [
  {path:"calendar", component:CalendarHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
