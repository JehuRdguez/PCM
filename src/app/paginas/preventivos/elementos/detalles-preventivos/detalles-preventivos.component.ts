import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from 'src/app/components/form/form.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalles-preventivos',
  templateUrl: './detalles-preventivos.component.html',
  styleUrls: ['./detalles-preventivos.component.css']
})
export class DetallesPreventivosComponent implements OnInit{
  PreventivoForm!: FormGroup;
  actionBtn: String = "Guardar"

  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public detallesData: any,
    private dialogRef: MatDialogRef<FormComponent>) { }
  ngOnInit(): void {
    this.PreventivoForm = this.formBuilder.group({
      Estado: [''],
      Unidad: [''],
      UnidadNeg: [''],
      Horometro: [''],
      Odometro: [''],
      fhUltMant: ['']
    })
    if (this.detallesData) {
      this.actionBtn = "Aceptar";
      this.PreventivoForm.controls['Estado'].setValue(
        this.detallesData.Estado
      );
      this.PreventivoForm.controls['Unidad'].setValue(
        this.detallesData.Unidad
      );
      this.PreventivoForm.controls['UnidadNeg'].setValue(
        this.detallesData.UnidadNeg
      );
      this.PreventivoForm.controls['Horometro'].setValue(
        this.detallesData.Horometro
      );
      this.PreventivoForm.controls['Odometro'].setValue(
        this.detallesData.Odometro
      );
      this.PreventivoForm.controls['fhUltMant'].setValue(
        this.detallesData.fhUltMant
      );
      this.PreventivoForm.controls['Estado'].disable();
      this.PreventivoForm.controls['Unidad'].disable();
      this.PreventivoForm.controls['UnidadNeg'].disable();
      this.PreventivoForm.controls['Horometro'].disable();
      this.PreventivoForm.controls['Odometro'].disable();
      this.PreventivoForm.controls['fhUltMant'].disable();
    }
  }
}