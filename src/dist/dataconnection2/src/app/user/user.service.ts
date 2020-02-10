import { Injectable } from '@angular/core';

import { Observable, of, Subject, throwError, pipe } from 'rxjs';

import { Companydetails } from './user.data'
import {Contacts } from './user.contact'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Reply } from '../model/reply';
import { retry, catchError, tap } from 'rxjs/operators';
import { Information } from '../model/information';

@Injectable()
export class UserService {

    base_path = 'api/v1/getCompany';
    base_path1 = 'api/v1/addPostComment';
    base_path2 = 'api/v1/getCompany/';
    base_path3 = 'api/v1/getSector';
    base_path4 = 'api/v1/getCity';
    base_path5 = 'api/v1/getIndustry';
    base_path6 = 'api/v1/addCompanyInfo'
    base_path7 = 'api/v1/updateContact/';

  
  
  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

getList(): Observable<Companydetails[]> {
    return this.http
      .get<Companydetails[]>(this.base_path)
  }

    // Get single student data by company name
   getCompanyByName(CompanyName: string): Observable<Companydetails> {
    return this.http.get<Companydetails>(this.base_path2+CompanyName)
    
  }
  // Create a new item or post Api
  createItem(item): Observable<Reply> {
    return this.http
      .post<Reply>(this.base_path1, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Create a new item or post Api for update
  createInfo(info): Observable<Information[]>{
    return this.http
      .post<Information[]>(this.base_path6, JSON.stringify(info), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  updateTraveller( ContactId:any,traveller: Contacts){
    return this.http.put(`${this.base_path7}${ContactId}`, traveller);
  }

  

}