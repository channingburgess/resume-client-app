import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }