import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup, MaxLengthValidator } from '@angular/forms';
import { Auditor } from "../../data-models/auditor.model";
import { AuditorService } from "../../services/auditor.service";

@Component({
  selector: 'app-create-auditor-home',
  templateUrl: './create-auditor-home.component.html',
  styleUrls: ['./create-auditor-home.component.css']
})
export class CreateAuditorHomeComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public standards: string[];
  public supervisors: string[];

  constructor(public adtService: AuditorService) { }



  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const newAuditor = this.form.value as Auditor;
    this.adtService.addAuditor(newAuditor);
  }


  ngOnInit(): void {

    this.form = new FormGroup({
      "first_name": new FormControl(null, { validators: [Validators.required] }),
      "second_name": new FormControl(null, { validators: [] }),
      "phone_number": new FormControl(null, { validators: [Validators.required] }),
      "email": new FormControl(null, { validators: [Validators.required] }),
      "bio": new FormControl(null, { validators: [Validators.maxLength(500)] }),
      "standards": new FormControl(null, { validators: [] }),
      "supervisor": new FormControl(null)
    });
    // dummy, but "legend" supervisor
    this.standards = ["SWIFT-A1", "SWIFT-A2", "SWIFT-A3", "SWIFT-A4", "SWIFT-B", "800-171A NIST"];
    this.supervisors = ["Alan Turing", "Marvin Minsky", "john Mccarthy"];

  }

  ngOnDestroy() {
  }

}
