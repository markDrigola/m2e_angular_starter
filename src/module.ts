import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';


import { AppComponent } from './app/app.component';
import {data} from '../data/configs/system/main';
import {Test} from './app/test.service';

import { data as metadata } from '../metadata';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: 'test', useValue: metadata
    },
    {
      provide: Test, useValue: data
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject('test') private test) {
    console.log(test.test());
  }
}
