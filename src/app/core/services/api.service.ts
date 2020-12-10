import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http:HttpClient) { }

  getAll(path:string, id?:number) : Observable<any[]>{
    if(id){
      return this.http.get(`${environment.apiUrl}${path}`+`/`+ id).pipe(
        map(res => res as any[]));
    }
    else{
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(res => res as any[]));
    }
    
  }

  getOne(path: string, id?:number): Observable<any>{
    let geturl: string;
    if (id) {
      geturl = `${environment.apiUrl}${path}`+'/'+ id;
    } else {
      geturl = `${environment.apiUrl}${path}`
    }
    return this.http.get(geturl).pipe(
      map(res => res as any));
  }
}
