import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { Home }               from './home/Home';
import { Login }              from './login/Login';
import { Signup }       from './signup/signup';
import { AuthGuard }                   from './app.auth.guard';

const appRoutes: Routes = [
  { path: '', component: Home, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
       AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
