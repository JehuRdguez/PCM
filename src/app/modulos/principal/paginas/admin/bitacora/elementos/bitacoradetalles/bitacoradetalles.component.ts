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
      tdisponibilidad: [''],
      tefectosfalla: [''],
      tpiezasutilizadas: [''],
      ttecnico: [''],
      tsupervisor: [''],
      tsistema: [''],
      tsubsistema: [''],
      tturno: ['']
    })
    if (this.detallesData) {
      this.actionBtn = "Aceptar";
      this.BitacoraForm.controls['tdisponibilidad'].setValue(
        this.detallesData.tdisponibilidad
      );
      this.BitacoraForm.controls['tefectosfalla'].setValue(
        this.detallesData.tefectosfalla
      );
      this.BitacoraForm.controls['tpiezasutilizadas'].setValue(
        this.detallesData.tpiezasutilizadas
      );
      this.BitacoraForm.controls['ttecnico'].setValue(
        this.detallesData.ttecnico
      );
      this.BitacoraForm.controls['tsupervisor'].setValue(
        this.detallesData.tsupervisor
      );
      this.BitacoraForm.controls['tsistema'].setValue(
        this.detallesData.tsistema
      );
      this.BitacoraForm.controls['tsubsistema'].setValue(
        this.detallesData.tsubsistema
      );
      this.BitacoraForm.controls['tturno'].setValue(
        this.detallesData.tturno
      );
      this.BitacoraForm.controls['tdisponibilidad'];
      this.BitacoraForm.controls['tefectosfalla'];
      this.BitacoraForm.controls['tpiezasutilizadas'];
      this.BitacoraForm.controls['ttecnico'];
      this.BitacoraForm.controls['tsupervisor'];
      this.BitacoraForm.controls['tsistema'];
      this.BitacoraForm.controls['tsubsistema'];
      this.BitacoraForm.controls['tturno'];

    }
  }
}