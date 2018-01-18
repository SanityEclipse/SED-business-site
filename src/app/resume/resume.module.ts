import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';

import { DevExpService } from './dev-exp.service';
import { EduExpService } from './edu-exp.service';
import { MySkillService } from './my-skill.service';

import { ResumeComponent } from './resume.component';

@NgModule({
  imports:[ CommonModule, ResumeRoutingModule ],
  exports:[],
  declarations: [ ResumeComponent ],
  providers:[ DevExpService, EduExpService, MySkillService ]
})

export class ResumeModule {}
