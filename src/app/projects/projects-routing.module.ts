import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { GapAnalysisHomeComponent } from './gap-analysis/gap-analysis-home/gap-analysis-home.component';
import { CreateReportComponent } from './create-report/create-report.component';

const routes: Routes = [
  { path: "projects", component: ProjectsListComponent },
  { path: "projects/create", component: CreateProjectComponent },
  { path: "projects/:id/gap-analysis", component: GapAnalysisHomeComponent },
  { path: "projects/:id/report", component: CreateReportComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
