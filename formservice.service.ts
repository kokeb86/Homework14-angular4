import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class FormserviceService {


  constructor(public http:Http) { }
  getData(url:string): Observable<Response>{
    return this.http.get(url);
  }

}
