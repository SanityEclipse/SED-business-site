import { Injectable }              from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { DevExperience } from './devExperience';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class DevExperienceService {

  private devExperiencesUrl = 'api/devExperiences';

  constructor(
    private http: HttpClient
  ) {}

  getDevExperiences (): Observable<DevExperience[]> {
    return this.http.get<DevExperience[]>(this.devExperiencesUrl)
  }

}
