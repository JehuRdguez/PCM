import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './modulos/login/login.module';
import { PrincipalModule } from './modulos/principal/principal.module';
import { SesionesComponent } from './interfaz/publico/sesiones/sesiones.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
// fORMULARIO EN PARTE
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './modulos/principal/paginas/admin/dashboard/dashboard.component';


// CONTROL EQUIPOS DIALOGOS
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
  FormComponent,
  SesionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSidenavModule,
    NgChartsModule,
    LoginModule,
    PrincipalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }