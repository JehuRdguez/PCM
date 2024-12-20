import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from './services/api.service';
import { AutentificacionService } from './autentificacion/autentificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConTic';

  navbarfixed:boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY > 100){
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
  
  constructor(private loginPrd:AutentificacionService){
    
  }
}

