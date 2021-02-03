import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatTableModule} from '@angular/material/table';
import { CreateCompanyComponent } from './create-company/create-company.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CompaniesListComponent, CreateCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule
  ]
})
export class CompanyModule { }
