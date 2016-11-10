import { Injectable }             from '@angular/core';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot }    from '@angular/router';
import { CanActivate }            from '@angular/router';
import { Auth }                   from './app.auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.authenticated()){
      if(this.auth.isAdmin()){
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    } else {
      // Save URL to redirect to after login and fetching profile to get roles
      localStorage.setItem('redirect_url', state.url);
      this.auth.login();
      this.router.navigate(['login']);
      return false;
    }
  }
}