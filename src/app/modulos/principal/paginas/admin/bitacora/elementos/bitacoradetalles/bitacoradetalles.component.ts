import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-bitacoradetalles',
  templateUrl: './bitacoradetalles.component.html',
  styleUrls: ['./bitacoradetalles.component.css']
})
export class DetallesBitacoraComponent implements OnInit{
  BitacoraForm!: FormGroup;
  actionBtn: String = "Guardar"

  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public detallesData: any) { }
  ngOnInit(): void {
    this.BitacoraForm = this.formBuilder.group({
      equipo: [''],
      unidadNeg: [''],
      capturo: [''],
      descripcion: [''],
      tipoFalla: [''],
      fechainicial: [''],
      fechafinal: ['']
    })
    if (this.detallesData) {
      this.actionBtn = "Aceptar";
      this.BitacoraForm.controls['equipo'].setValue(
        this.detallesData.equipo
      );
      this.BitacoraForm.controls['unidadNeg'].setValue(
        this.detallesData.unidadNeg
      );
      this.BitacoraForm.controls['capturo'].setValue(
        this.detallesData.capturo
      );
      this.BitacoraForm.controls['descripcion'].setValue(
        this.detallesData.descripcion
      );
      this.BitacoraForm.controls['tipoFalla'].setValue(
        this.detallesData.tipoFalla
      );
      this.BitacoraForm.controls['fechainicial'].setValue(
        this.detallesData.fechainicial
      );
      this.BitacoraForm.controls['fechafinal'].setValue(
        this.detallesData.fechafinal
      );
      this.BitacoraForm.controls['equipo'].disable();
      this.BitacoraForm.controls['unidadNeg'].disable();
      this.BitacoraForm.controls['capturo'].disable();
      this.BitacoraForm.controls['descripcion'].disable();
      this.BitacoraForm.controls['tipoFalla'].disable();
      this.BitacoraForm.controls['fechainicial'].disable();
      this.BitacoraForm.controls['fechafinal'].disable();
    }
  }
}