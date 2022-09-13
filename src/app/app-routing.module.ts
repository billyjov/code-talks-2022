import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImgLoadingComponent } from './img-loading/img-loading.component';
import { TypedFormComponent } from './typed-form/typed-form.component';

const routes: Routes = [
  {
    path: 'img-loading',
    component: ImgLoadingComponent,
  },
  {
    path: 'forms',
    component: TypedFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
