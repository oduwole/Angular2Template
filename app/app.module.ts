import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule} from "@angular/http"; //, Http 
//import {APP_BASE_HREF} from '@angular/common';
import {BusyModule,BusyConfig} from 'angular2-busy';



import { AppComponent }   from './app.components';

import { InMemoryStoryService } from '../api/in-memory-story.service';
//import { DashboardComponent } from './dashboard/dashboard';
import {Login } from './login/Login';
import {Signup} from './signup/SignUp';
import {Home} from './home/Home';
import { routing,appRoutingProviders }     from './app.routes';
import { Auth } from './app.auth.service'
         
import { CONFIG, MessageService } from './shared/shared';

import { EntityService, ExceptionService, ModalComponent, ModalService, SpinnerComponent, SpinnerService, ToastComponent, ToastService } from './blocks/blocks';
//import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//@NgModule({
  //imports:      [ BrowserModule ],
  //declarations: [ AppComponent ],
  //bootstrap:    [ AppComponent ]
//})
//export class AppModule { }

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    NgbModule,
    BusyModule.forRoot(
            new BusyConfig({
                message: 'Don\'t panic!',
                backdrop: false,
                template: `
                    <div>{{message}}</div>
                `,
                delay: 200,
                minDuration: 600,
                wrapperClass: 'my-class'
            })
        ),
    RouterModule.forRoot([
  { path: 'login', component: Login, data: {
          title: 'Login'
        }
 },
  { path: 'signup', component: Signup, data: {
          title: 'Signup'
        }
 },
  { path: '', component: Home ,data: {
          title: 'Home'
        }
}])
  ],
  declarations: [
    AppComponent,
    Login,
    Signup,
    Home
  ],
  providers: [
    //appRoutingProviders,
    //Auth,
    AuthHttp,
    provideAuth({
            headerName: 'Authorization',
            headerPrefix: 'bearer',
            tokenName: 'access_token',
            tokenGetter: (() => localStorage.getItem('access_token')),
            //globalHeaders: [{ 'Content-Type': 'application/x-www-form-urlencoded' }],
            noJwtError: true
        })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}