import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manpower-detalles',
  templateUrl: './manpower-detalles.component.html',
  styleUrls: ['./manpower-detalles.component.css']
})
export class ManpowerDetallesComponent implements OnInit{
  ManpowerForm!: FormGroup;
  actionBtn: String = "Guardar"

  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public detallesData: any) { }
  ngOnInit(): void {
    this.ManpowerForm = this.formBuilder.group({
      nombre: [''],
      tiempototal: [''],
      faltas: [''],
      actasYamon: [''],
    })
    if (this.detallesData) {
      this.actionBtn = "Aceptar";
      this.ManpowerForm.controls['nombre'].setValue(
        this.detallesData.nombre
      );
      this.ManpowerForm.controls['tiempototal'].setValue(
        this.detallesData.tiempototal
      );
      this.ManpowerForm.controls['faltas'].setValue(
        this.detallesData.faltas
      );
      this.ManpowerForm.controls['actasYamon'].setValue(
        this.detallesData.actasYamon
      );
      this.ManpowerForm.controls['nombre'].disable();
      this.ManpowerForm.controls['tiempototal'].disable();
      this.ManpowerForm.controls['faltas'].disable();
      this.ManpowerForm.controls['actasYamon'].disable();
    }
  }
}