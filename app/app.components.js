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
var router_1 = require('@angular/router');
var AppComponent = (function () {
    //constructor(
    //private _messageService: MessageService,
    //private _modalService: ModalService) {
    //}
    function AppComponent(router) {
        this.router = router;
        this.menuItems = [
            { caption: 'Dashboard', link: [''], useAsDefault: true },
            { caption: 'Vehicles', link: [''] },
            { caption: 'Characters', link: [''] },
            { caption: 'Login', link: ['/login'] }
        ];
    }
    AppComponent.prototype.loggedIn = function () {
        localStorage.getItem('access_token');
        var ddate = localStorage.getItem('expires');
        var d = Date.parse(ddate);
        var j = new Date().toISOString();
        var d2 = Date.parse(j);
        //return tokenNotExpired('access_token');
        //console.log(d>d2);
        return d > d2; //date.isBefore(new Date());
    };
    AppComponent.prototype.login = function () {
        this.router.navigate(['login']);
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('access');
        localStorage.removeItem('access_token');
        localStorage.removeItem('appT');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('userName');
        localStorage.removeItem('issued');
        localStorage.removeItem('expires');
        //this.userProfile = undefined;
        this.router.navigate(['']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.components.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.components.js.map