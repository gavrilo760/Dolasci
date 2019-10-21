import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Radnik} from './radnici/Radnik';
import { throwError as observableThrowError, BehaviorSubject, Observable} from 'rxjs';
import {catchError} from  'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RadniciService {

  private behaviorSubject = new BehaviorSubject(new Radnik());
  radnik = this.behaviorSubject.asObservable();

 

  constructor(private http:HttpClient) { }
  errorHandler(error: HttpErrorResponse)
  {
    return observableThrowError(error.message || "Server error");
  }

  getRadnici(): Observable<Radnik[]>
  {
    return this.http.get<Radnik[]>('https://localhost:44311/api/Radnik').pipe(catchError(this.errorHandler));
  }

  deleteRadnik(id:number):Observable<Radnik>
  {
    let i:string = id + '';
    var params = new HttpParams().set('id', i);
    return this.http.delete<Radnik>('https://localhost:44311/api/Radnik', {params});
  }

  add(radnik: Radnik):Observable<Radnik>
  {
    return this.http.post<Radnik>('https://localhost:44311/api/Radnik', radnik).pipe(catchError(this.errorHandler));
  }

  

  put(id: number, radnik:Radnik):Observable<Radnik>
  {
    let i:string = id + '';
    var params = new HttpParams().set('id', i);
    return this.http.put<Radnik>('https://localhost:44311/api/Radnik', radnik, {params}).pipe(catchError(this.errorHandler));
  }

  getById(id: string):Observable<Radnik>
  {
    var params = new HttpParams().set('id', id);
    return this.http.get<Radnik>('https://localhost:44311/api/Radnik/getById', {params}).pipe(catchError(this.errorHandler));
  }

  prebaci(radnik: Radnik)
  {
    this.behaviorSubject.next(radnik);
  }

}
