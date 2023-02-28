import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { InterfazModule } from '../interfaz/interfaz.module';
import { PaginasComponent } from './paginas.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ValorequiposComponent } from './valorequipos/valorequipos.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DisponibilidaddiariaComponent } from './disponibilidaddiaria/disponibilidaddiaria.component';



@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent,
    PaginasComponent,
    ConfiguracionesComponent,
    EquiposComponent,
    ValorequiposComponent,
    ChecklistComponent,
    DisponibilidaddiariaComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    InterfazModule
  ],
  exports: [
    InicioComponent,
    DashboardComponent,
    ConfiguracionesComponent,
    EquiposComponent,
    ValorequiposComponent,
    ChecklistComponent,
    DisponibilidaddiariaComponent
    

  ]
})
export class PaginasModule { }
