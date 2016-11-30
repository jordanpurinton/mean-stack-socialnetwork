import {Routes, RouterModule} from '@angular/router'
import {MessagesComponent} from './messages/messages.component'
import {AuthenticationComponent} from './auth/authentication.component'
import {AUTH_ROUTES} from './auth/auth.routes'


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'}, // this route will always redirect to /messages
                                                            // set pathMatch to full so it ONLY reacts to '' if it is the full path
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES} // adding our child routes created in the auth routing fiile
];

export const routing = RouterModule.forRoot(APP_ROUTES); // this gets imported in our app.module