import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';

// angular material forms
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// angular materail data-table
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from '@angular/material/table';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectInfoDialogComponent } from './project-info-dialog/project-info-dialog.component';

//dialog
import { MatDialogModule } from '@angular/material/dialog';
import { GapAnalysisHomeComponent } from './gap-analysis/gap-analysis-home/gap-analysis-home.component';

//list for standards
import { MatListModule } from '@angular/material/list';
import { ControlsListComponent } from './gap-analysis/controls-list/controls-list.component';
import { ControlQuestionDialogComponent } from './gap-analysis/control-question-dialog/control-question-dialog.component';

import { MatDividerModule } from '@angular/material/divider';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AnalysisStatsComponent } from './gap-analysis/analysis-stats/analysis-stats.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ControlPageComponent } from './gap-analysis/control-page/control-page.component';
import { GapAnalysisAnswerComponent } from '../generic-components/gap-analysis-answer/gap-analysis-answer.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ControlInfoDialogComponent } from './gap-analysis/control-info-dialog/control-info-dialog.component';
import { CreateReportComponent } from './create-report/create-report.component';


@NgModule({
  declarations: [ProjectsListComponent, CreateProjectComponent, ProjectInfoDialogComponent, GapAnalysisHomeComponent, ControlsListComponent, ControlQuestionDialogComponent, AnalysisStatsComponent, ControlPageComponent, GapAnalysisAnswerComponent, ControlInfoDialogComponent, CreateReportComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
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
    MatListModule,
    MatRadioModule,
    MatDividerModule,
    ScrollingModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    CKEditorModule
  ]
})
export class ProjectsModule { }
