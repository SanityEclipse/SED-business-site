import { Injectable }              from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { EducationExp } from './educationExp';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class EducationExpService {

  private educationExpUrl = 'api/educationExps';

  constructor(
    private http: HttpClient
  ) {}

  getEducationExps (): Observable<EducationExp[]> {
    return this.http.get<EducationExp[]>(this.educationExpUrl)
  }

}
