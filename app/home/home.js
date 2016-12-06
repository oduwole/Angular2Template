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
var core_1 = require('@angular/core');
//import { CORE_DIRECTIVES } from '@angular/common';
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
//let styles = require('./home.css');
//let template = require('./home.html');
var Home = (function () {
    //public router: Router, public http: Http, public authHttp: AuthHttp,private auth: Auth
    function Home(router, http, authHttp) {
        this.router = router;
        this.http = http;
        this.authHttp = authHttp;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        // We get the JWT from localStorage
        this.jwt = localStorage.getItem('jwt');
        // We also store the decoded JSON from this JWT
        //this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
        var token = localStorage.getItem('access_token');
        console.log();
    }
    Home.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    Home.prototype.canActivate = function () {
        if (this.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    Home.prototype.logout = function () {
        // Method to be called when the user wants to logout
        // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
        localStorage.removeItem('jwt');
        this.router.navigateByUrl('/login');
    };
    Home.prototype.callAnonymousApi = function () {
        console.log('http://localhost:3001/api/random-quote');
        this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
    };
    Home.prototype.callSecuredApi = function () {
        // We call the secured API
        this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
    };
    Home.prototype._callApi = function (type, url) {
        var _this = this;
        this.response = null;
        if (type === 'Anonymous') {
            // For non-protected routes, just use Http
            this.http.get(url)
                .subscribe(function (response) { return _this.response = response.text(); }, function (error) { _this.response = error.text(), console.log(error); });
        }
        if (type === 'Secured') {
            // For protected routes, use AuthHttp
            this.authHttp.get(url)
                .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
        }
    };
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            // directives: [CORE_DIRECTIVES],
            // Here we specify the template we'll use
            templateUrl: 'app/home/home.html',
            styleUrls: ['app/content/css/site.css', 'app/content/css/social-buttons.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, angular2_jwt_1.AuthHttp])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=Home.js.map