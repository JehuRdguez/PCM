import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private ingresar: boolean = false;

  constructor(private http: HttpClient) {
  }

  public ingresarAplicativo(id:number) {

     return this.http.get<any>("http://localhost:3000/usuario/"+id);

  }

  public habilitarlogeo() {
    return this.ingresar;
  }
}
