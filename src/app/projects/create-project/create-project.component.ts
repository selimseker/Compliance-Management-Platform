import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup, MaxLengthValidator } from '@angular/forms';

import { ProjectsService } from "../../services/projects.service";
import { CompanyService } from 'src/app/services/company.service';
import { AuditorService } from 'src/app/services/auditor.service';
import { Company } from 'src/app/data-models/company.model';
import { Auditor } from 'src/app/data-models/auditor.model';
import { Subscription } from 'rxjs';
import { Project } from '../../data-models/project.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit, OnDestroy {
  private cmpSubscription: Subscription;
  private adtSubscription: Subscription;

  public standards = ["SWIFT-A1", "SWIFT-A2", "SWIFT-A3", "SWIFT-A4", "SWIFT-B", "800-171A NIST"];
  companies: Company[] = [];
  public auditors: Auditor[] = [];

  public form: FormGroup;

  constructor(
    private projectService: ProjectsService,
    private cmpService: CompanyService,
    private adtService: AuditorService
  ) { }


  onSubmit() {
    let newPrj: Project = {
      project_title: this.form.value.project_title,
      standard: this.form.value.standard,
      auditors: [this.form.value.auditor_id],
      company: this.companies.filter(cmp => { return cmp._id === this.form.value.company_id })[0]
    };


    this.projectService.addProject(newPrj)
      .subscribe(() => {
        console.log("qweqweqwe", newPrj);
        this.adtService.assignProject(newPrj._id, newPrj.auditors);
        this.cmpService.startProject(newPrj._id, newPrj.company._id);
      });




  }

  ngOnInit() {

    this.form = new FormGroup({
      "project_title": new FormControl(null, { validators: [Validators.required] }),
      "company_id": new FormControl(null, { validators: [Validators.required] }),
      "standard": new FormControl(null, { validators: [Validators.required] }),
      "auditor_id": new FormControl(null, { validators: [Validators.required] })
    });



    this.cmpService.getCompanies();
    this.adtService.getAuditors();

    this.cmpSubscription = this.cmpService.getCompaniesObservable()
      .subscribe((comps: Company[]) => {
        this.companies = comps;
      }
      );
    this.adtSubscription = this.adtService.getAuditorObservable()
      .subscribe((adts: Auditor[]) => {
        this.auditors = adts;
      }
      );

    this.form.get("standard").valueChanges.subscribe(val => {
      this.adtService.getAuditors_byStandard(val);
    })


  }


  ngOnDestroy() {

  }


}
