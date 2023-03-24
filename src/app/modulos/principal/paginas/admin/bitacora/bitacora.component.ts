import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { BitacoraFormComponent } from './elementos/bitacoraform/bitacoraform.component';
import { DetallesBitacoraComponent } from './elementos/bitacoradetalles/bitacoradetalles.component';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent {
  title = 'PlanMant'
  displayedColumns: string[] = ['tunidad', 'ttiporeporte', 'tcaptura', 'tunidadnegocios', 'fhfecha', 'tdescripcion', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService) { }
  ngOnInit(): void {
    this.getAllBitacora();
    //paginator
    this.paginator._intl.itemsPerPageLabel = "Registros por página";

    this.paginator._intl.getRangeLabel = function (page: number, pageSize: number, lenght: number): string {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} de ${lenght}`;
    }
  }
  openDialogRegistrar() {
    this.dialog.open(BitacoraFormComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'Guardar') {
        this.getAllBitacora();
      }
    });
  }
  getAllBitacora() {
    this.api.getBitacora()
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
  editBitacora(row: any) {
    this.dialog.open(BitacoraFormComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Actualizar') {
        this.getAllBitacora();
      }
    })
  }
  /*
  deleteBitacora(id: number) {
    var confirmacion = confirm("¿Esta seguro que desea eliminar el registro?");
    if (confirmacion == true) {
      this.api.deleteBitacora(id).subscribe({
        next: (res) => {
          alert("Bitacora eliminado!!")
          this.getAllBitacora();
        },
        error: () => {
          alert("Error!!!")
        }
      })
    }
  }
*/
  deleteBitacora(id: number) {
    var confirmacion = confirm("¿Está seguro que desea eliminar el registro?");
    if (confirmacion == true) {
      this.api.patchBitacora(id, "0").subscribe({
        next: (res) => {
          alert("Bitacora eliminado!!")
          this.getAllBitacora();
          alert("LLEGO AL FINAL")
        },
        error: () => {
          alert("Error!!!")
        }
      })
    }
  }

  getBitacoraByid(row: any) {
    this.dialog.open(DetallesBitacoraComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Aceptar') {
        this.getAllBitacora();
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
  generarPDF(bitacora: any) {
    const doc = new jsPDF();


    const data = {
      ecodbitacora: bitacora.ecodbitacora,
      tunidad: bitacora.tunidad,
      ttiporeporte: bitacora.ttiporeporte,
      tcaptura: bitacora.tcaptura,
      tunidadnegocios: bitacora.tunidadnegocios,
      fhfecha: bitacora.fhfecha,
      tdescripcion: bitacora.tdescripcion,
      tdisponibilidad: bitacora.tdisponibilidad,
      tefectosfalla: bitacora.tefectosfalla,
      tpiezasutilizadas: bitacora.tpiezasutilizadas,
      ttecnico: bitacora.ttecnico,
      tsupervisor: bitacora.tsupervisor,
      tsistema: bitacora.tsistema,
      tsubsistema: bitacora.tsubsistema,
      tturno: bitacora.tturno,
    };

    const img = new Image();
    img.src = '../../../../../assets/dist/img/CIMA.png';

    img.onload = function () {
      const imgWidth = 50;
      const imgHeight = 50;
      const docWidth = doc.internal.pageSize.width;
      const x = (docWidth - imgWidth) / 2;
      doc.addImage(img, 'PNG', 20, 10, imgWidth, imgHeight);

      const date = new Date();

      doc.text('Reporte de incidencias', 90, 30);
      doc.text('Fecha de Reporte: ', 90, 40);
      doc.text(date.toISOString(), 140, 40); 
      doc.text('Id-', 90, 50);
      doc.text(data.tunidad, 98, 50);
      doc.text('-', 115, 50);
      doc.text(data.ecodbitacora.toString(), 118, 50);

      const tableHeight = 100; // Altura estimada de una fila de la tabla

      // Calcular la posición en la que se debe agregar la tabla
      const tableY = (doc.internal.pageSize.getHeight() - (2 * tableHeight)) / 2;

      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Unidad', 'Unidad de negocio', 'Tipo de reporte', 'Fecha', 'Turno', 'Capturista']],
        body: [
          [data.tunidad, data.tunidadnegocios, data.ttiporeporte, data.fhfecha, data.tturno, data.tcaptura]
        ],
        startY: tableY + 20
      })
      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Disponibilidad', 'Piezas utilizadas', 'Tecnico', 'Supervisor', 'Sistema', 'Subsistema']],
        body: [
          [data.tdisponibilidad, data.tpiezasutilizadas, data.ttecnico, data.tsupervisor, data.tsistema, data.tsubsistema]
        ],
        startY: tableY + 40 
      })

      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Descripción', 'Efectos de falla']],
        body: [
          [data.tdescripcion, data.tefectosfalla]
        ],
        startY: tableY + 60 
      })




      doc.line(40, 230, 170, 230);
      doc.text('Firma', doc.internal.pageSize.width / 2, 240, { align: 'center' });

      // Descargar el PDF
      //doc.save(`bitacora-${bitacora.tunidad}.pdf`);

      const pdfOutput = doc.output();
      const buffer = new ArrayBuffer(pdfOutput.length);
      const array = new Uint8Array(buffer);
      for (let i = 0; i < pdfOutput.length; i++) {
        array[i] = pdfOutput.charCodeAt(i);
      }
      const blob = new Blob([array], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url);
    }
  }
}
