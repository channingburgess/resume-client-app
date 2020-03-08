import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { ContentRoutingModule } from './content.routing-module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,  
    ContentRoutingModule,
    SharedModule
  ]
})
export class ContentModule { }