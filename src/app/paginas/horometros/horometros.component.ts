import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialoghoroRegistrarComponent } from './elementos/dialoghoro-registrar/dialoghoro-registrar.component';
import {FormBuilder, Validators} from  '@angular/forms' ;
import { DialoghoroEditarComponent } from './elementos/dialoghoro-editar/dialoghoro-editar.component';
import { DialoghoroDetallesComponent } from './elementos/dialoghoro-detalles/dialoghoro-detalles.component';


@Component({
  selector: 'app-horometros',
  templateUrl: './horometros.component.html',
  styleUrls: ['./horometros.component.css']
})
export class HorometrosComponent {

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder){}

  openDialogRegistrar(){
    this.dialog.open(DialoghoroRegistrarComponent,{
      data: {
        animal:'PERRO',
      },
      width: '30%'
    });
  }

  openDialogEditar(){
    this.dialog.open(DialoghoroEditarComponent,{
      data: {
        animal:'PERRO',
      },
      width: '30%'
    });
  }

  openDialogDetalles(){
    this.dialog.open(DialoghoroDetallesComponent,{
      data: {
        animal:'PERRO',
      },
      width: '30%'
    });
  }

}
