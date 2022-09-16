import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes, UrlSegment } from '@angular/router';

import { ImgLoadingComponent } from './img-loading/img-loading.component';
import { CanMatchDemoGuard } from './reflect-common/shared/can-match-demo.guard';
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
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazy-load/lazy-load.module').then((m) => m.LazyLoadModule),
  },
  {
    path: 'inject',
    loadChildren: () =>
      import('./inject/inject.module').then((m) => m.InjectModule),
  },
  {
    path: 'reflect',
    loadChildren: () =>
      import('./reflect-common/reflect-common.component').then(
        (m) => m.ReflectCommonComponent
      ),
    // loadComponent: () =>
    //   import('./reflect-common/reflect-common.component').then(
    //     (c) => c.ReflectCommonComponent
    //   ),

    // canMatch: [CanMatchDemoGuard],

    // Inline variant
    // canMatch: [(route: Route, segments: UrlSegment[]) => {
    //   console.log('hello')
    //   return true
    // }],
    // canActivate: [() => {
    //   console.log('activate')
    // }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
