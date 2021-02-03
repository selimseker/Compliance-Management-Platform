import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsHomeComponent } from './stats-home/stats-home.component';


const routes: Routes = [
  {path:"stats", component:StatsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
