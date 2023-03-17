import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './inicio/login/login.component';


const rutas:Routes = [
  {path:'',children:[
      {path:'login',component: LoginComponent},
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
