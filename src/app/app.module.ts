import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }        from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';
import { InMemoryDataService2 }           from './in-memory-data2.service';


import { CoreModule }       from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';

import { DevExperienceService } from './resume/devExperience.service';
import { EducationExpService }  from './resume/educationExp.service';

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
  providers: [ DevExperienceService, EducationExpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
