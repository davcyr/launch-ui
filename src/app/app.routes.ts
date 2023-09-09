import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaunchPageComponent } from './launch/launch-page/launch-page.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'}
    //{ path: 'launch', component: LaunchPageComponent, pathMatch: 'full'}
];
