import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Standard, Control, Guideline, RiskDriver, Threat } from "../data-models/standard.model";
import { Subject, Observable, forkJoin } from 'rxjs';
import { map, mergeMap, withLatestFrom, flatMap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class StandardsService {
  private standardID = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  standardID_asObseravle() {
    return this.standardID.asObservable();
  }

  // GETTERS
  // GET STANDARD BY NAME
  getStandard(name: string) {
    const params = new HttpParams().set("standard_id", name);
    console.log(name);

    return this.http.get<{ message: string, standard: Standard }>("http://localhost:3000/api/standards", { params: params });
  }

  getControlByID(stdName: string, controlID) {
    const params = new HttpParams().set("standardName", stdName)
      .set("controlID", controlID);
    return this.http.get<{ control: Control }>("http://localhost:3000/api/standards/control", { params: params });
  }

  // params: 
  //      standardName(will be removed in the future)
  //      array of control ids
  getArrayofControls(stdName: string, cnt_ids: string[]) {
    const observables: Observable<{ control: Control }>[] = [];
    cnt_ids.forEach(cnt_id => {
      observables.push(this.getControlByID(stdName, cnt_id));
    });
    return forkJoin(observables);
  }

  // GET DOMAINS
  getDomains(standard: Standard) {
    return this.getArrayofControls(standard.name, standard.domains)
  }

  getChildControls(rootControl: Control) {
    return this.getArrayofControls(rootControl.standard_id, rootControl.direct_childs);
  }


  //GET GUIDELINES
  getGuidelines(control_id: string, standard_id: string) {
    const params = new HttpParams().set("standard_id", standard_id)
      .set("control_id", control_id);
    return this.http.get<{ message: string, guidelines: Guideline[] }>("http://localhost:3000/api/standards/guideline", { params: params });
  }

  //GET THREATS
  getThreats(control_id: string, standard_id: string) {
    const params = new HttpParams().set("standard_id", standard_id)
      .set("control_id", control_id);
    return this.http.get<{ message: string, threats: Threat[] }>("http://localhost:3000/api/standards/threat", { params: params });
  }

  //GET RISKDRIVERS
  getRisks(control_id: string, standard_id: string) {
    const params = new HttpParams().set("standard_id", standard_id)
      .set("control_id", control_id);
    return this.http.get<{ message: string, risks: RiskDriver[] }>("http://localhost:3000/api/standards/risk_driver", { params: params });
  }



  // SETTERS

  // addStandard(newStd: Standard) {
  //   console.log("in std service");

  //   this.http.post<{ message: string, id: string }>("http://localhost:3000/api/standards", newStd)
  //     .subscribe(response => {
  //       console.log("standard added");

  //       this.standardID.next(response.id);
  //     });
  // };


  // addControl(newChild: Control, rootID: string){
  //   newChild.root = rootID;
  //   const param = {rootID:rootID, Control: newChild};    
  //   return this.http.post<{message: string, id:string}>("http://localhost:3000/api/standards/control", param);
  // }

  // addControl(newCont: Control) {
  //   return this.http.post<{ message: string }>("http://localhost:3000/api/standards/control", newCont);
  // }


  // linkControl_toStandard(control: Control, stdName: string) {
  //   const params = { stdName: stdName, controlID: control.cid, isLeaf: control.isLeaf_control };
  //   return this.http.put("http://localhost:3000/api/standards/controlLinking", params);
  // }














}
