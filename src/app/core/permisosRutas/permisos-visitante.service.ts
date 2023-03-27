import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosVisitanteService implements CanActivate{

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

  ngOnInit(): void {
    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);
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
    if(!Boolean(this.AutentificacionService.getAutentificacionByToken())){
      return this.router.parseUrl("");
    }
    if(this.tipoUsuario2 == 'Visitante'){
      return true; 
    } else {
      this.router.parseUrl("/administrador");

      return false;

    }
  }
  }
