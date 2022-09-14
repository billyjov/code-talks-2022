import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InjectProviderService {
  public hasRole(): boolean {
    console.log('🚚 Yeah hasRole() method was called');

    return true;
  }


  public getUserByRole(role: string) {
    console.log('🥂 Yeah getUserByRole() done right: ', role);
  }
}
