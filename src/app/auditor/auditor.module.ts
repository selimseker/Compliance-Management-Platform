import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// insights
import { AuditorRoutingModule } from './auditor-routing.module';
import { CreateAuditorHomeComponent } from './create-auditor-home/create-auditor-home.component';
import { AuditorsListComponent } from "./auditors-list/auditors-list.component";

// angular material forms
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatSelectModule} from '@angular/material/select'; 

import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 

// angular materail data-table
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule} from '@angular/material/table';

//service
import {HttpClientModule} from '@angular/common/http';
import { AuditorInfoDialogComponent } from './auditor-info-dialog/auditor-info-dialog.component';

//dialog
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [CreateAuditorHomeComponent, AuditorsListComponent, AuditorInfoDialogComponent],
  imports: [
    CommonModule,
    AuditorRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule
  ]
})
export class AuditorModule { }
