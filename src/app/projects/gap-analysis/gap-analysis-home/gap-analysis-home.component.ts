import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { StandardsService } from 'src/app/services/standards.service';
import { Project, Entry } from '../../../data-models/project.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, mergeMap, flatMap } from "rxjs/operators";
import { ControlsListComponent } from "../controls-list/controls-list.component";
import { Standard, Control } from 'src/app/data-models/standard.model';

@Component({
  selector: 'app-gap-analysis-home',
  templateUrl: './gap-analysis-home.component.html',
  styleUrls: ['./gap-analysis-home.component.css']
})
export class GapAnalysisHomeComponent implements OnInit {

  public project: Project = null;
  public standard: Standard = null;
  public domains: Control[] = [];
  public onScreenControls: Control[] = [];
  public onScreensNumberOfDones: Map<string, number>;
  public onDomains: boolean = true;
  public title: string = "";
  public loading: boolean;


  public onStats: boolean = false;
  public onControlPage = false;

  public clickedControl: Control;


  constructor(
    private projectSrvc: ProjectsService,
    private standardSrvc: StandardsService,
    private route: ActivatedRoute) { }


  onItemClicked(clickedIndex: number) {
    let clickedItem = this.onScreenControls[clickedIndex];
    if (clickedItem.isDomain) {
      this.onDomainClicked(clickedItem)
    }
    else {
      this.onControlClicked(clickedItem);
    }
    // this.title = this.onScreenControls[clickedIndex].title;
  }


  onDomainClicked(clickedDom) {
    this.onDomains = false;
    this.loading = true;
    this.standardSrvc.getChildControls(clickedDom).subscribe((controls) => {
      this.update_OnScreenControls(controls);
      this.loading = false
    })
  }

  onControlClicked(clickedCont) {
    this.onControlPage = true;
    this.clickedControl = clickedCont;
  }


  onGoBack() {

    if (this.onControlPage) {
      this.onControlPage = false;
    }
    else {
      this.onDomains = true;
      this.onScreenControls = this.domains;
      // this.assign_numberOfDoneLeafs();
      // this.title = this.onScreenControls[this.onScreenControlID_path[0]].title
    }
  }

  moveToGapAnalysis() {
    this.onStats = false;
  }

  onEntryDone(entry: Entry) {
    this.projectSrvc.addEntry2GapAnalysis(entry).subscribe(response => {
      // this.onScreensNumberOfDones.set(entry.control_id, 1);
      this.projectSrvc.entryID_fromDB.next(response.entryID);
    })
  }

  update_OnScreenControls(Controls: { control: Control }[]) {
    this.onScreenControls = [];
    Controls.forEach(cont => {
      this.onScreenControls.push(cont.control);
    });
    // this.assign_numberOfDoneLeafs();

  }

  assign_numberOfDoneLeafs() {
    //   this.onScreensNumberOfDones = new Map<string, number>();
    //   this.onScreenControls.forEach(control => {
    //     if (control.isLeaf_control) {
    //       this.projectSrvc.isLeafDone(this.project._id, control.cid).subscribe(response => {
    //         if (response.result) {
    //           this.onScreensNumberOfDones.set(control.cid, 1);
    //         }
    //         else {
    //           this.onScreensNumberOfDones.set(control.cid, 0);
    //         }
    //       })
    //     }
    //     else {
    //       this.projectSrvc.entriesOfRoot(this.project._id, control.cid, "length_only").subscribe(response => {
    //         this.onScreensNumberOfDones.set(control.cid, response.entry_num);
    //       })
    //     }

    //   });

  }

  ngOnInit(): void {

    // first get the project and its standard
    // then get the "domains" of the standard
    this.route.paramMap.pipe(
      flatMap((paramMap: ParamMap) => {
        if (paramMap.has("id")) {
          const projectID = paramMap.getAll("id");
        }
        return paramMap.getAll("id");
      }),
      flatMap((projectID: string) => {
        return this.projectSrvc.getProject(projectID);
      }),
      flatMap((projectResponse: { message: string, project: Project }) => {
        this.project = projectResponse.project;
        return this.standardSrvc.getStandard(projectResponse.project.standard);
      })
    ).subscribe((stdResponse: { message: string, standard: Standard }) => {
      this.standard = stdResponse.standard;
      this.standardSrvc.getDomains(stdResponse.standard).subscribe((controls) => {
        this.update_OnScreenControls(controls);
        this.domains = this.onScreenControls;
      });
    })
  }

}
