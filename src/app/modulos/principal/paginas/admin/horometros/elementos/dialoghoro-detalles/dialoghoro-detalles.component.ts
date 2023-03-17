import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialoghoro-detalles',
  templateUrl: './dialoghoro-detalles.component.html',
  styleUrls: ['./dialoghoro-detalles.component.css']
})
export class DialoghoroDetallesComponent implements OnInit {
  HorometroForm!: FormGroup;
  actionBtn: String = "Guardar"

    constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public detallesData: any) { }
  ngOnInit(): void {
    this.HorometroForm = this.formBuilder.group({
      /*tecnico: [''],
      ultimoMant: [''],
      horometro: [''],
      odometro: [''],
      horasUltiServ: [''],
      horasRest: [''],
      diasRest: [''],*/
      Unidad: [''],
      fhUltAct: [''],
      Horometro: [''],
      Odometro: [''],
    })
    if (this.detallesData) {
      this.actionBtn = "Aceptar";
      /*this.HorometroForm.controls['tecnico'].setValue(
        this.detallesData.tecnico
      );*/
      this.HorometroForm.controls['Unidad'].setValue(
        this.detallesData.Unidad
      );
      this.HorometroForm.controls['fhUltAct'].setValue(
        this.detallesData.fhUltAct
      );
      this.HorometroForm.controls['Horometro'].setValue(
        this.detallesData.Horometro
      );
      this.HorometroForm.controls['Odometro'].setValue(
        this.detallesData.Odometro
      );/*
      this.HorometroForm.controls['ultimoMant'].setValue(
        this.detallesData.ultimoMant
      );
      this.HorometroForm.controls['horasUltiServ'].setValue(
        this.detallesData.horasUltiServ
      );
      this.HorometroForm.controls['horasRest'].setValue(
        this.detallesData.horasRest
      );
      this.HorometroForm.controls['diasRest'].setValue(
        this.detallesData.diasRest
      );
      this.HorometroForm.controls['tecnico'].disable();
      this.HorometroForm.controls['ultimoMant'].disable();
      this.HorometroForm.controls['Horometro'].disable();
      this.HorometroForm.controls['horasUltiServ'].disable();
      this.HorometroForm.controls['horasRest'].disable();
      this.HorometroForm.controls['diasRest'].disable();
      this.HorometroForm.controls['horasUltiServ'].disable();
      this.HorometroForm.controls['Odometro'].disable();
      this.HorometroForm.controls['horasRest'].disable();
      this.HorometroForm.controls['diasRest'].disable();*/
      this.HorometroForm.controls['Unidad'].disable();
      this.HorometroForm.controls['Horometro'].disable();
      this.HorometroForm.controls['Odometro'].disable();
      this.HorometroForm.controls['fhUltAct'].disable();
    }
  }
}