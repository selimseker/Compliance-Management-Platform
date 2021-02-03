import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';

import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { CompanyModule } from './company/company.module';
import { ProjectsModule } from './projects/projects.module';
import { StandardsModule } from './standards/standards.module';
import { StatisticsModule } from './statistics/statistics.module';
import { CalendarModule } from './calendar/calendar.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuditorModule } from './auditor/auditor.module';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';



import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    CompanyModule,
    ProjectsModule,
    StandardsModule,
    StatisticsModule,
    CalendarModule,
    AuditorModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
