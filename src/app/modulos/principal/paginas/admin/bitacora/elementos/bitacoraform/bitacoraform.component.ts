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
      tunidad: ['', Validators.required],
      ttiporeporte: ['', Validators.required],
      tcaptura: ['', Validators.required],
      tunidadnegocios: ['', Validators.required],
      fhfecha: [new Date(), Validators.required],
      tdescripcion: ['', Validators.required],
      tdisponibilidad: ['', Validators.required],
      tefectosfalla: ['', Validators.required],
      tpiezasutilizadas: ['', Validators.required],
      ttecnico: ['', Validators.required],
      tsupervisor: ['', Validators.required],
      tsistema: ['', Validators.required],
      tsubsistema: ['', Validators.required],
      tturno: ['', Validators.required]

    })
    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.BitacoraForm.controls['tunidad'].setValue(
        this.editData.tunidad
      );
      this.BitacoraForm.controls['ttiporeporte'].setValue(
        this.editData.ttiporeporte
      );
      this.BitacoraForm.controls['tcaptura'].setValue(
        this.editData.tcaptura
      );
      this.BitacoraForm.controls['tunidadnegocios'].setValue(
        this.editData.tunidadnegocios
      );
      this.BitacoraForm.controls['fhfecha'].setValue(
        this.editData.fhfecha
      );
      this.BitacoraForm.controls['tdescripcion'].setValue(
        this.editData.tdescripcion
      );
      this.BitacoraForm.controls['tdisponibilidad'].setValue(
        this.editData.tdisponibilidad
      );
      this.BitacoraForm.controls['tefectosfalla'].setValue(
        this.editData.tefectosfalla
      );
      this.BitacoraForm.controls['tpiezasutilizadas'].setValue(
        this.editData.tpiezasutilizadas
      );
      this.BitacoraForm.controls['ttecnico'].setValue(
        this.editData.ttecnico
      );
      this.BitacoraForm.controls['tsupervisor'].setValue(
        this.editData.tsupervisor
      );
      this.BitacoraForm.controls['tsistema'].setValue(
        this.editData.tsistema
      );
      this.BitacoraForm.controls['tsubsistema'].setValue(
        this.editData.tsubsistema
      );
      this.BitacoraForm.controls['tturno'].setValue(
        this.editData.tturno
      );

    }
  }
  addBitacora() {
    if (!this.editData) {
      if (this.BitacoraForm.valid) {
        this.api.postBitacora(this.BitacoraForm.value)
          .subscribe({
            next: (res) => {
              alert("Bitácora agregado exitosamente")
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
    const data = {
      tunidad: this.BitacoraForm.value.tunidad,
      ttiporeporte: this.BitacoraForm.value.ttiporeporte,
      tcaptura: this.BitacoraForm.value.tcaptura,
      tunidadnegocios: this.BitacoraForm.value.tunidadnegocios,
      fhfecha: this.BitacoraForm.value.fhfecha,
      tdescripcion: this.BitacoraForm.value.tdescripcion,
      tdisponibilidad: this.BitacoraForm.value.tdisponibilidad,
      tefectosfalla: this.BitacoraForm.value.tefectosfalla,
      tpiezasutilizadas: this.BitacoraForm.value.tpiezasutilizadas,
      ttecnico: this.BitacoraForm.value.ttecnico,
      tsupervisor: this.BitacoraForm.value.tsupervisor,
      tsistema: this.BitacoraForm.value.tsistema,
      tsubsistema: this.BitacoraForm.value.tsubsistema,
      tturno: this.BitacoraForm.value.tturno,
      ecodbitacora: this.editData.ecodbitacora
    };
    this.api.putBitacora(data, this.editData.ecodbitacora)
      .subscribe({
        next: (res) => {
          alert("Bitácora actualizado exitosamente");
          this.BitacoraForm.reset();
          this.dialogRef.close('Actualizar');
        },
        error: () => {
          alert("Error!!!");
        }
      })

  }

}
