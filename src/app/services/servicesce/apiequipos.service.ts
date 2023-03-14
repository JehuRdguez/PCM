import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipos } from 'src/app/modeloce/equipos.model';

const equiposUrl = 'http://localhost:8080/api/acumulado';

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
  /* getAlEquipos */
  
  // getAll(): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(baseUrl);
  // }

  // get(id: any): Observable<Tutorial> {
  //   return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  // }

  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title: any): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }
}
