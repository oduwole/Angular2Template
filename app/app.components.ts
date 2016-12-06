import { Component } from '@angular/core';
import { AuthHttp, tokenNotExpired  } from 'angular2-jwt';
import {Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.components.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  public menuItems = [
   { caption: 'Dashboard', link: [''], useAsDefault: true },
  { caption: 'Vehicles', link:  [''] },
  { caption: 'Characters', link:  [''] },
    { caption: 'Login', link: ['/login'] }
  ];
 //constructor(
    //private _messageService: MessageService,
    //private _modalService: ModalService) {
  //}
  constructor(public router: Router){

  }

   loggedIn() {
     localStorage.getItem('access_token');
     let ddate=localStorage.getItem('expires');
    var d=Date.parse(ddate);
    var j=new Date().toISOString();
    var d2=Date.parse(j);
    //return tokenNotExpired('access_token');
    //console.log(d>d2);
    return d > d2; //date.isBefore(new Date());
  }
  login(){
    this.router.navigate(['login']);
  }


  logout(){
    localStorage.removeItem('access');
     localStorage.removeItem('access_token');
    localStorage.removeItem('appT');
      localStorage.removeItem('expires_in');
            localStorage.removeItem('userName');
             localStorage.removeItem('issued');
             localStorage.removeItem('expires');
             
    //this.userProfile = undefined;
    this.router.navigate(['']);
  }
 }