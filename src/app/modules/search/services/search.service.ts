import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Repo } from '../../../models/Repo/repo.model';
import { Org } from '../../../models/Org/org.model';
@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {

  }

  getOrgInfo(): Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/vnd.github.baptiste-preview+json'
    });

    return this.http.get(environment.orgDetail, { headers: headers }).pipe(
      map((res :  any) => {
            return new Org(res);
      }),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );

  }

  getListOfAllRepos(page: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/vnd.github.baptiste-preview+json'
    });

    let queryString = Object.keys(page).map(key => key + '=' + page[key]).join('&');

    return this.http.get(environment.listOfRepos +'&'+queryString, { headers: headers }).pipe(
      map((res :  any) => {
        return res.map((r: any)=>{
          return new Repo(r);
        });
      }),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse | any) {
    let errMsg: string;
    if (Error && error instanceof Error) {
      errMsg = error['error']; // || error.toString()
    } else {
      errMsg = error.error ? error.error : error.toString();
    }

    try {
      return throwError(new Error(error.status && error.status === 500 ? 'Internal server error' : errMsg));
    } catch (e) {
      return throwError(errMsg);
    }
  }

}
