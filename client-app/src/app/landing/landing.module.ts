import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { LandingRoutingModule } from "./landing-routing.module";
import { MaterialModule } from "../material/material.module";
import { WorkitemComponent } from './workitem/workitem.component';

@NgModule({
  declarations: [IndexComponent, WorkitemComponent],
  imports: [CommonModule, RouterModule, LandingRoutingModule, MaterialModule]
})
export class LandingModule {}
