import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImgLoadingComponent } from './img-loading/img-loading.component';

const routes: Routes = [
  {
    path: 'img-loading',
    component: ImgLoadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
