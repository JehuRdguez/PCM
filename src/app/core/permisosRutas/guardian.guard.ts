import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor(private router: Router, private AutentificacionService: AutentificacionService) { 
    this.tipodeusuario2(this.AutentificacionService.getTipoUsuario());
  }
  public objetounico: any = {};
  public tipoUsuario2: any;
  public redirectUrl: string | undefined;

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


canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);
    const expectedRole = route.data['expectedRole'];
    console.log("ROLLLLLLL: ", expectedRole);
    console.log("TIPOOOOO: ", this.tipoUsuario2);
    this.tipoUsuario2 = this.AutentificacionService.getTipoUsuario();
    if (this.tipoUsuario2 == expectedRole) {
      return true;
    } else {
      return this.router.parseUrl("");
    }
  }
/*
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  const tipoUsuario = this.tipoUsuario2;

  if (tipoUsuario) {
    // Usuario autenticado, permitir acceso a la ruta solicitada si corresponde a su tipo de usuario
    const urlPermitida = tipoUsuario === 'Administrador' ? ['/administrador/bitacora'] : ['/visitante/bitacorav'];
    if (urlPermitida.includes(state.url)) {
      return true;
    } else {
      // Redireccionar al usuario a la URL previa
      const previousUrl = this.router.parseUrl(state.url).root.children['primary'].segments.map(segment => segment.path).join('/');
      this.router.navigate([previousUrl]);
      return false;
    }
  } else {
    // Usuario no autenticado, redireccionar al login
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
*/
}