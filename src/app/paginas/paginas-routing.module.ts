import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginasComponent } from './paginas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos/equipos.component';
import { ValorequiposComponent } from './valorequipos/valorequipos.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DisponibilidaddiariaComponent } from './disponibilidaddiaria/disponibilidaddiaria.component';
import { HorometrosComponent } from './horometros/horometros.component';
import { PreventivosComponent } from './preventivos/preventivos.component';
import { SemanalesComponent } from './semanales/semanales.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { ManpowerComponent } from './manpower/manpower.component';
import { KpisComponent } from './kpis/kpis.component';

const routes: Routes = [
  {path:'', component:PaginasComponent,
  children:[
    {path:'', component: DashboardComponent},
    {path:'horometros', component: HorometrosComponent},
    {path:'preventivos', component: PreventivosComponent},
    {path:'semanales', component: SemanalesComponent},
    {path:'bitacora', component: BitacoraComponent},
    {path:'manpower', component: ManpowerComponent},
    {path:'kpis', component: KpisComponent},
    {path:'equipos', component: EquiposComponent},
    {path:'valorequipos', component: ValorequiposComponent},
    {path:'checklist', component:ChecklistComponent},
    {path:'disponibilidaddiaria', component: DisponibilidaddiariaComponent},
    {path:'kpis',component:KpisComponent}

  ]
},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
