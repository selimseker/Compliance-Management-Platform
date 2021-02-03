import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardsRoutingModule } from './standards-routing.module';
import { StandardsHomeComponent } from './standards-home/standards-home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [StandardsHomeComponent],
  imports: [
    CommonModule,
    StandardsRoutingModule,
    HttpClientModule
  ]
})
export class StandardsModule { }
