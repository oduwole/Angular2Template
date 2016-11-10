import { Component, Injectable  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
//import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers, RequestOptions, Response, URLSearchParams  } from '@angular/http';
import { contentHeaders, wwwHeader } from '../common/headers';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { AuthHttp } from 'angular2-jwt';

//let styles   = require('./login.css');
//let template = require('./login.html');

@Component({
  selector: 'login',
  //directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  //template: template,
  templateUrl: 'app/login/login.html',
    styleUrls: ['app/content/css/site.css','app/content/css/social-buttons.css'],
  //styles: [ styles ]
})

@Injectable()
export class Login {
  //public router: Router, public http: Http, public authHttp: AuthHttp,private auth: Auth
  constructor( public router: Router, public http: Http, public authHttp: AuthHttp) {}
//private url: string = 'http://localhost:8036/api/api/oauth/token';
//private url: string = 'http://jabolaniapi.azurewebsites.net/api/oauth/token';
private url: string = 'http://vboards.azurewebsites.net/token';
response: string;
//event: Event, 
  login(event: Event,username: string, password: string) {
    //alert('welcome');
     

    event.preventDefault();
    let urlSearchParams = new URLSearchParams();
    var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', 'application/json');
    let grant_type='password';
    let body = JSON.stringify({ username, password, grant_type });
    let data = "grant_type=password&username=" + username + "&password=" + password + "&client_id=ngAuthApp";
    //this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
    console.log(body);
    //this.http.post('http://localhost:8036/api/api/oauth/token', data, { headers: wwwHeader })
    this.http.post(this.url, data, { headers: headers })
      .subscribe(
        response => {
          localStorage.setItem('access', response.json());
           localStorage.setItem('expires_in', response.json().expires_in);
            localStorage.setItem('userName', response.json().userName);
             localStorage.setItem('issued', response.json()['.issued']);
             localStorage.setItem('expires', response.json()['.expires']);
             
          localStorage.setItem('access_token', response.json().access_token);
          this.router.navigateByUrl('/');
          //this.router.parent.navigateByUrl('/home');
        },
        error => {
          //alert(error.text());
          console.log(error.json());
          console.log(error.text());
        }
      );
  }

  logins(username: string, password: string){
     this.response = null;
     let grant_type='password';
    var json = JSON.stringify({ username, password, grant_type });
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization', 'application/json');
     this.authHttp.post(this.url,params,headers)
        .subscribe(
          response => this.response = response.text(),
          error => {this.response = error.json(),console.log(error.json())}
        );
   /** 
     console.log(params);   
   // return 
   console.log(this.http.post(this.url,params,{headers: headers}));*/
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
  signup(event: Event) {
    event.preventDefault();
    //this.router.navigateByUrl('/signup');
    //this.router.parent.navigateByUrl('/signup');
  }

   handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

export class TokenResponse {
    constructor(
        public id: Date, 
        public token: string, 
        public issuer:string,
        public expiryDate: Date
        ){}
}