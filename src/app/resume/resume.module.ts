import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';

import { ResumeComponent } from './resume.component';

@NgModule({
  imports:[ CommonModule, ResumeRoutingModule ],
  exports:[],
  declarations: [ ResumeComponent ],
  providers:[]
})

export class ResumeModule {}
