import { Injectable } from '@angular/core';
import { Project, Entry } from "../data-models/project.model";
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [];
  public projectSubject = new Subject<Project[]>();

  public entryID_fromDB = new Subject<string>();
  public entrySubject = new Subject<Entry>();

  constructor(private router: Router, private http: HttpClient) { }


  addProject(newPrj: Project) {
    const tempSubj = new Subject();
    this.http.post<{ message: string, projectID: string }>("http://localhost:3000/api/projects", newPrj)
      .subscribe(response => {
        console.log(response.message);
        newPrj._id = response.projectID
        this.projects.push(newPrj);
        this.projectSubject.next([...this.projects]);
        tempSubj.next();
        this.router.navigate(["/projects"])

      });
    return tempSubj.asObservable();
  }

  getProjects() {
    this.http.get<{ message: string, projects: Project[] }>("http://localhost:3000/api/projects")
      .subscribe(response => {
        console.log(response.message);
        this.projects = response.projects;
        this.projectSubject.next([...this.projects]);
      })
  }

  getProject(id: string) {
    return this.http.get<{ message: string, project: Project }>("http://localhost:3000/api/projects/" + id);
  }

  getProjectsObservable() {
    return this.projectSubject.asObservable();
  }


  addEntry2GapAnalysis(entry: Entry) {
    return this.http.post<{ message: string, entryID: string }>("http://localhost:3000/api/projects/gapAnalysis", entry);
  }

  isLeafDone(projectID: string, controlID: string) {
    const params = new HttpParams().set("projectID", projectID)
      .set("controlID", controlID);
    return this.http.get<{ message: string, result: boolean }>("http://localhost:3000/api/projects/gapAnalysis/entries/isDone", { params: params })
  }

  getEntryOfControl(projectID: string, controlID: string) {
    const params = new HttpParams().set("projectID", projectID)
      .set("controlID", controlID);
    this.http.get<{ message: string, entry: Entry }>("http://localhost:3000/api/projects/gapAnalysis/entries/", { params: params })
      .subscribe(response => {
        console.log(response.message);
        this.entrySubject.next(response.entry);
      })
  }


  entriesOfRoot(projectID: string, rootID: string, length_or_documents: string) {
    const params = new HttpParams().set("projectID", projectID)
      .set("rootID", rootID)
      .set("length_or_documents", length_or_documents)
    return this.http.get<{ message: string, entries?: Entry[], entry_num?: number }>("http://localhost:3000/api/projects/gapAnalysis/entries/dones_inRoot", { params: params })

  }


  createReport(projectID: string) {
    const params = new HttpParams().set("projectID", projectID);
    return this.http.get<any>("http://localhost:3000/api/report", { params: params });
  }





}
