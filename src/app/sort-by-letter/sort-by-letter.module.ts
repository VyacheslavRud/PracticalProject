import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortByLetterComponent} from "./sort-by-letter.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: SortByLetterComponent}
]

@NgModule({
  declarations: [SortByLetterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SortByLetterModule { }
