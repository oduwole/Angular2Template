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
var _this = this;
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var angular2_jwt_1 = require('angular2-jwt');
var angular2_busy_1 = require('angular2-busy');
//let styles   = require('./login.css');
//let template = require('./login.html');
var Login = (function () {
    //public router: Router, public http: Http, public authHttp: AuthHttp,private auth: Auth
    function Login(router, http, authHttp) {
        this.router = router;
        this.http = http;
        this.authHttp = authHttp;
        //private url: string = 'http://localhost:8036/api/api/oauth/token';
        //private url: string = 'http://jabolaniapi.azurewebsites.net/api/oauth/token';
        this.url = 'http://vboards.azurewebsites.net/token';
        //@Input() loading: IBusyConfig;
        //busy:Promise<any>;
        //busy:Subscription;
        this.idata = Object.assign({}, angular2_busy_1.BUSY_CONFIG_DEFAULTS);
    }
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            //directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
            //template: template,
            templateUrl: 'app/login/login.html',
            styleUrls: ['app/content/css/site.css', 'app/content/css/social-buttons.css'],
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, angular2_jwt_1.AuthHttp])
    ], Login);
    return Login;
}());
exports.Login = Login;
this.idata.backdrop = false;
this.idata.message = 'Please wait ...';
this.idata.template = '<div style="background-size: 72px;"><div style="margin-top: 110px; text-align: center; font-size: 18px; font-weight: 700;">{{message}}</div></div>';
this.idata.minDuration = 600;
//event: Event, 
login(event, Event, username, string, password, string);
{
    //alert('welcome');
    // , message: 'Loading...', backdrop: false, delay: 200, minDuration: 600
    event.preventDefault();
    var urlSearchParams = new http_1.URLSearchParams();
    var headers = new http_1.Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'application/json');
    var grant_type = 'password';
    var body = JSON.stringify({ username: username, password: password, grant_type: grant_type });
    var data = "grant_type=password&username=" + username + "&password=" + password + "&client_id=ngAuthApp";
    //this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
    console.log(body);
    //this.http.post('http://localhost:8036/api/api/oauth/token', data, { headers: wwwHeader })
    this.idata.busy = this.http.post(this.url, data, { headers: headers })
        .subscribe(function (response) {
        localStorage.setItem('access', response.json());
        localStorage.setItem('expires_in', response.json().expires_in);
        localStorage.setItem('userName', response.json().userName);
        localStorage.setItem('issued', response.json()['.issued']);
        localStorage.setItem('expires', response.json()['.expires']);
        localStorage.setItem('access_token', response.json().access_token);
        _this.router.navigateByUrl('/');
        //this.router.parent.navigateByUrl('/home');
    }, function (error) {
        //alert(error.text());
        console.log(error.json());
        console.log(error.text());
    });
}
logins(username, string, password, string);
{
    this.response = null;
    var grant_type = 'password';
    var json = JSON.stringify({ username: username, password: password, grant_type: grant_type });
    var params = 'json=' + json;
    var headers = new http_1.Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'application/json');
    this.authHttp.post(this.url, params, headers)
        .subscribe(function (response) { return _this.response = response.text(); }, function (error) { _this.response = error.json(), console.log(error.json()); });
}
//event: Event, 
/** login(username: string, password: string): Observable<TokenResponse[]>  {
   //event.preventDefault();
    let grant_type='password';
    let body = JSON.stringify({ username, password, grant_type });
     console.log(body);
      return this.http.post(this.url, body)
                 .map((response: Response) => response.json())
                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                 //.catch(this.handleError);
    }*/
signup(event, Event);
{
    event.preventDefault();
}
handleError(error, any);
{
    console.error(error);
    return Rx_1.Observable.throw(error.json().error || 'Server error');
}
var TokenResponse = (function () {
    function TokenResponse(id, token, issuer, expiryDate) {
        this.id = id;
        this.token = token;
        this.issuer = issuer;
        this.expiryDate = expiryDate;
    }
    return TokenResponse;
}());
exports.TokenResponse = TokenResponse;
//# sourceMappingURL=Login.js.map