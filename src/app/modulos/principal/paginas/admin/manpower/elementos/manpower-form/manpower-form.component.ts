import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from 'src/app/components/form/form.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manpower-form',
  templateUrl: './manpower-form.component.html',
  styleUrls: ['./manpower-form.component.css']
})
export class ManpowerFormComponent implements OnInit{
  ManpowerForm!: FormGroup;
  actionBtn: String = "Guardar"

  fileToUpload: File | null = null;
   constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<FormComponent>) { }
  ngOnInit(): void {
    this.ManpowerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      tiempototal: ['', Validators.required],
      faltas: ['', Validators.required],
      actasYamon: ['', Validators.required],
    })
    if (this.editData) {
      this.actionBtn = "Actualizar";
      this.ManpowerForm.controls['nombre'].setValue(
        this.editData.nombre
      );
      this.ManpowerForm.controls['tiempototal'].setValue(
        this.editData.tiempototal
      );
      this.ManpowerForm.controls['faltas'].setValue(
        this.editData.faltas
      );
      this.ManpowerForm.controls['actasYamon'].setValue(
        this.editData.actasYamon
      );
    }
  }
  addManpower() {
    if (!this.editData) {
      if (this.ManpowerForm.valid) {
        this.api.postManpower(this.ManpowerForm.value)
          .subscribe({
            next: (res) => {
              alert("Trabajador agregado exitosamente")
              this.ManpowerForm.reset();
              this.dialogRef.close('Guardar');
            },
            error: () => {
              alert("Error en la obtención de datos")
            }
          })
      }
    }
    else {
      this.updateManpower()
    }
  }
  updateManpower() {
    this.api.putManpower(
      this.ManpowerForm.value, this.editData.id
    )
      .subscribe({
        next: (res) => {
          alert("Trabajador actualizado exitosamente");
          this.ManpowerForm.reset();
          this.dialogRef.close('Actualizar');
        },
        error: () => {
          alert("Error!!!");
        }
      })

  }
  onSubmit() {
    // Aquí puedes enviar la imagen al servidor
    console.log('Imagen enviada:', this.fileToUpload);
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);
  }
}