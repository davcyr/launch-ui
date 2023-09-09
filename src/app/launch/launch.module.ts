import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { RouterModule } from '@angular/router';
import { LAUNCH_ROUTES } from './launch.routes';
//import { AuthLibModule } from 'auth-lib';
//import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
  //  AuthLibModule,
  //  SharedLibModule,
    RouterModule.forChild(LAUNCH_ROUTES)
  ],
  declarations: [
    LaunchPageComponent
  ]
})
export class LaunchModule { }
