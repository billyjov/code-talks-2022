import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor() {}

  public hasPermission(permission: string): boolean {
    console.log('🚚 given permission inside role service: ', permission);

    return true;
  }
}
