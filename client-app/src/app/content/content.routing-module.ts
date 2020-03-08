import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from './../shell/shell.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from '../core/authentication/auth.guard';

const routes: Routes = [
Shell.childRoutes([
    { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] }       
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContentRoutingModule { }