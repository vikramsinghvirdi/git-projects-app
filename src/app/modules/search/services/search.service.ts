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


  /**
   * Fetches organization details
   * Org name is passed thru environment.orgDetail URL
  */
  getOrgInfo(): Observable<any> {

    let access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/vnd.github.baptiste-preview+json',
      'Authorization': 'token ' + access_token
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

  /**
   * Fetches list of all Repos for an organization.
   * environment.listOfRepos URL contains organization name for API endpoint
   * and this function accepts one object input page with pagination details
   * per_page : to specify number of entires per page
   * page :  to specify current page number to fetch
    * @param page - Object 
   */
  getListOfAllRepos(page: any): Observable<any> {

    let access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/vnd.github.baptiste-preview+json',
      'Authorization': 'token ' + access_token
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

  /**
   * Performs in-browser search on repo list which can be implemented
   * thru API end point. For now this function takes array of repos in 'data' argument and
   * searches for matches of 'searchString' and returns all the matches found in form of Promise
    * @param data - array
    * @param searchString - string
   */
  doSearch(data: any, searchString: any): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(data.filter(eachObj => {
        return eachObj['name'].indexOf(searchString) != -1;
      })
      );
    });
  }

  /**
   * Performs in-browser sorting on repo list which can be implemented
   * thru API end point. For now this function takes array of repos in 'data' argument and
   * 'sortConfig' and returns sorted array in form of Promise. 
   * 'sortConfig' contains - 
   * 'sortBy' to specify field name
   * 'type' to specify data type for field name
   * 'order' to specify sorting order
    * @param data - array
    * @param sortConfig - object
  */
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
          itemA = itemA.length<0 ? '' : itemA.toUpperCase();
          itemB = itemB.length<0 ? '' : itemB.toUpperCase();
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

    
  /**
   * This function handles error thrown by HTTP call.
    * @param error - HttpErrorResponse
  */
  private handleError(error: HttpErrorResponse | any) {
    let errMsg: string;
    if (Error && error instanceof Error) {
      errMsg = error['error']; // || error.toString()
    } else {
      error.message.toString();
    }

    try {
      return throwError(new Error(error.status && error.status === 500 ? 'Internal server error' : errMsg));
    } catch (e) {
      return throwError(errMsg);
    }
  }

}
