import { Injectable }              from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { DevExperience } from './dev-experience';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class DevExpService {

  private devExpsUrl = 'api/devExps';

  constructor(
    private http: HttpClient
  ) {}

  getDevExps (): Observable<DevExperience[]> {
    return this.http.get<DevExperience[]>(this.devExpsUrl)
  }

}
