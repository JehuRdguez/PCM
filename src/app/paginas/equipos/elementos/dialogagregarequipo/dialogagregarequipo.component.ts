import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dialogagregarequipo',
  templateUrl: './dialogagregarequipo.component.html',
  styleUrls: ['./dialogagregarequipo.component.css']
})
export class DialogagregarequipoComponent implements OnInit {
  agregarequipoForm !: FormGroup;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.agregarequipoForm = this.formBuilder.group({
      tipomaquina: ['',Validators.required],  
      noeco: ['',Validators.required],  
      idunidad: ['',Validators.required],  
      modelo: ['',Validators.required],  
      anio: ['',Validators.required],  
      serie: ['',Validators.required],
      motor: ['',Validators.required],
      seriemotor: ['',Validators.required],
      estatus: ['',Validators.required],
      atencion: ['',Validators.required],
      costoPesos: ['',Validators.required],
      costoDolares: ['',Validators.required]
    })

    // if(this.editData){
    //   this.actionBtn="Update";
    //     this.productForm.controls['tipoAnimal'].setValue(this.editData.tipoAnimal);
    //     this.productForm.controls['tipoAnimal'].disable();

    //     this.productForm.controls['nombreAni'].setValue(this.editData.nombreAni);
    //     this.productForm.controls['nombreAni'].disable();

    //     this.productForm.controls['nombreDueno'].setValue(this.editData.nombreDueno);
    //     this.productForm.controls['nombreDueno'].disable();

    //     this.productForm.controls['problema'].setValue(this.editData.problema);
    //     this.productForm.controls['problema'].disable();

    //     this.productForm.controls['telefono'].setValue(this.editData.telefono);
    //     this.productForm.controls['telefono'].disable();

    //     this.productForm.controls['fhIngreso'].setValue(this.editData.fhIngreso);
    //     this.productForm.controls['fhIngreso'].disable();

    //     this.productForm.controls['fhSalida'].setValue(this.editData.fhSalida);

    //     this.productForm.controls['consulta'].setValue(this.editData.consulta);

    //   }

  }

  // addEquipo(){
  //   if(this.agregarequipoForm.valid){
  //     this.api.postProduct(this.agregarequipoForm.value).subscribe({
  //       next: (res)=>{
  //         alert("Product added successfully")
  //         this.agregarequipoForm.reset();
  //         this.dialogRef.close('save');
  //       },
  //       error:()=>{
  //         alert("Error while adding the product")
  //       }
  //     })
  //   }
  //   }else{
  //     this.updateProduct()
  //   }
}
