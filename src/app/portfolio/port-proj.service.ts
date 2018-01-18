import { Injectable }              from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { PortProj } from './port-proj';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class PortProjService {

  private portProjsUrl = 'api/portProjs';

  constructor(
    private http: HttpClient
  ) {}

  getPortProjs (): Observable<PortProj[]> {
    return this.http.get<PortProj[]>(this.portProjsUrl)
  }

}
