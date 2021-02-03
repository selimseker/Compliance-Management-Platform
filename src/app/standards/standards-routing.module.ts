import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardsHomeComponent } from './standards-home/standards-home.component';


const routes: Routes = [
  {path:"standards", component:StandardsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardsRoutingModule { }
