import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiequiposService } from 'src/app/services/servicesce/apiequipos.service';
import { DialogagregarequipoComponent } from '../equipos/elementos/dialogagregarequipo/dialogagregarequipo.component';



@Component({
  selector: 'app-valorequipos',
  templateUrl: './valorequipos.component.html',
  styleUrls: ['./valorequipos.component.css']
})
export class ValorequiposComponent implements OnInit {
  title = 'Equipos';
  displayedColumns: string[] = [
    'noeco',
    'tipomaquina',
    'marca',
    'estatus',
    'costoPesos',
    'costoDolares',
    'acciones'
  ];

  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiequiposService) { }

  ngOnInit(): void {
    this.getAllEquipos();
  }

  getAllEquipos() {
    this.api.getEquipo()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error while fetching the records")
        }
      })
  }
  OpenDialogEditarValor(row:any) {
    this.dialog.open(DialogagregarequipoComponent, {
      // data: {
      //   animal:'PERRO',
      // },
      width: '30%',
      data: row
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

