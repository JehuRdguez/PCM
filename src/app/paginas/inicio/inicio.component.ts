import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'ConTic';
  displayedColumns: string[] = ['id', 'fhCreacion', 'fhModificacion', 'fhCierre', 'tipoTicket', 'motivo', 'notas', 'estado', 'prioridad', 'anexos', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService) {

  }
  ngOnInit(): void {
    this.getAllTicket();
  }

  openDialog() {
    this.dialog.open(FormComponent, {
      width: '50%'
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
    this.dialog.open(FormComponent, {
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
        alert("Ticket eliminado!!")
        this.getAllTicket();
      },
      error: () => {
        alert("Error!!!")
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
