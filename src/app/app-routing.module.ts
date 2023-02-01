import { InicioComponent } from './paginas/inicio/inicio.component';
import { PaginasRoutingModule } from './paginas/paginas-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', component: InicioComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PaginasRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
