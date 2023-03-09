import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiequiposService {

  constructor(private http: HttpClient) { }

  postEquipo(data: any){
    return this.http.post<any>("http://localhost:3000/acumulado/",data);
  }
  getEquipo(){
    return this.http.get<any>("http://localhost:3000/acumulado/");
  }
}
