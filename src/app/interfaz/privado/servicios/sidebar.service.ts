import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo:'Registros',
    icono:'nav-icon fa-regular fa-file',
    subMenu: [
      {titulo:'Horómetros', url:'horometros',icono:'nav-icon fa-solid fa-gauge'},
      {titulo:'Preventivos', url:'preventivos',icono:'nav-icon fa-solid fa-truck-front'},
      {titulo:'Semanales', url:'semanales',icono:'nav-icon fa-solid fa-calendar-week'},
      {titulo:'Bitácora', url:'bitacora',icono:'nav-icon fa-solid fa-book-open'}
    ]
  }]

}
