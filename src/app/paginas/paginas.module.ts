import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { InterfazModule } from '../interfaz/interfaz.module';
import { PaginasComponent } from './paginas.component';
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
import { DialoghoroRegistrarComponent } from './horometros/elementos/dialoghoro-registrar/dialoghoro-registrar.component';
import { DialoghoroDetallesComponent } from './horometros/elementos/dialoghoro-detalles/dialoghoro-detalles.component';

//IMPORTS DE FORMS
import  {MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { InicioComponent } from './inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreventivosFormComponent } from './preventivos/elementos/preventivos-form/preventivos-form.component';
import { PrimerMantComponent } from './preventivos/elementos/primer-mant/primer-mant.component';
import { DetallesPreventivosComponent } from './preventivos/elementos/detalles-preventivos/detalles-preventivos.component';
import { ManpowerFormComponent } from './manpower/elementos/manpower-form/manpower-form.component';
import { ManpowerDetallesComponent } from './manpower/elementos/manpower-detalles/manpower-detalles.component';
import { SemanalesFormComponent } from './semanales/elementos/semanales-form/semanales-form.component';
import { DetallesSemanalesComponent } from './semanales/elementos/detalles-semanales/detalles-semanales.component';
import { BitacoraFormComponent } from './bitacora/elementos/bitacora-form/bitacora-form.component';
import { DetallesBitacoraComponent } from './bitacora/elementos/detalles-bitacora/detalles-bitacora.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PaginasComponent,
    EquiposComponent,
    ValorequiposComponent,
    ChecklistComponent,
    DisponibilidaddiariaComponent,
    HorometrosComponent,
    PreventivosComponent,
    SemanalesComponent,
    BitacoraComponent,
    ManpowerComponent,
    KpisComponent,
    DialoghoroRegistrarComponent,
    DialoghoroDetallesComponent,
    InicioComponent,
    PreventivosFormComponent,
    PrimerMantComponent,
    DetallesPreventivosComponent,
    ManpowerFormComponent,
    ManpowerDetallesComponent,
    SemanalesFormComponent,
    DetallesSemanalesComponent,
    BitacoraFormComponent,
    DetallesBitacoraComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    InterfazModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSidenavModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent,
    PaginasComponent,
    EquiposComponent,
    ValorequiposComponent,
    ChecklistComponent,
    DisponibilidaddiariaComponent,
    HorometrosComponent,
    PreventivosComponent,
    SemanalesComponent,
    BitacoraComponent,
    ManpowerComponent,
    KpisComponent,
    DialoghoroRegistrarComponent,
    DialoghoroDetallesComponent,

  
  ]
})
export class PaginasModule { }
