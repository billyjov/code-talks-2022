import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { inject } from '@angular/core';

import { InjectComponent } from './inject.component';
import { InjectProviderService } from './inject-provider/inject-provider.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InjectComponent,
    RouterModule.forChild([
      {
        path: '',
        component: InjectComponent,
        data: {
          role: 'ADMIN',
        },

        // 🎉PATTERN Use inject as replacement for Guard?
        // canActivate: [() => inject(InjectProviderService).hasRole()],

        // 🎉PATTERN
        // resolve: {
        //   users: (snapshot: ActivatedRouteSnapshot) =>
        //     inject(InjectProviderService).getUserByRole(snapshot.data['role']),
        // },
      },
    ]),
  ],
})
export class InjectModule {}
