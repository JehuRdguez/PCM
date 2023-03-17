import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { DetallesPreventivosComponent } from './elementos/detalles-preventivos/detalles-preventivos.component';
import { PreventivosFormComponent } from './elementos/preventivos-form/preventivos-form.component';
import { PrimerMantComponent } from './elementos/primer-mant/primer-mant.component';

@Component({
  selector: 'app-preventivos',
  templateUrl: './preventivos.component.html',
  styleUrls: ['./preventivos.component.css']
})
export class PreventivosComponent {
  title = 'PlanMant'
  displayedColumns: string[] = ['id','Estado','UnidadNeg', 'Unidad','fhUltMant', 'Horometro', 'Odometro', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService){}
  ngOnInit(): void {
    this.getAllPreventivo();
  }
  openDialogRegistrar(){
    this.dialog.open(PreventivosFormComponent,{
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'Guardar') {
        this.getAllPreventivo();
      }
    });
  }
  openDialogPrimerMant(){
    this.dialog.open(PrimerMantComponent,{
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'Guardar') {
        this.getAllPreventivo();
      }
    });
  }
    getAllPreventivo() {
    this.api.getPreventivo()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error en la obtención de datos")
        }
      })
  }
    editPreventivo(row: any) {
    this.dialog.open(PreventivosFormComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Actualizar') {
        this.getAllPreventivo();
      }
    })
  }
    deletePreventivo(id: number) {
    this.api.deletePreventivo(id).subscribe({
      next: (res) => {
        alert("Preventivo eliminado!!")
        this.getAllPreventivo();
      },
      error: () => {
        alert("Error!!!")
      }
    })
  }
  getPreventivoByid(row: any) {
    this.dialog.open(DetallesPreventivosComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Aceptar') {
        this.getAllPreventivo();
      }
    })
  }
    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}