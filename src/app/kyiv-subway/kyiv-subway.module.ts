import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KyivSubwayComponent} from "./kyiv-subway.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: '', component: KyivSubwayComponent}
]

@NgModule({
  declarations: [
    KyivSubwayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})

export class KyivSubwayModule { }
