import { Component, OnInit } from '@angular/core';

import { DevExperience } from "./dev-experience";
import { EduExperience } from "./edu-experience";
import { MySkill } from './my-skill';

import { DevExpService } from "./dev-exp.service";
import { EduExpService } from "./edu-exp.service";
import { MySkillService } from './my-skill.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls:[ './resume.component.css' ],
})

export class ResumeComponent implements OnInit {

  devExps  : DevExperience[] = [];
  eduExps  : EduExperience[] = [];
  mySkills : MySkill[]       = [];

  constructor (
    private DevExpService  : DevExpService,
    private EduExpService  : EduExpService,
    private MySkillService : MySkillService,
  ) {}


  ngOnInit() {
    this.getDevExps();
    this.getEduExps();
    this.getMySkills();
  }

  getDevExps(): void {
    this.DevExpService.getDevExps()
      .subscribe(devExps => this.devExps = devExps)
  }

  getEduExps(): void {
    this.EduExpService.getEduExps()
      .subscribe(eduExps => this.eduExps = eduExps);
  }

  getMySkills(): void {
    this.MySkillService.getMySkills()
      .subscribe(mySkills => this.mySkills = mySkills
        .sort(( a, b ) => {
          let x = a.skill.toLowerCase();
          let y = b.skill.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
      )
  }

}
