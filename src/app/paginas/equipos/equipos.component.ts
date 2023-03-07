import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, Validators} from  '@angular/forms' ;
import { DialogagregarequipoComponent } from './elementos/dialogagregarequipo/dialogagregarequipo.component';



@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder){}
  

  OpenDialogAgregarEquipo(){
    this.dialog.open(DialogagregarequipoComponent,{
      data: {
        animal:'PERRO',
      },
      width: '30%'
    });
  }
  


}
