import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';
import * as CryptoJS from 'crypto-js';
import { PermisosRutasService } from 'src/app/core/permisosRutas/permisos-rutas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //INTENTO2
  formLogin!: FormGroup;

  usuario={
    ecodusuario:0,
    enumtrabajador:'',
    tnombre:'',
    tcontra:'',
    ttipousuario:''
  }

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginPrd:AutentificacionService,
    private routerprd:Router, private http:HttpClient, private seg: PermisosRutasService){
      this.formLogin = fb.group({
        enumtrabajador:['',[Validators.required]],
        tcontra:['',[Validators.required]]
      });
    }


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
            const tokenData = {
              usuario: userData.enumtrabajador,
              tipo: userData.ttipousuario,
              nombre: userData.tnombre
            };
            const token = this.signToken(tokenData, 'mi_clave_secreta');
            console.log('token', token);
            sessionStorage.setItem('token', JSON.stringify(token));

            const url = userData.ttipousuario === 'Administrador' ? '/administrador/bitacora' : userData.ttipousuario === 'Visitante' ? '/visitante/bitacorav' : '';

            this.routerprd.navigateByUrl(url);

            if (userData.ttipousuario == 'Administrador'){
              this.seg.tipodeusuario2(userData.ttipousuario);
            } else if(userData.ttipousuario == 'Visitante'){
              this.seg.tipodeusuario2(userData.ttipousuario);
            }

          } else {
            alert('Contraseña incorrecta.');
          }
        },
        error: () => {
          alert('Usuario no encontrado.');
        },
      });
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  base64url(source: any) {
    let encodedSource = CryptoJS.enc.Base64.stringify(source);

    encodedSource = encodedSource.replace(/=+$/, '');

    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
  }

  encodeToken(payload:any) {
    var header = {
      "alg": "HS256",
      "typ": "JWT"
    };

    var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    var encodedHeader = this.base64url(stringifiedHeader);

    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    var encodedData = this.base64url(stringifiedData);

    var token = encodedHeader + "." + encodedData;
    return token;
  }

  signToken(payload:any,key:string) {
    var secret = key;
    let token:any = this.encodeToken(payload);

    var signature:any = CryptoJS.HmacSHA256(token, secret);
    signature = this.base64url(signature);

    var signedToken = token + "." + signature;
    return signedToken;
  }

  public get f():any{
    return this.myForm.controls;
  }
}
