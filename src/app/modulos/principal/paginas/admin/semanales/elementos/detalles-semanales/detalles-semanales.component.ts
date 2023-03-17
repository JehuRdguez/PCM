import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-detalles-semanales',
  templateUrl: './detalles-semanales.component.html',
  styleUrls: ['./detalles-semanales.component.css']
})
export class DetallesSemanalesComponent implements OnInit{
  SemanalesForm!: FormGroup;
  actionBtn: String = "Guardar"

  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public detallesData: any) { }
  ngOnInit(): void {
    this.SemanalesForm = this.formBuilder.group({
      Estado: [''],
      tecnicos: [''],
      unidad: [''],
      fecha: [''],
      Comentarios: [''],
    })
    if (this.detallesData) {
      this.actionBtn = "Aceptar";
      this.SemanalesForm.controls['Estado'].setValue(
        this.detallesData.Estado
      );
      this.SemanalesForm.controls['tecnicos'].setValue(
        this.detallesData.tecnicos
      );
      this.SemanalesForm.controls['unidad'].setValue(
        this.detallesData.unidad
      );
      this.SemanalesForm.controls['fecha'].setValue(
        this.detallesData.fecha
      );
      this.SemanalesForm.controls['Comentarios'].setValue(
        this.detallesData.Comentarios
      );

      this.SemanalesForm.controls['Estado'].disable();
      this.SemanalesForm.controls['tecnicos'].disable();
      this.SemanalesForm.controls['unidad'].disable();
      this.SemanalesForm.controls['fecha'].disable();
      this.SemanalesForm.controls['Comentarios'].disable();
    }
  }
}