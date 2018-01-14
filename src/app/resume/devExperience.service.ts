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

  private devExperiencesUrl = 'api/dev-experiences';

  constructor(
    private http: HttpClient,
    private devExperienceService: HttpHeaders
  ) {}

  getDevExperiences (): Observable<DevExperience[]> {
    return this.http.get<DevExperience[]>(this.devExperiencesUrl)
      // .pipe(
      //   tap(devExperiences => this.log(`fetched devExperiences`)),
      //   catchError(this.handleError('getDevExperiences', []))
      // );
  }

  // private log(message: string) {
  //   this.devExperienceService.add('HeroService: ' + message);
  // }

}
