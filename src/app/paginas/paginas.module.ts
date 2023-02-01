import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { InterfazModule } from '../interfaz/interfaz.module';
import { PaginasComponent } from './paginas.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';

@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent,
    PaginasComponent,
    ConfiguracionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InterfazModule
  ],
  exports: [
    InicioComponent,
    DashboardComponent,
    ConfiguracionesComponent

  ]
})
export class PaginasModule { }
