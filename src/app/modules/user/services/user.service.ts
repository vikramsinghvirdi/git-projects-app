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
   * Creating XMLHttpRequest to handle CORS requests.
   * This can be done with npm packages like gatekeeper and OAuth2
   * to avoid openly passing secret keys. For demo purpose using
   * herokuapp reverse proxy url because GitHub Authentication call
   * does not support CORS
   * @param url : string - target url
   * @param methodType : string - GET/POST
   * @param params : object - parameters for url
   */
  createCORSRequest(url: any, methodType: any, params?: any): Promise<any> {

    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
      req.open(methodType,
        'https://cors-anywhere.herokuapp.com/' + url,
        true);
      req.setRequestHeader('Accept', 'application/json');
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      if (params) req.send(queryString);
      req.onreadystatechange = function () {
        if (req.readyState === 4) {
          let responseJSON = JSON.parse(req.response)
          if (responseJSON['error']) {
            reject(responseJSON.error_description)
          }
          else
            resolve(responseJSON);
        }
      }
      req.onerror = function () {
        reject('Failed to get response from server');
      }
    });
  }

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
    return new Promise((resolve, reject) => {
      this.createCORSRequest(environment.validateCodeUrl, 'POST', params).then((res) => {
        localStorage.setItem('access_token', res.access_token);
        resolve(res);
      }).catch((error) => {
        reject(error);
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
  logout(){
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