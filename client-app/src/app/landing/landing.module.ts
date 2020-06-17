import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { LandingRoutingModule } from "./landing-routing.module";
import { MaterialModule } from "../material/material.module";
import { WorkitemComponent } from './workitem/workitem.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [IndexComponent, WorkitemComponent, SkillsComponent, AboutmeComponent],
  imports: [CommonModule, RouterModule, LandingRoutingModule, MaterialModule]
})
export class LandingModule {}
