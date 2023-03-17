import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialoghoroRegistrarComponent } from './elementos/dialoghoro-registrar/dialoghoro-registrar.component';
import { DialoghoroDetallesComponent } from './elementos/dialoghoro-detalles/dialoghoro-detalles.component';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-horometros',
  templateUrl: './horometros.component.html',
  styleUrls: ['./horometros.component.css']
})
export class HorometrosComponent {
  title = 'PlanMant';
  displayedColumns: string[] = ['id', 'Unidad', 'Horometro', 'Odometro', 'fhUltAct', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService){}
  ngOnInit(): void {
    this.getAllTicket();
  }
  openDialogRegistrar(){
    this.dialog.open(DialoghoroRegistrarComponent,{
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'Guardar') {
        this.getAllTicket();
      }
    });
  }
  getAllTicket() {
    this.api.getTicket()
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

  

  editTicket(row: any) {
    this.dialog.open(DialoghoroRegistrarComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Actualizar') {
        this.getAllTicket();
      }
    })
  }


  deleteTicket(id: number) {
    this.api.deleteTicket(id).subscribe({
      next: (res) => {
        alert("Horometro eliminado!!")
        this.getAllTicket();
      },
      error: () => {
        alert("Error!!!")
      }
    })
  }
  getHorometroByid(row: any) {
    this.dialog.open(DialoghoroDetallesComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Aceptar') {
        this.getAllTicket();
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