import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  TicketForm!: FormGroup;
  actionBtn: String = "Guardar"

  constructor(private formBuilder: FormBuilder,private api: ApiService,
    @Inject(MAT_DIALOG_DATA)public editData : any,
     private dialogRef:MatDialogRef<FormComponent>){}
    ngOnInit(): void {
      this.TicketForm=this.formBuilder.group({
    fhCreacion:['',Validators.required],
    fhModificacion:[''],
    fhCierre:[''],
    tipoTicket:['',Validators.required],
    motivo:['',Validators.required],
    notas:['',Validators.required],
    estado:['',Validators.required],
    prioridad:['',Validators.required],
    anexos:['',Validators.required]
    
      })
      if(this.editData){
        this.actionBtn = "Actualizar";
        this.TicketForm.controls['fhCreacion'].setValue(
          this.editData.fhCreacion
        );
        this.TicketForm.controls['fhModificacion'].setValue(
          this.editData.fhModificacion
        );
        this.TicketForm.controls['fhCierre'].setValue(
          this.editData.fhCierre
        );
        this.TicketForm.controls['tipoTicket'].setValue(
          this.editData.tipoTicket
        );
        this.TicketForm.controls['motivo'].setValue(
          this.editData.motivo
        );
        this.TicketForm.controls['notas'].setValue(
          this.editData.notas
        );
        this.TicketForm.controls['estado'].setValue(
          this.editData.estado
        );
        this.TicketForm.controls['prioridad'].setValue(
          this.editData.prioridad
        );
        this.TicketForm.controls['anexos'].setValue(
          this.editData.anexos
        );
      }
    }
    
    addTicket(){
      if(!this.editData){
      if(this.TicketForm.valid){
        this.api.postTicket(this.TicketForm.value)
        .subscribe({
          next:(res)=>{
            alert("Ticket agregado exitosamente")
            this.TicketForm.reset();
            this.dialogRef.close('Guardar');
       },
       error:()=>{
        alert("Error en la obtención de datos")
       }
        })
       }
    }
    else{
      this.updateTicket()
    }
    }
    updateTicket(){
      this.api.putTicket(
        this.TicketForm.value,this.editData.id
      )
      .subscribe({
        next:(res) => {
          alert("Ticket actualizado exitosamente");
          this.TicketForm.reset();
          this.dialogRef.close('Actualizar');
        },
        error:() => {
          alert("Error!!!");
        }
      })
    
    }
}