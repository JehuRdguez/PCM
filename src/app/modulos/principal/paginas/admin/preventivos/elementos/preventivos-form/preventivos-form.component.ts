import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from 'src/app/components/form/form.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-preventivos-form',
  templateUrl: './preventivos-form.component.html',
  styleUrls: ['./preventivos-form.component.css']
})
export class PreventivosFormComponent implements OnInit{
  PreventivoForm!: FormGroup;
  actionBtn: String = "Guardar"

  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<FormComponent>) { }
  ngOnInit(): void {
    this.PreventivoForm = this.formBuilder.group({
      Estado: ['', Validators.required],
      Unidad: ['', Validators.required],
      UnidadNeg: ['', Validators.required],
      Horometro: ['', Validators.required],
      Odometro: ['', Validators.required],
      fhUltMant: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.PreventivoForm.controls['Estado'].setValue(
        this.editData.Estado
      );
      this.PreventivoForm.controls['Unidad'].setValue(
        this.editData.Unidad
      );
      this.PreventivoForm.controls['UnidadNeg'].setValue(
        this.editData.UnidadNeg
      );
      this.PreventivoForm.controls['Horometro'].setValue(
        this.editData.Horometro
      );
      this.PreventivoForm.controls['Odometro'].setValue(
        this.editData.Odometro
      );
      this.PreventivoForm.controls['fhUltMant'].setValue(
        this.editData.fhUltMant
      );
    }
  }
  addPreventivo() {
    if (!this.editData) {
      if (this.PreventivoForm.valid) {
        this.api.postPreventivo(this.PreventivoForm.value)
          .subscribe({
            next: (res) => {
              alert("Preventivo agregado exitosamente")
              this.PreventivoForm.reset();
              this.dialogRef.close('Guardar');
            },
            error: () => {
              alert("Error en la obtención de datos")
            }
          })
      }
    }
    else {
      this.updatePreventivo()
    }
  }
  updatePreventivo() {
    this.api.putPreventivo(
      this.PreventivoForm.value, this.editData.id
    )
      .subscribe({
        next: (res) => {
          alert("Preventivo actualizado exitosamente");
          this.PreventivoForm.reset();
          this.dialogRef.close('Actualizar');
        },
        error: () => {
          alert("Error!!!");
        }
      })

  }
}