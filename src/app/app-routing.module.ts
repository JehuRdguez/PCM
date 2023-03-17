import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { SesionesComponent } from './interfaz/publico/sesiones/sesiones.component';
import { PaginasRoutingModule } from './modulos/principal/principal-routing.module';
import { PrincipalComponent } from './modulos/principal/principal.component';

const routes: Routes = [
  {
    path: 'inicio', component: SesionesComponent,
    loadChildren: () => import('./modulos/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'administrador', component: PrincipalComponent,
    loadChildren: () => import('./modulos/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'visitante', component : PrincipalComponent,
    loadChildren: () => import('./modulos/principal/principal.module').then(m => m.PrincipalModule)
  },
  { path: "**", redirectTo: 'inicio/login' },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), PaginasRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
