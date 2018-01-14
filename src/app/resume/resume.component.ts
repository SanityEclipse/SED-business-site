import { Component, OnInit } from '@angular/core';

import { DevExperience } from "./devExperience";
import { EducationExp } from "./educationExp";

import { DevExperienceService } from "./devExperience.service";
import { EducationExpService } from "./educationExp.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls:[ './resume.component.css' ]
})


export class ResumeComponent implements OnInit {

  devExperiences: DevExperience[] = [];

  educationExps: EducationExp[] = [];

  constructor (
    private DevExperienceService: DevExperienceService,
    private EducationExpService: EducationExpService
  ) {}

  ngOnInit(){
    this.getDevExperiences();
    // this.getEducationExps();
  }

  getDevExperiences(): void {
    this.DevExperienceService.getDevExperiences()
      .subscribe(devExperiences => this.devExperiences = devExperiences);
  }

  getEducationExps(): void {
    this.EducationExpService.getEducationExps()
      .subscribe(educationExps => this.educationExps = educationExps);
  }

}
