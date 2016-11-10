import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

export const wwwHeader=new Headers();
wwwHeader.append( 'Content-Type','application/x-www-form-urlencoded');
wwwHeader.append('Accept', 'application/json');