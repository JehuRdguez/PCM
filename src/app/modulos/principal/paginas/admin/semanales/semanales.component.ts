import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { DetallesSemanalesComponent } from './elementos/detalles-semanales/detalles-semanales.component';
import { SemanalesFormComponent } from './elementos/semanales-form/semanales-form.component';

@Component({
  selector: 'app-semanales',
  templateUrl: './semanales.component.html',
  styleUrls: ['./semanales.component.css']
})
export class SemanalesComponent {
  title = 'PlanMant'
  displayedColumns: string[] = ['id','Estado','tecnicos', 'unidad','fecha', 'Comentarios','acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService){}
  ngOnInit(): void {
    this.getAllSemanal();
  }
  openDialogRegistrar(){
    this.dialog.open(SemanalesFormComponent,{
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'Guardar') {
        this.getAllSemanal();
      }
    });
  }
    getAllSemanal() {
    this.api.getSemanal()
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
    editSemanal(row: any) {
    this.dialog.open(SemanalesFormComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Actualizar') {
        this.getAllSemanal();
      }
    })
  }
    deleteSemanal(id: number) {
    this.api.deleteSemanal(id).subscribe({
      next: (res) => {
        alert("Semanal eliminado!!")
        this.getAllSemanal();
      },
      error: () => {
        alert("Error!!!")
      }
    })
  }
  getSemanalByid(row: any) {
    this.dialog.open(DetallesSemanalesComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Aceptar') {
        this.getAllSemanal();
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