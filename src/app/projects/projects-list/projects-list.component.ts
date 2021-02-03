import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { MatTableDataSource } from '@angular/material/table';
import { Project } from "../../data-models/project.model";
import { ProjectsService } from '../../services/projects.service';

import { MatDialog } from "@angular/material/dialog";
import { ProjectInfoDialogComponent } from "../project-info-dialog/project-info-dialog.component";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  public projects: Project[] = [];
  public projectSubscription: Subscription;


  public dataSource: MatTableDataSource<Project>;
  public displayedColumns: string[] = ["project_title", "company", "standard", "auditors"];
  constructor(private prjService: ProjectsService, public dialog: MatDialog) { }

  openDialog(row: any) {

    const dialogRef = this.dialog.open(ProjectInfoDialogComponent,
      {
        width: "1225px",
        height: "600px",
        data: row as Project
      });

    dialogRef.afterClosed().subscribe(() => {
    })

  }



  ngOnInit() {
    this.prjService.getProjects();
    this.projectSubscription = this.prjService.getProjectsObservable()
      .subscribe((prjcts: Project[]) => {
        this.projects = prjcts;
        this.dataSource = new MatTableDataSource<Project>(this.projects);
      });




  }

  ngOnDestroy() {
    this.projectSubscription.unsubscribe();
  }

}
