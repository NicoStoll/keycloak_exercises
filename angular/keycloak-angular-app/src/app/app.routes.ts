import { Routes } from '@angular/router';
import { AppComponent } from './app-component/app-component';
import { canActivateAuthRole } from './guards/auth-role-guard';
import { Forbidden } from './components/forbidden/forbidden';
import { NotFound } from './components/not-found/not-found'

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivate: [canActivateAuthRole],
        data: { role : 'myrole'}
    },
    { 
        path: 'forbidden', 
        component: Forbidden 
    },
    {
        path: '**',
        component: NotFound
    }
];
