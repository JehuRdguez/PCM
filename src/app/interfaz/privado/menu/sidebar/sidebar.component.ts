import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../servicios/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public objetounico:any = {};

  menuItems?:any[];

  constructor(private sideBarService: SidebarService, private router: Router) {
    this.menuItems = this.sideBarService.menu;
   }

   ngOnInit(): void {

    (<HTMLElement>document.querySelector('.e-resizable')).style.height = (window.innerHeight - 0) + 'px';   

    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);
    //console.log("OBJETO: ",this.objetounico);
  }
  private decodificarJwt(token:string):any
  {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  
}
