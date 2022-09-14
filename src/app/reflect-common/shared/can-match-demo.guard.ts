import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root',
})
export class CanMatchDemoGuard implements CanMatch {
  constructor(private roleService: RoleService) { }

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    return this.roleService.hasPermission('SUPER_ADMIN');
  }
}
