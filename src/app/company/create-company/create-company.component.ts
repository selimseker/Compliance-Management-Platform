import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, MaxLengthValidator } from '@angular/forms';
import { Company } from "../../data-models/company.model";
import { CompanyService } from "../../services/company.service";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public form: FormGroup;
  constructor(private compService: CompanyService) { }

  onSubmit() {
    if (this.form.invalid) { return; }
    this.compService.addCompany(this.form.value as Company);

  }


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        "name": new FormControl(null, { validators: [Validators.required] }),
        "industry": new FormControl(null, { validators: [Validators.required] }),
        "email": new FormControl(null, { validators: [Validators.required] }),
        "phone_number": new FormControl(null, { validators: [Validators.required] }),
        "bio": new FormControl(null, { validators: [Validators.maxLength(500)] })
      });

  }

}
