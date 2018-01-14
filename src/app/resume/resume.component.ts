import { Component, OnInit } from '@angular/core';

import { DevExperience } from "./devExperience";

import { DevExperienceService } from "./devExperience.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls:[ './resume.component.css' ]
})


export class ResumeComponent implements OnInit {

  devExperiences: DevExperience[] = [];

  constructor (
    private DevExperienceService: DevExperienceService,
  ) {}

  ngOnInit(){
    this.getDevExperiences();
  }

  getDevExperiences(): void {
    this.DevExperienceService.getDevExperiences()
      .subscribe(devExperiences => this.devExperiences = devExperiences);
  }

}
