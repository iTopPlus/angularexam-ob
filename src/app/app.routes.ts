import { Routes } from '@angular/router';
import { FirstimeComponentComponent } from './firstime-component/firstime-component.component';
import { SignInComponentComponent } from './sign-in-up/sign-in-component/sign-in-component.component';
import { SignUpComponentComponent } from './sign-in-up/sign-up-component/sign-up-component.component';
import { HomeComponentComponent } from './main/home-component/home-component.component';

export const routes: Routes = [
    {path: '', redirectTo: 'firsttime', pathMatch: 'full'},

    {path: 'firsttime', component: FirstimeComponentComponent},
    {path: 'sign-in', component: SignInComponentComponent},
    {path: 'sign-up', component: SignUpComponentComponent},

    {path: 'home', component: HomeComponentComponent}
];
