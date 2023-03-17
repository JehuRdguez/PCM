import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario={
    ecodusuario:0,
    enumtrabajador:'',
    tnombre:'',
    tcontra:'',
    ttipousuario:''
  }

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginPrd:AutentificacionService,
    private routerprd:Router){}

  ngOnInit():void{
    this.myForm = this.createMyForm();

  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }

       this.loginPrd.ingresarAplicativo(this.myForm.value.usuario).subscribe({
        next:(res)=>{

          console.log(res[0].enumtrabajador);
          console.log("CONSOLA")

            if((this.myForm.value.usuario==(res[0].enumtrabajador)) && (this.myForm.value.password==(res[0].tcontra))){
              if(res[0].ttipousuario=='Administrador'){
                this.routerprd.navigateByUrl("/administrador/dashboard")
              }else if(res[0].ttipousuario=='Visitante'){
                this.routerprd.navigateByUrl("/visitante/kpis")
              }
            }else{
              alert("Credenciales incorrectas")
            }
        },
        error:(err)=>{
          alert("Usuario no encontrado");
        }
       }
       )

    }

  public get f():any{
    return this.myForm.controls;
  }
}
