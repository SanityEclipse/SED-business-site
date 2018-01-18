import { Injectable }              from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map'

import { MySkill } from './my-skill';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class MySkillService {

  private mySkillsUrl = 'api/mySkills';

  constructor(
    private http: HttpClient
  ) {}

  getMySkills (): Observable<MySkill[]> {
    return this.http
      .get<MySkill[]>(this.mySkillsUrl)
  }

}
