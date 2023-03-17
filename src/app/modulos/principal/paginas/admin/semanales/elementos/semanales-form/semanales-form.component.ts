import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from 'src/app/components/form/form.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-semanales-form',
  templateUrl: './semanales-form.component.html',
  styleUrls: ['./semanales-form.component.css']
})
export class SemanalesFormComponent {
  SemanalForm!: FormGroup;
  actionBtn: String = "Guardar"
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<FormComponent>) { }
  ngOnInit(): void {
    this.SemanalForm = this.formBuilder.group({
      Estado: ['', Validators.required],
      tecnicos: ['', Validators.required],
      unidad: ['', Validators.required],
      fecha: ['', Validators.required],
      Comentarios: ['', Validators.required],
    })
    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.SemanalForm.controls['Estado'].setValue(
        this.editData.Estado
      );
      this.SemanalForm.controls['tecnicos'].setValue(
        this.editData.tecnicos
      );
      this.SemanalForm.controls['unidad'].setValue(
        this.editData.unidad
      );
      this.SemanalForm.controls['fecha'].setValue(
        this.editData.fecha
      );
      this.SemanalForm.controls['Comentarios'].setValue(
        this.editData.Comentarios
      );

    }
  }
  addSemanal() {
    if (!this.editData) {
      if (this.SemanalForm.valid) {
        this.api.postSemanal(this.SemanalForm.value)
          .subscribe({
            next: (res) => {
              alert("Semanal agregado exitosamente")
              this.SemanalForm.reset();
              this.dialogRef.close('Guardar');
            },
            error: () => {
              alert("Error en la obtención de datos")
            }
          })
      }
    }
    else {
      this.updateSemanal()
    }
  }
  updateSemanal() {
    this.api.putSemanal(
      this.SemanalForm.value, this.editData.id
    )
      .subscribe({
        next: (res) => {
          alert("Semanal actualizado exitosamente");
          this.SemanalForm.reset();
          this.dialogRef.close('Actualizar');
        },
        error: () => {
          alert("Error!!!");
        }
      })

  }
}