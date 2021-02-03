import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAuditorHomeComponent } from './create-auditor-home/create-auditor-home.component';
import { AuditorsListComponent } from "./auditors-list/auditors-list.component";



const routes: Routes = [
  {path:"auditors", component:AuditorsListComponent},
  {path:"auditors/create", component:CreateAuditorHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class AuditorRoutingModule { }

