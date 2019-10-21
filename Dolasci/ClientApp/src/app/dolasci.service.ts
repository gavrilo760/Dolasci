import { Injectable } from '@angular/core';
import {Dolazak} from './Models/Dolazak';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { throwError as observableThrowError, BehaviorSubject, Observable} from 'rxjs';
import {catchError} from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DolasciService {

  constructor(private http:HttpClient, private datePipe: DatePipe) { }
  errorHandler(error: HttpErrorResponse)
  {
    return observableThrowError(error.message || "Server error");
  }

  getByRadnikId(id:string):Observable<Dolazak[]>
  {
    
    var params = new HttpParams().set('id', id);
    return this.http.get<Dolazak[]>('https://localhost:44311/api/Dolazak/getByRadnikId', {params}).pipe(catchError(this.errorHandler));
  }

  getByPretraga(godina: number, mesec: number, dan: number, radnikId?: number):Observable<Dolazak[]>
  {
    
   
    if(radnikId != null)
    {
      var params = new HttpParams().set('godina', godina + '').set('mesec', mesec + '').set('dan', dan + '').set('radnikId', radnikId + '');
    }
    else{
      var params = new HttpParams().set('godina', godina + '').set('mesec', mesec + '').set('dan', dan + '');
    }
    
    
    return this.http.get<Dolazak[]>('https://localhost:44311/api/Dolazak/getPretraga', {params});
  }

  getById(id:string):Observable<Dolazak>
  {
    var params = new HttpParams().set('id', id);
    return this.http.get<Dolazak>('https://localhost:44311/api/Dolazak/getById', {params}).pipe(catchError(this.errorHandler));
  }
  getPodrazumevaniById(id: string):Observable<Dolazak>
  {
    var params = new HttpParams().set('id', id);
    return this.http.get<Dolazak>('https://localhost:44311/api/PodrazumevaniDolazak/getById', {params}).pipe(catchError(this.errorHandler));
  }
  put(id: number, dolazak:Dolazak):Observable<Dolazak>
  {
    let i:string = id + '';
    var params = new HttpParams().set('id', i);
    return this.http.put<Dolazak>('https://localhost:44311/api/Dolazak', dolazak, {params}).pipe(catchError(this.errorHandler));
  }
  putPodrazumevani(id: number, dolazak:Dolazak):Observable<Dolazak>
  {
    let i:string = id + '';
    var params = new HttpParams().set('id', i);
    return this.http.put<Dolazak>('https://localhost:44311/api/PodrazumevaniDolazak', dolazak, {params}).pipe(catchError(this.errorHandler));
  }
  get():Observable<Dolazak[]>
  {
    return this.http.get<Dolazak[]>('https://localhost:44311/api/Dolazak').pipe(catchError(this.errorHandler));
  }
  getPodrazumevani():Observable<Dolazak[]>
  {
    return this.http.get<Dolazak[]>('https://localhost:44311/api/PodrazumevaniDolazak').pipe(catchError(this.errorHandler));
  }
  post(dolazak:Dolazak):Observable<Dolazak>
  {
    return this.http.post<Dolazak>('https://localhost:44311/api/Dolazak', dolazak).pipe(catchError(this.errorHandler));
  }

  UstringDatum(date: Date)
  {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  UstringVreme(date:Date)
  {
    return this.datePipe.transform(date, 'HH:mm');
  }

  Udate(datum:string, vreme:string)
  {
    let satDolaska:string = vreme.charAt(0) + vreme.charAt(1);
    let satDolaskan:number = 0;
    satDolaskan =  +satDolaska;
    

    let minutDolaska:string = vreme.charAt(3) + vreme.charAt(4);
    let minutDolaskan:number = 0;
    minutDolaskan = +minutDolaska;

    let godinaS:string = datum.charAt(6) + datum.charAt(7) + datum.charAt(8) + datum.charAt(9);
    let godinaN:number = 0;
    godinaN =  +godinaS;
    

    let mesecS:string = datum.charAt(3) + datum.charAt(4);
    let mesecN:number = 0;
    mesecN = +mesecS;
    

    let danS:string = datum.charAt(0) + datum.charAt(1);
    let danN:number = 0;
    danN = +danS;

     let d:Date = new Date();
    d.setUTCFullYear(godinaN, mesecN - 1, danN);
    d.setUTCHours(satDolaskan, minutDolaskan);
    return d;
  }

  delete(id:number)
  {
    let i:string = id + '';
    var params = new HttpParams().set('id', i);
    return this.http.delete<Dolazak>('https://localhost:44311/api/Dolazak', {params});
  }

  deletePodrazumevani(id:number):Observable<Dolazak>
  {
    let i:string = id + '';
    var params = new HttpParams().set('id', i);
    return this.http.delete<Dolazak>('https://localhost:44311/api/PodrazumevaniDolazak', {params});
  }

  pretraga(godina: number, mesec: number, dan: number, radnikId: number)
  {
    
  }

}
