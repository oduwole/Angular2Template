import { Component, Injectable } from '@angular/core';
//import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router, CanActivate  } from '@angular/router';
import { AuthHttp, tokenNotExpired, JwtHelper  } from 'angular2-jwt';

//let styles = require('./home.css');
//let template = require('./home.html');



@Component({
  selector: 'home',
 // directives: [CORE_DIRECTIVES],
  // Here we specify the template we'll use
   templateUrl: 'app/home/home.html',
    styleUrls: ['app/content/css/site.css','app/content/css/social-buttons.css']
  //template: template,
  //styles: [styles]
})
//@Injectable
export class Home {//implements CanActivate {
  // Here we define this component's instance variables
  // They're accessible from the template
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();
//public router: Router, public http: Http, public authHttp: AuthHttp,private auth: Auth
  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    // We get the JWT from localStorage
    this.jwt = localStorage.getItem('jwt');
    // We also store the decoded JSON from this JWT
    //this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);

    var token = localStorage.getItem('access_token');

  console.log(
    //this.jwtHelper.decodeToken(token),
    //this.jwtHelper.getTokenExpirationDate(token),
    //this.jwtHelper.isTokenExpired(token)
  );
  }


  loggedIn() {
  return tokenNotExpired();
}

canActivate() {
    if(this.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  logout() {
    // Method to be called when the user wants to logout
    // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
  }

  callAnonymousApi() {
    console.log('http://localhost:3001/api/random-quote');
    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  }

  callSecuredApi() {
    // We call the secured API
    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }

  _callApi(type: string, url:string) {
    this.response = null;
    if (type === 'Anonymous') {
      // For non-protected routes, just use Http
      this.http.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => {this.response = error.text(),console.log(error)}
        );
    }
    if (type === 'Secured') {
      // For protected routes, use AuthHttp
      this.authHttp.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
  }
}
