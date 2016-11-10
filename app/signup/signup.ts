import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

//const styles   = require('./signup.css');
//const template = require('./signup.html');

@Component({
  selector: 'signup',
  //directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  //template: template,
  templateUrl: 'app/signup/signup.html',
   styleUrls: ['app/content/css/site.css','app/content/css/social-buttons.css'],
  //styles: [ styles ]
})

@Injectable()
export class Signup {
  
  constructor(public router: Router, public http: Http) {
  }
private url: string = 'http://jabolaniapi.azurewebsites.net/api/Account/register';
  signup(event: Event, Email: string, password: string, firstName: string, lastName: string) {
    event.preventDefault();
    //let data = "grant_type=password&username=" + username + "&password=" + password + "&client_id=ngAuthApp";
     let client_id='ngAuthApp';
    let body = JSON.stringify({ Email, password, firstName,lastName,client_id });
    this.http.post(this.url, body, { headers: contentHeaders })
      .subscribe(
        response => {
          //localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['login']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  login(event: Event) {
    event.preventDefault();
    //this.router.navigate(['/login']);
  }

}