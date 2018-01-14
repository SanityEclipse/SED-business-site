import { Injectable }              from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { EduExperience } from './edu-experience';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class EduExpService {

  private eduExpsUrl = 'api/eduExps';

  constructor(
    private http: HttpClient
  ) {}

  getEduExps (): Observable<EduExperience[]> {
    return this.http.get<EduExperience[]>(this.eduExpsUrl)
  }

}
