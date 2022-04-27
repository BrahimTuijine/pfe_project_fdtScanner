import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsAllowedGuard implements CanActivate {
  canActivate(): boolean | Promise<boolean> | Promise<boolean> {
    return new Promise((resolve) => {
      const userdata = localStorage.getItem('userData');

      if (!userdata) resolve(false)
      else resolve(true)
      
    });
    
  }
}
