"use strict";
var router_1 = require("@angular/router");
var Home_1 = require("./home/Home");
var Login_1 = require("./login/Login");
var signup_1 = require("./signup/signup");
var app_auth_guard_1 = require("./app.auth.guard");
var appRoutes = [
    { path: '', component: Home_1.Home, canActivate: [app_auth_guard_1.AuthGuard] },
    { path: 'login', component: Login_1.Login },
    { path: 'signup', component: signup_1.Signup },
    { path: '**', redirectTo: '' }
];
exports.appRoutingProviders = [
    app_auth_guard_1.AuthGuard
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map