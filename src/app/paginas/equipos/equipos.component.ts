import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogagregarequipoComponent } from 'src/app/cedialogos/dialogagregarequipo/dialogagregarequipo.component';
import {FormBuilder, Validators} from  '@angular/forms' ;
import {STEPPER_GLOBAL_OPTIONS} from  '@angular/cdk/stepper' ;


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class EquiposComponent {
  title = 'Equipos CIMA';
  
  constructor(private _formBuilder: FormBuilder, private dialog:MatDialog){

  }

  openDialog(){
    this.dialog.open(DialogagregarequipoComponent,{
      data: {
        animal:'PERRO',
      },
      width: '30%'
    });
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


}
