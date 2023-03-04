import { PaginasRoutingModule } from './paginas/paginas-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component: DashboardComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PaginasRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
