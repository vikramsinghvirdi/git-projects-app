import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private clientId = '';
  private clientSecret = '';
  constructor(private http: HttpClient) { 
  }
}
