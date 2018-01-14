import { Component, OnInit } from '@angular/core';

import { DevExperience } from "./dev-experience";
import { EduExperience } from "./edu-experience";

import { DevExpService } from "./dev-exp.service";
import { EduExpService } from "./edu-exp.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls:[ './resume.component.css' ]
})


export class ResumeComponent implements OnInit {

  devExps: DevExperience[] = [];
  eduExps: EduExperience[] = [];

  constructor (
    private DevExpService: DevExpService,
    private EduExpService: EduExpService
  ) {}

  ngOnInit(){
    this.getDevExps();
    this.getEduExps();
  }

  getDevExps(): void {
    this.DevExpService.getDevExps()
      .subscribe(devExps => this.devExps = devExps);
  }

  getEduExps(): void {
    this.EduExpService.getEduExps()
      .subscribe(eduExps => this.eduExps = eduExps);
  }

}
