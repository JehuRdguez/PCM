import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ManpowerDetallesComponent } from './elementos/manpower-detalles/manpower-detalles.component';
import { ManpowerFormComponent } from './elementos/manpower-form/manpower-form.component';

@Component({
  selector: 'app-manpower',
  templateUrl: './manpower.component.html',
  styleUrls: ['./manpower.component.css']
})
export class ManpowerComponent {
  title = 'PlanMant'
  displayedColumns: string[] = ['id','img','nombre', 'tiempototal','faltas', 'actasYamon','acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService){}
  ngOnInit(): void {
    this.getAllManpower();
  }
  openDialogRegistrar(){
    this.dialog.open(ManpowerFormComponent,{
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'Guardar') {
        this.getAllManpower();
      }
    });
  }
    getAllManpower() {
    this.api.getManpower()
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
  editManpower(row: any) {
    this.dialog.open(ManpowerFormComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Actualizar') {
        this.getAllManpower();
      }
    })
  }
  deleteManpower(id: number) {
    this.api.deleteManpower(id).subscribe({
      next: (res) => {
        alert("Trabajador eliminado!!")
        this.getAllManpower();
      },
      error: () => {
        alert("Error!!!")
      }
    })
  }
  getManpowerByid(row: any) {
    this.dialog.open(ManpowerDetallesComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Aceptar') {
        this.getAllManpower();
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
