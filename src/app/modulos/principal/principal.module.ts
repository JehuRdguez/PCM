import { DashboardComponent } from './paginas/admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { InterfazModule } from 'src/app/interfaz/privado/menu/menu.module';
import { PrincipalComponent } from './principal.component';
//import { EquiposComponent } from './equipos/equipos.component';
//import { ValorequiposComponent } from './valorequipos/valorequipos.component';
//import { ChecklistComponent } from './checklist/checklist.component';
//import { DisponibilidaddiariaComponent } from './disponibilidaddiaria/disponibilidaddiaria.component';
//import { HorometrosComponent } from './horometros/horometros.component';
//import { PreventivosComponent } from './preventivos/preventivos.component';
//import { SemanalesComponent } from './semanales/semanales.component';
import { BitacoraComponent } from './paginas/admin/bitacora/bitacora.component';
//import { ManpowerComponent } from './manpower/manpower.component';
//import { KpisComponent } from './kpis/kpis.component';
//import { DialoghoroRegistrarComponent } from './horometros/elementos/dialoghoro-registrar/dialoghoro-registrar.component';
//import { DialoghoroDetallesComponent } from './horometros/elementos/dialoghoro-detalles/dialoghoro-detalles.component';

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
import { ReactiveFormsModule } from '@angular/forms';
//import { PreventivosFormComponent } from './preventivos/elementos/preventivos-form/preventivos-form.component';
//import { PrimerMantComponent } from './preventivos/elementos/primer-mant/primer-mant.component';
//import { DetallesPreventivosComponent } from './preventivos/elementos/detalles-preventivos/detalles-preventivos.component';
//import { ManpowerFormComponent } from './manpower/elementos/manpower-form/manpower-form.component';
//import { ManpowerDetallesComponent } from './manpower/elementos/manpower-detalles/manpower-detalles.component';
//import { SemanalesFormComponent } from './semanales/elementos/semanales-form/semanales-form.component';
//import { BitacoraFormComponent } from './bitacora/elementos/bitacora-form/bitacora-form.component';
//import { DetallesBitacoraComponent } from './bitacora/elementos/detalles-bitacora/detalles-bitacora.component';
import {MatCardModule} from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { HorometrosComponent } from './paginas/admin/horometros/horometros.component';
import { PreventivosComponent } from './paginas/admin/preventivos/preventivos.component';
import { SemanalesComponent } from './paginas/admin/semanales/semanales.component';
import { ManpowerComponent } from './paginas/admin/manpower/manpower.component';
import { KpisComponent } from './paginas/admin/kpis/kpis.component';
import { BitacoraFormComponent } from './paginas/admin/bitacora/elementos/bitacoraform/bitacoraform.component';
import { DetallesBitacoraComponent } from './paginas/admin/bitacora/elementos/bitacoradetalles/bitacoradetalles.component';
import { DialoghoroDetallesComponent } from './paginas/admin/horometros/elementos/dialoghoro-detalles/dialoghoro-detalles.component';
import { DialoghoroEditarComponent } from './paginas/admin/horometros/elementos/dialoghoro-editar/dialoghoro-editar.component';
import { DialoghoroRegistrarComponent } from './paginas/admin/horometros/elementos/dialoghoro-registrar/dialoghoro-registrar.component';
import { DetallesPreventivosComponent } from './paginas/admin/preventivos/elementos/detalles-preventivos/detalles-preventivos.component';
import { PreventivosFormComponent } from './paginas/admin/preventivos/elementos/preventivos-form/preventivos-form.component';
import { PrimerMantComponent } from './paginas/admin/preventivos/elementos/primer-mant/primer-mant.component';
import { DetallesSemanalesComponent } from './paginas/admin/semanales/elementos/detalles-semanales/detalles-semanales.component';
import { SemanalesFormComponent } from './paginas/admin/semanales/elementos/semanales-form/semanales-form.component';
import { ManpowerDetallesComponent } from './paginas/admin/manpower/elementos/manpower-detalles/manpower-detalles.component';
import { ManpowerFormComponent } from './paginas/admin/manpower/elementos/manpower-form/manpower-form.component';
//DIALOGS EQUIPOS
//import { DialogagregarequipoComponent } from './equipos/elementos/dialogagregarequipo/dialogagregarequipo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PrincipalComponent,
    //EquiposComponent,
    //ValorequiposComponent,
    //ChecklistComponent,
    //DisponibilidaddiariaComponent,
    //HorometrosComponent,
    //PreventivosComponent,
    //SemanalesComponent,
    BitacoraComponent,
    HorometrosComponent,
    PreventivosComponent,
    SemanalesComponent,
    ManpowerComponent,
    KpisComponent,
    BitacoraFormComponent,
    DetallesBitacoraComponent,
    DialoghoroDetallesComponent,
    DialoghoroEditarComponent,
    DialoghoroRegistrarComponent,
    DetallesPreventivosComponent,
    PreventivosFormComponent,
    PrimerMantComponent,
    DetallesSemanalesComponent,
    SemanalesFormComponent,
    ManpowerDetallesComponent,
    ManpowerFormComponent,
    //ManpowerComponent,
    //KpisComponent,
    //DialoghoroRegistrarComponent,
    //DialoghoroDetallesComponent,
    //InicioComponent,
    //PreventivosFormComponent,
    //PrimerMantComponent,
    //DetallesPreventivosComponent,
    //ManpowerFormComponent,
    //ManpowerDetallesComponent,
    //SemanalesFormComponent,
    //BitacoraFormComponent,
    //DetallesBitacoraComponent,
    //DialogagregarequipoComponent
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
    NgChartsModule,
    MatCardModule
  ],
  exports: [
    DashboardComponent,
    PrincipalComponent,
    //EquiposComponent,
    //ValorequiposComponent,
    //ChecklistComponent,
    //DisponibilidaddiariaComponent,
    //HorometrosComponent,
    //PreventivosComponent,
    //SemanalesComponent,
    BitacoraComponent,
    //ManpowerComponent,
    //KpisComponent,
    //DialoghoroRegistrarComponent,
    //DialoghoroDetallesComponent,
    //DialogagregarequipoComponent
    


  ]
})
export class PrincipalModule { }