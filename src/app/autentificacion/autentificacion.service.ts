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

     return this.http.get<any>("http://localhost:3000/usuario/"+id)
  }

  public habilitarlogeo() {
    return this.ingresar;
  }


  public getAutentificacionByToken(){
    return sessionStorage.getItem("token") 
  }

  getTipoUsuario(): string {
    const token = sessionStorage.getItem("token") as string;
    const decodedToken = this.decodificarJwt(token);
    return decodedToken.tipo;
  }

  private decodificarJwt(token: string): any {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
}
