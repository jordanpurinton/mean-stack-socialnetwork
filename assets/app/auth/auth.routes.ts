import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from './signup.component'
import {SigninComponent} from './signin.component'
import {LogoutComponent} from './logout.component'

export const AUTH_ROUTES: Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full'}, // /auth is the active path for ''
    { path: 'signup', component: SignupComponent}, // setting up our nested routes => ex: path: signup will be localhost/auth/signup
    { path: 'signin', component: SigninComponent},
    { path: 'logout', component: LogoutComponent}
];
