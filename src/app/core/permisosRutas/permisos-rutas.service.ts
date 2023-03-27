import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosRutasService implements CanActivate{

  public objetounico: any = {};
  public tipoUsuario2: any;


  constructor(private router: Router, private AutentificacionService: AutentificacionService) { }

  private decodificarJwt(token: string): any {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  tipodeusuario2(tipo: any){
    if (tipo == 'Administrador'){
      this.tipoUsuario2 = 'Administrador';
      return this.tipoUsuario2;
    } else if (tipo == 'Visitante'){
      this.tipoUsuario2 = 'Visitante';
      return this.tipoUsuario2;
  }
}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  let token = sessionStorage.getItem("token") as string;
  this.objetounico = this.decodificarJwt(token);
  const expectedRole = route.data['expectedRole'];
  console.log("ROLLLLLLL: ", expectedRole);
  console.log("TIPOOOOO: ", this.tipoUsuario2);
  if(!Boolean(this.AutentificacionService.getAutentificacionByToken())){
    return this.router.parseUrl("");

  } else {
  return true;
  }
  
}
/*
if (this.tipoUsuario2 == expectedRole){
  return true;
} else {
  return this.router.parseUrl("");
}
*/

}

/*
const currentUrl = state.url;
// redirigir al usuario a la ruta de inicio de sesión
return this.router.parseUrl("/inicio").then(() => {
  // redirigir al usuario a la ruta anterior después de iniciar sesión
  return this.router.parseUrl(currentUrl);
});


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);
    const expectedRole = route.data['expectedRole'];
    console.log("ROLLLLLLL: ", expectedRole);
    console.log("TIPOOOOO: ", this.tipoUsuario2);
    if(!Boolean(this.AutentificacionService.getAutentificacionByToken())){
      return this.router.parseUrl("");
    }
    if (this.tipoUsuario2 == expectedRole){
    return true;
  } else if(this.tipoUsuario2 == "undefined"){
    const currentUrl = state.url;
    return this.router.parseUrl(currentUrl);
  } else {
    return this.router.parseUrl("");
  }
}


*/