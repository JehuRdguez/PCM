import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { EquiposComponent } from './equipos/equipos.component';
//import { ValorequiposComponent } from './valorequipos/valorequipos.component';
//import { ChecklistComponent } from './checklist/checklist.component';
//import { DisponibilidaddiariaComponent } from './disponibilidaddiaria/disponibilidaddiaria.component';
import { HorometrosComponent } from './paginas/admin/horometros/horometros.component';
import { PreventivosComponent } from './paginas/admin/preventivos/preventivos.component';
import { SemanalesComponent } from './paginas/admin/semanales/semanales.component';
import { ManpowerComponent } from './paginas/admin/manpower/manpower.component';
import { KpisComponent } from './paginas/admin/kpis/kpis.component';
import { DashboardComponent } from './paginas/admin/dashboard/dashboard.component';
import { PrincipalComponent } from './principal.component';
import { LoginComponent } from '../login/inicio/login/login.component';
import { BitacoraComponent } from './paginas/admin/bitacora/bitacora.component';

const rutas: Routes = [
  {path:'', component:LoginComponent},
  {path:'administrador',  component: PrincipalComponent,
  children:[
    {path:'dashboard', component: DashboardComponent},
    {path:'administrador', component: DashboardComponent},
    {path:'horometros', component: HorometrosComponent},
    {path:'preventivos', component: PreventivosComponent},
    {path:'semanales', component: SemanalesComponent},
    {path:'bitacora', component: BitacoraComponent},
    {path:'manpower', component: ManpowerComponent},
    {path:'kpis', component: KpisComponent},
    //{path:'equipos', component: EquiposComponent},
    //{path:'valorequipos', component: ValorequiposComponent},
    //{path:'checklist', component:ChecklistComponent},
    //{path:'disponibilidaddiaria', component: DisponibilidaddiariaComponent}

  ]
},
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
