import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  cerrarSesion() {
    var confirmacion = confirm("¿Desea cerrar sesión?")
    if(confirmacion ==true){
    sessionStorage.clear();
    this.router.navigate(['/']);
    //this.router.navigate(['/inicio/login']);
  }
  }

}