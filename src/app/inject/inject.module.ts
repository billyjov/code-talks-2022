import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InjectComponent } from './inject.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InjectComponent,
    RouterModule.forChild([
      {
        path: '',
        component: InjectComponent,
      },
    ]),
  ],
})
export class InjectModule {}
