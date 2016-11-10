"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http"); //, Http 
//import {APP_BASE_HREF} from '@angular/common';
var app_components_1 = require("./app.components");
//import { DashboardComponent } from './dashboard/dashboard';
var Login_1 = require("./login/Login");
var SignUp_1 = require("./signup/SignUp");
var Home_1 = require("./home/Home");
//import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
var angular2_jwt_1 = require("angular2-jwt");
//@NgModule({
//imports:      [ BrowserModule ],
//declarations: [ AppComponent ],
//bootstrap:    [ AppComponent ]
//})
//export class AppModule { }
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'login', component: Login_1.Login, data: {
                        title: 'Login'
                    }
                },
                { path: 'signup', component: SignUp_1.Signup, data: {
                        title: 'Signup'
                    }
                },
                { path: '', component: Home_1.Home, data: {
                        title: 'Home'
                    }
                }
            ])
        ],
        declarations: [
            app_components_1.AppComponent,
            Login_1.Login,
            SignUp_1.Signup,
            Home_1.Home
        ],
        providers: [
            //appRoutingProviders,
            //Auth,
            angular2_jwt_1.AuthHttp,
            angular2_jwt_1.provideAuth({
                headerName: 'Authorization',
                headerPrefix: 'bearer',
                tokenName: 'access_token',
                tokenGetter: (function () { return localStorage.getItem('access_token'); }),
                //globalHeaders: [{ 'Content-Type': 'application/x-www-form-urlencoded' }],
                noJwtError: true
            })
        ],
        bootstrap: [app_components_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map