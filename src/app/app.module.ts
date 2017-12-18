import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';

import { AppComponent }     from './app.component';

import { CoreModule }       from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
