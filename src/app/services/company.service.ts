import { Injectable } from '@angular/core';
import { Company } from "../data-models/company.model";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Project } from '../data-models/project.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: Company[] = []
  public companiesSubject = new Subject<Company[]>();

  constructor(private router: Router, private http: HttpClient) { }

  // add comp to db
  addCompany(newComp: Company) {

    this.http.post<{ message: string, companyID: string }>("http://localhost:3000/api/companies", newComp)
      .subscribe(respond => {
        console.log(respond.message);
        newComp._id = respond.companyID;
        this.companiesSubject.next([...this.companies]);
        this.router.navigate(["/companies"]);
      });
  }

  getCompanies() {
    this.http.get<{ message: string, companies: Company[] }>("http://localhost:3000/api/companies")
      .subscribe((respond) => {
        console.log(respond);
        this.companies = respond.companies;
        this.companiesSubject.next([...this.companies]);
      });
  }

  getCompaniesObservable() {
    return this.companiesSubject.asObservable();
  }

  startProject(projectID: string, cmpID: string) {
    const data = { projectID: projectID, companyID: cmpID };

    this.http.put("http://localhost:3000/api/companies/startProject", data)
      .subscribe((response) => {
        console.log("company service start project", response);

        // auditorIDs.forEach(adt => {
        //   if(adt.project == null){adt.project = [];}
        //   adt.project.push(project);
        // });
        // this.auditorSubject.next([...this.auditors]);            
      })

    // cmp.projects.push(project);
    // this.companiesSubject.next([...this.companies]);
  }

}
