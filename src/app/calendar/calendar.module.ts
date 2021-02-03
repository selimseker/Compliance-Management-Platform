import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';


@NgModule({
  declarations: [CalendarHomeComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
