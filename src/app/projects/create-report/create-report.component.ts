import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { flatMap } from "rxjs/operators";

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  constructor(
    private projectSrvc: ProjectsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      flatMap((paramMap: ParamMap) => {
        
        return paramMap.getAll("id");
      }),
      flatMap((projectID: string) => {
        console.log("creating report for: ", projectID);
        return this.projectSrvc.createReport(projectID);
      }),
    ).subscribe((response) => {
      console.log(response);
    })

  }

}
