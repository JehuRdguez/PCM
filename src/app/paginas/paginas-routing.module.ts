import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasComponent } from './paginas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', component:PaginasComponent,
  children:[
    {path:'', component: InicioComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'configuraciones', component: ConfiguracionesComponent}


  ]
},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
