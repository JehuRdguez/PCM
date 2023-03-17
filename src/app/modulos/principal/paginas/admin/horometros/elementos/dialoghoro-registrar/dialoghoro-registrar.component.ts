import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from 'src/app/components/form/form.component';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-dialoghoro-registrar',
  templateUrl: './dialoghoro-registrar.component.html',
  styleUrls: ['./dialoghoro-registrar.component.css']
})
export class DialoghoroRegistrarComponent implements OnInit {
  HorometroForm!: FormGroup;
  actionBtn: String = "Guardar"


  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<FormComponent>) { }
  ngOnInit(): void {
    this.HorometroForm = this.formBuilder.group({
      Unidad: ['', Validators.required],
      Horometro: ['', Validators.required],
      Odometro: ['', Validators.required],
      fhUltAct: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.HorometroForm.controls['Unidad'].setValue(
        this.editData.Unidad
      );
      this.HorometroForm.controls['Horometro'].setValue(
        this.editData.Horometro
      );
      this.HorometroForm.controls['Odometro'].setValue(
        this.editData.Odometro
      );
      this.HorometroForm.controls['fhUltAct'].setValue(
        this.editData.fhUltAct
      );
    }
  }
  addTicket() {
    if (!this.editData) {
      if (this.HorometroForm.valid) {
        this.api.postTicket(this.HorometroForm.value)
          .subscribe({
            next: (res) => {
              alert("Horometro agregado exitosamente")
              this.HorometroForm.reset();
              this.dialogRef.close('Guardar');
            },
            error: () => {
              alert("Error en la obtención de datos")
            }
          })
      }
    }
    else {
      this.updateTicket()
    }
  }
  updateTicket() {
    this.api.putTicket(
      this.HorometroForm.value, this.editData.id
    )
      .subscribe({
        next: (res) => {
          alert("Horometro actualizado exitosamente");
          this.HorometroForm.reset();
          this.dialogRef.close('Actualizar');
        },
        error: () => {
          alert("Error!!!");
        }
      })

  }
  

}