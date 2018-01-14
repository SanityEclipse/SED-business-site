import { Component, OnInit } from '@angular/core';

import { DevExperience } from "./dev-experience";

import { DevExpService } from "./dev-exp.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls:[ './resume.component.css' ]
})


export class ResumeComponent implements OnInit {

  devExperiences: DevExperience[] = [];

  constructor (
    private DevExpService: DevExpService,
  ) {}

  ngOnInit(){
    this.getDevExps();
  }

  getDevExps(): void {
    this.DevExpService.getDevExps()
      .subscribe(devExperiences => this.devExperiences = devExperiences);
  }

}
