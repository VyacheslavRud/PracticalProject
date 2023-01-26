import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTemplateComponent } from './ng-template.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: '', component: NgTemplateComponent}
]

@NgModule({
  declarations: [
    NgTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class NgTemplateModule { }
