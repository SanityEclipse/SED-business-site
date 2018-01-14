import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }        from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';

import { CoreModule }       from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';

import { DevExpService } from './resume/dev-exp.service';
import { EduExpService } from './resume/edu-exp.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false
      }
    )
  ],
  declarations: [
    AppComponent
  ],
  providers: [ DevExpService, EduExpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
