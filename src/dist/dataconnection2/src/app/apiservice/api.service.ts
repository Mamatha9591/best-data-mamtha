// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
// import { throwError, Observable } from 'rxjs';
// import { Data } from '../model/data';
// import { retry, catchError, map } from 'rxjs/operators';
// import { Reply } from '../model/reply';
// import { Companydetails } from '../model/companydetails';
// import { Sector } from '../model/sector';
// import { City } from '../model/city';
// import { Industry } from '../model/industry';
// import { Information } from '../model/information';


// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   getCompany(arg0: any) {
//     throw new Error("Method not implemented.");
//   }
//   //json file link
//   base_path = 'http://c5be3681.ngrok.io/api/v1/getCompany';
//   base_path1 = 'http://c5be3681.ngrok.io/api/v1/addPostComment';
//   base_path2 = 'http://c5be3681.ngrok.io/api/v1/getCompany/';
//   base_path3 = 'http://c5be3681.ngrok.io/api/v1/getSector';
//   base_path4 = 'http://c5be3681.ngrok.io/api/v1/getCity';
//   base_path5 = 'http://c5be3681.ngrok.io/api/v1/getIndustry';
//   base_path6 = 'http://c5be3681.ngrok.io/api/v1/addCompanyInfo'


//   constructor(private http: HttpClient) { }

//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   }
//   // Handle API errors
//   handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: ${error.error}`);
//     }
//     // return an observable with a user-facing error message
//     return throwError(
//       'Something bad happened; please try again later.');
//   };

//   // private extractData(res: Response) {
//   //   let body = res;
//   //   return body || [];
//   // }

//   // Get single student data by company name
//   // Get single student data by ID
//   getCompanyByName(CompanyName: string): Observable<Companydetails> {
//     return this.http
//        .get<Companydetails>(this.base_path2 + CompanyName)
//       // .map(response => response.json() as Companydetails[])
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       )
//   }


//   //getting all the data
//   getList(): Observable<Companydetails[]> {
//     return this.http
//       .get<Companydetails[]>(this.base_path)
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       )
//   }
//   // getting Sectors
//   getSectorList(): Observable<Sector[]> {
//     return this.http
//       .get<Sector[]>(this.base_path3)
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       )
//   }

//   // getting City
//   getCityList(): Observable<City[]> {
//     return this.http
//       .get<City[]>(this.base_path4)
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       )
//   }

//   // getting Industry
//   getIndustryList(): Observable<Industry[]> {
//     return this.http
//       .get<Industry[]>(this.base_path5)
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       )
//   }

//   // getAllArticles(): Observable<Data[]> {
//   //   return this.http.get(this.base_path+"/get-article")
//   //                 .map(this.extractData)
//   //            .catchError(this.handleError);

//   //   }

//   // getBooks(): Observable<any> {
//   //   return this.http.get(this.base_path, this.httpOptions).pipe(
//   //     map(this.Data),
//   //     catchError(this.handleError));
//   // }

//   // Create a new item or post Api for reply form
//   createItem(item): Observable<Reply[]> {
//     return this.http
//       .post<Reply[]>(this.base_path1, JSON.stringify(item), this.httpOptions)
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       )
//   }

//   // Create a new item or post Api for update
//   createInfo(info): Observable<Information[]>{
//     return this.http
//       .post<Information[]>(this.base_path6, JSON.stringify(info), this.httpOptions)
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       )
//   }

//    // Update item by Company name
//    updateItem(CompanyName, item): Observable<Companydetails[]> {
//     return this.http
//       .put<Companydetails[]>(this.base_path + CompanyName, JSON.stringify(item), this.httpOptions)
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       )
//   }
// }
