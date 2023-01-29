import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo:'Dashboard',
    icono:'nav-icon fas fa-tachometer-alt',
    subMenu: [
      {titulo:'inicio', url:'inicio',icono:'fa-solid fa-house-chimney'},

    ]
  }]

}
