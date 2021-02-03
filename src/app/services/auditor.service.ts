import { Injectable } from '@angular/core';
import { Auditor } from "../data-models/auditor.model";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Project } from '../data-models/project.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuditorService {

  private auditors: Auditor[] = [];
  private auditorSubject = new Subject<Auditor[]>();

  constructor(private router: Router, private http: HttpClient) { }

  // db add
  addAuditor(adt: Auditor) {

    this.http.post<{ message: string, adtID: string }>("http://localhost:3000/api/auditors", adt)
      .subscribe((responseData) => {
        adt._id = responseData.adtID;
        this.auditors.push(adt);
        this.auditorSubject.next([...this.auditors]);
        this.router.navigate(["/auditors"]);
      }, (err) => {
      });
  }

  getAuditors() {

    this.http.get<{ message: string, auditors: Auditor[] }>("http://localhost:3000/api/auditors")
      .subscribe((respond) => {
        this.auditors = respond.auditors;
        this.auditorSubject.next([...this.auditors]);
      });
  }

  getAuditor(id: string) {
    // return as observable
    return this.http.get<{ message: string, auditor: Auditor }>("http://localhost:3000/api/auditors/" + id);
  }

  getAuditorObservable() {
    return this.auditorSubject.asObservable();
  }

  getAuditors_byStandard(std: string) {
    this.http.get<{ message: string, auditors: Auditor[] }>("http://localhost:3000/api/auditors/standard/" + std)
      .subscribe((response) => {
        this.auditors = response.auditors;
        this.auditorSubject.next([...this.auditors]);
      });
  }

  assignProject(projectID: string, auditorIDs: string[]) {
    const data = { projectID: projectID, auditorIDs: auditorIDs };


    this.http.put("http://localhost:3000/api/auditors/assignProject", data)
      .subscribe((response) => {

      })

  }





}
