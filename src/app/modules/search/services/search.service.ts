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

  getOrgInfo(): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/vnd.github.baptiste-preview+json'
    });

    return this.http.get(environment.orgDetail, { headers: headers }).pipe(
      map((res: any) => {
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

    return this.http.get(environment.listOfRepos + '&' + queryString, { headers: headers }).pipe(
      map((res: any) => {
        return res.map((r: any) => {
          return new Repo(r);
        });
      }),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  doSearch(data: any, searchString: any): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(data.filter(eachObj => {
        return eachObj['name'].indexOf(searchString) != -1;
      })
      );
    });
  }

  sortRepos(data: any, sortConfig: any): Promise<any> {
    let sortBy = sortConfig['sort_by'];
    let fieldType = sortConfig['type'];
    return new Promise((resolve, reject) => {
      resolve(data.sort((a, b) => {

        let itemA = a[sortBy];
        let itemB = b[sortBy];

        if (fieldType === 'string') {
          // Use toUpperCase() to ignore character casing
          // And fallback to '' incase there is no value present
          itemA = itemA ? '' : itemA.toUpperCase();
          itemB = itemA ? '' : itemB.toUpperCase();
        }
        else if (fieldType === 'date') {
          itemA = new Date(itemA);
          itemB = new Date(itemB);
        }

        let comparison = 0;

        if (sortConfig['order'] === 'asc') {
          if (itemA > itemB) {
            comparison = 1;
          } else if (itemA < itemB) {
            comparison = -1;
          }
        }
        if (sortConfig['order'] === 'desc') {
          if (itemA < itemB) {
            comparison = 1;
          } else if (itemA > itemB) {
            comparison = -1;
          }
        }
        return comparison;
      }));
    });
  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const itemA = a.band.toUpperCase();
    const itemB = b.band.toUpperCase();

    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
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
