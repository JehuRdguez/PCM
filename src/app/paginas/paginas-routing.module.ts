import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasComponent } from './paginas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos/equipos.component';
import { ValorequiposComponent } from './valorequipos/valorequipos.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DisponibilidaddiariaComponent } from './disponibilidaddiaria/disponibilidaddiaria.component';

const routes: Routes = [
  {path:'', component:PaginasComponent,
  children:[
    {path:'', component: InicioComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'configuraciones', component: ConfiguracionesComponent},
    {path:'equipos', component: EquiposComponent},
    {path:'valorequipos', component: ValorequiposComponent},
    {path:'checklist', component:ChecklistComponent},
    {path:'disponibilidaddiaria', component: DisponibilidaddiariaComponent}


  ]
},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
