import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgLoadingComponent } from './img-loading/img-loading.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { ReflectCommonComponent } from './reflect-common/reflect-common.component';

@NgModule({
  declarations: [AppComponent, ImgLoadingComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    // 🎈 Angular image loading technique v14.2.0
    NgOptimizedImage,
    AppRoutingModule,

    // Standalone components
    ReflectCommonComponent,
    TypedFormComponent,
  ],
  providers: [
    // 🎈 Use this if you have a base url for images v14.2
    // provideImgixLoader('')
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
