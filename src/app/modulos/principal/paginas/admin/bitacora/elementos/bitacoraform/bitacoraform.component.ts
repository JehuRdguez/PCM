import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FormComponent } from 'src/app/components/form/form.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bitacoraform',
  templateUrl: './bitacoraform.component.html',
  styleUrls: ['./bitacoraform.component.css']
})
export class BitacoraFormComponent {

  sistemas = [
    { nombre: 'Transmisión', subsistemas: ['Aire', 'Aceite', 'Embrague'] },
    { nombre: 'Soldadura', subsistemas: ['Electrodos', 'MIG', 'TIG'] },
    { nombre: 'Tracción', subsistemas: ['Caja de transferencia', 'Eje de transmisión', 'Diferencial'] },
    { nombre: 'Frenos', subsistemas: ['Pastillas', 'Discos', 'Calipers'] },
    { nombre: 'Neumática', subsistemas: ['Válvulas', 'Cilindros', 'Mangueras'] },
    { nombre: 'Refrigeración', subsistemas: ['Radiador', 'Termostato', 'Bomba de agua'] }
  ];

  subsistemas: string[] = [];

  sistemaSeleccionado = '';
  subsistemaSeleccionado = '';

  public objetounico: any = {};
  BitacoraForm!: FormGroup;
  actionBtn: String = "Guardar"
  actionTxt: String = "Registrar"

  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<FormComponent>) { }
  ngOnInit(): void {

    let token = sessionStorage.getItem("token") as string;
    this.objetounico = this.decodificarJwt(token);

    this.BitacoraForm = this.formBuilder.group({
      tunidad: ['', Validators.required],
      ttiporeporte: ['', Validators.required],
      tcaptura: [this.objetounico.nombre, Validators.required],
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
      this.actionTxt = "Editar";
    
      this.BitacoraForm.markAllAsTouched();

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
        this.actualizarSubsistemas();
        this.api.postBitacora(this.BitacoraForm.value)
          .subscribe({
            next: (res) => {
              alert("Registro agregado exitosamente.")
              this.BitacoraForm.reset();
              this.dialogRef.close('Guardar');
            },
            error: () => {
              alert("¡Error!")
            }
          })
      } else {
        this.BitacoraForm.markAllAsTouched();
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
    var confirmacion = confirm("¿Esta seguro que desea actualizar el registro?");
    if (confirmacion == true) {
      this.api.putBitacora(data, this.editData.ecodbitacora)
        .subscribe({
          next: (res) => {
            alert("Registro actualizado exitosamente.");
            this.BitacoraForm.reset();
            this.dialogRef.close('Actualizar');
          },
          error: () => {
            alert("¡Error!");
          }
        })
    }
  }

  actualizarSubsistemas(){
    const sistemaSeleccionado = this.sistemas.find(sistema => sistema.nombre === this.sistemaSeleccionado);
    if (sistemaSeleccionado) {
      this.subsistemas = sistemaSeleccionado.subsistemas;
    } 
  }
  
  private decodificarJwt(token: string): any {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

}
