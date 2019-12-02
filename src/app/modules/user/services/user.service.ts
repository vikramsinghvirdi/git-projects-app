import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
@Injectable()
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Validates the code returned by GitHub during authorization.
   * Once code is validated GitHub OAuth will return access_token
   * to be used across all API calls for authentication.
   * For now access_token is saved in local storage for simplicity.
   * For better implementation access token expiry should be considered 
   * and Rxjs stores should be used to track user sessions.
   * @param code : string
   */
  validateAuthorizationCode(code: any): Promise<any> {

    let params = {
      code: code,
      client_id: environment.clientId,
      client_secret: environment.clientSecret
    }

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http.post(environment.validateCodeUrl, JSON.stringify(params), {
        headers: headers,
        responseType: 'json'
      }).subscribe(res => {
        if (res['access_token'])
          localStorage.setItem('access_token', res['access_token']);
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });

  }

  /**
   * Gets details of user with access token set to header.
   * During authorization user agrees to share profile data 
   * and same can be retrieved using this call. RxJs stores
   * can be used to store current logged in user data. For simplicity 
   * right now we are just creating an instance of User model and returning
   * it to source point.
    */
  getLoggedInUser(): Observable<any> {

    let access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': 'token ' + access_token
    });

    return this.http.get(environment.loggedInUser, { headers: headers }).pipe(
      map((res: any) => {
        return new User(res);
      }),
      catchError((error: any) => {
        //On invalid access token or expired token
        //clear access_token and sends user to login page
        this.logout();
        return this.handleError(error);
      })
    );
  }

  /**
   * Clears local storage access_token and red-directs
   * user to login page for fresh login
   */
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
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
      errMsg = error.message.toString();
    }

    try {
      return throwError(new Error(error.status && error.status === 500 ? 'Internal server error' : errMsg));
    } catch (e) {
      return throwError(errMsg);
    }
  }



}