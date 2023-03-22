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

  public submitFormulario() {
    if (this.myForm.valid) {
      const { usuario, password } = this.myForm.value;
  
      this.loginPrd.ingresarAplicativo(usuario).subscribe({
        next: (res) => {
          const [userData] = res;
  
          if (usuario === userData.enumtrabajador && password === userData.tcontra) {
            const url = userData.ttipousuario === 'Administrador' ? '/administrador/bitacora' : '/visitante/kpis';
            this.routerprd.navigateByUrl(url);
          } else {
            alert('Credenciales incorrectas');
          }
        },
        error: () => {
          alert('Usuario no encontrado');
        },
      });
    } else {
      this.myForm.markAllAsTouched();
    }
  }

      handleCredentialResponse(response:any){
    console.log(response);
    console.log(this.routerprd);
    if(response.credential){
      sessionStorage.setItem("token",response.credential);
      document.location.href = "/sesion/principal";
    }
  }

  public get f():any{
    return this.myForm.controls;
  }
}
