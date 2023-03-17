import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from 'src/app/components/form/form.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bitacoraform',
  templateUrl: './bitacoraform.component.html',
  styleUrls: ['./bitacoraform.component.css']
})
export class BitacoraFormComponent {
  BitacoraForm!: FormGroup;
  actionBtn: String = "Guardar"
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<FormComponent>) { }
  ngOnInit(): void {
    this.BitacoraForm = this.formBuilder.group({
      equipo: ['', Validators.required],
      unidadNeg: ['', Validators.required],
      capturo: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipoFalla: ['', Validators.required],
      fechainicial: ['', Validators.required],
      fechafinal: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.BitacoraForm.controls['equipo'].setValue(
        this.editData.equipo
      );
      this.BitacoraForm.controls['unidadNeg'].setValue(
        this.editData.unidadNeg
      );
      this.BitacoraForm.controls['capturo'].setValue(
        this.editData.capturo
      );
      this.BitacoraForm.controls['descripcion'].setValue(
        this.editData.descripcion
      );
      this.BitacoraForm.controls['tipoFalla'].setValue(
        this.editData.tipoFalla
      );
      this.BitacoraForm.controls['fechainicial'].setValue(
        this.editData.fechainicial
      );
      this.BitacoraForm.controls['fechafinal'].setValue(
        this.editData.fechafinal
      );

    }
  }
  addBitacora() {
    if (!this.editData) {
      if (this.BitacoraForm.valid) {
        this.api.postBitacora(this.BitacoraForm.value)
          .subscribe({
            next: (res) => {
              alert("Bitacora agregado exitosamente")
              this.BitacoraForm.reset();
              this.dialogRef.close('Guardar');
            },
            error: () => {
              alert("Error en la obtención de datos")
            }
          })
      }
    }
    else {
      this.updateBitacora()
    }
  }
  updateBitacora() {
    this.api.putBitacora(
      this.BitacoraForm.value, this.editData.id
    )
      .subscribe({
        next: (res) => {
          alert("Bitacora actualizado exitosamente");
          this.BitacoraForm.reset();
          this.dialogRef.close('Actualizar');
        },
        error: () => {
          alert("Error!!!");
        }
      })

  }

}