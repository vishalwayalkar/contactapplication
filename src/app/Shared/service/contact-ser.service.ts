import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactSerService {

  // baseUrl:string = "http://localhost:3000";
baseUrl:string = "https://vsw-contactapplication-default-rtdb.firebaseio.com/";
  public option = { headers: new HttpHeaders().set("Content-type", "application/json") }

  constructor(private http:HttpClient) { }

  public formstError(error: any) {
    return throwError(error.any);
  }

  //get
  public getData(path:string):Observable<any>{
    return this.http.get(this.baseUrl + path).pipe(catchError(this.formstError));
  }

  //getId//number
  public getId(path: string, id: string): Observable<any> {
    const myUrl = `${this.baseUrl}${path}/${id}.json`;
    return this.http.get(myUrl).pipe(catchError(this.formstError));
  }

  //putId
  public putId(path: string, body: object = {}, id: string): Observable<any> {
    const myUrl = `${this.baseUrl}${path}/${id}.json`;
    return this.http.put(myUrl, body, this.option).pipe(catchError(this.formstError));
  }

  //post: object = {}
  public putData(path: string, body:object = {}): Observable<any> {
    return this.http.post(this.baseUrl + path, body, this.option).pipe(catchError(this.formstError));
    // return this.http.post(this.baseUrl + path, body, this.option).pipe(catchError(this.formstError));
  }

  //delete
  public deleteData(path: string, id: number): Observable<any> {
    const myUrl = `${this.baseUrl}${path}/${id}.json`;
    return this.http.delete(myUrl).pipe(catchError(this.formstError));
  }

}
