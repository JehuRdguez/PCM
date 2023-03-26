import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { BitacoraFormComponent } from './elementos/bitacoraform/bitacoraform.component';
import { DetallesBitacoraComponent } from './elementos/bitacoradetalles/bitacoradetalles.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


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
  startDate: Date = new Date();
  endDate: Date = new Date();
  filasOriginales: Array<any> = [];

  fechaInicioSeleccionada: boolean = false;
  fechaFinalSeleccionada: boolean = false;
  filtroClaveSeleccionado: boolean = false;

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
          this.filasOriginales = res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error en la obtención de datos.")
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
          alert("Registo de la bitácora eliminado.")
          this.getAllBitacora();
        },
        error: () => {
          alert("¡Error!")
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
  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }*/
  generarPDF(bitacora: any) {
    const doc = new jsPDF();
    const fecha = isNaN(Date.parse(bitacora.fhfecha)) ? '' : new Date(bitacora.fhfecha).toLocaleDateString();

    const data = {
      ecodbitacora: bitacora.ecodbitacora,
      tunidad: bitacora.tunidad,
      ttiporeporte: bitacora.ttiporeporte,
      tcaptura: bitacora.tcaptura,
      tunidadnegocios: bitacora.tunidadnegocios,
      fhfecha: fecha,
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
      const imgWidth = 30;
      const imgHeight = 30;
      const docWidth = doc.internal.pageSize.width;
      const x = (docWidth - imgWidth) / 2;
      doc.addImage(img, 'PNG', 20, 0, imgWidth, imgHeight);

      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1; // Los meses comienzan en 0, así que sumamos 1
      const year = date.getFullYear();
      const dateString = `${day}/${month}/${year}`;

      doc.setFont("helvetica");
      doc.setFontSize(18);
      doc.text('Reporte de incidencias', doc.internal.pageSize.width / 2, 20, { align: 'center' });
      doc.setFontSize(12);
      doc.text('Creación:' + dateString, 150, 10);
      doc.text('Código:' + data.ecodbitacora.toString() + '-' + data.tunidad, 150, 20);

      const tableHeight = 120; // Altura estimada de una fila de la tabla

      // Calcular la posición en la que se debe agregar la tabla
      const tableY = (doc.internal.pageSize.getHeight() - (2 * tableHeight)) / 2;

      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Unidad', 'Unidad de negocio', 'Tipo de reporte', 'Fecha', 'Turno', 'Capturista']],
        body: [
          [data.tunidad, data.tunidadnegocios, data.ttiporeporte, data.fhfecha, data.tturno, data.tcaptura]
        ],
        startY: tableY + 0// Agregar la tabla en la posición calculada
      })
      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Disponibilidad', 'Piezas utilizadas', 'Técnico', 'Supervisor', 'Sistema', 'Subsistema']],
        body: [
          [data.tdisponibilidad, data.tpiezasutilizadas, data.ttecnico, data.tsupervisor, data.tsistema, data.tsubsistema]
        ],
        startY: tableY + 20 // Agregar la tabla debajo de la segunda tabla
      })

      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Descripción', 'Efectos de falla']],
        body: [
          [data.tdescripcion, data.tefectosfalla]
        ],
        startY: tableY + 50 // Agregar la tabla debajo de la primera tabla
      })

      // Ajustar la posición X e Y del texto en relación con la línea
      var textX3 = (30 + 90) / 2; // centro de la línea
      var textY3 = 125 + 10; // debajo de la línea
      var textX4 = (120 + 180) / 2; // centro de la línea
      var textY4 = 125 + 10; // debajo de la línea

      doc.setFontSize(10);

      doc.line(30, 130, 90, 130);
      doc.text('Juan de la Cruz Lopez Ochoa', textX3, textY3, { align: 'center' });
      doc.text('Coordinador', textX3, textY3 + 5, { align: 'center' });

      doc.line(120, 130, 180, 130);
      doc.text(data.tsupervisor, textX4, textY4, { align: 'center' });
      doc.text('Supervisor', textX4, textY4 + 5, { align: 'center' });

      const tableHeight2 = 100; // Altura estimada de una fila de la tabla
      const imgHeight2 = 40; // Altura de la imagen
      const imgMarginTop = 5; // Margen superior de la imagen
      const lineY = imgHeight2 + imgMarginTop + tableHeight2; // Posición Y de la línea
      const lineX1 = 0; // Posición X inicial de la línea
      const lineX2 = doc.internal.pageSize.width - 0; // Posición X final de la línea
      doc.line(lineX1, lineY, lineX2, lineY); // Agregar la línea al documento
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77

      doc.addImage(img, 'PNG', 20, 142, imgWidth, imgHeight);
      doc.setFontSize(18);
      doc.text('Reporte de incidencias', doc.internal.pageSize.width / 2, 160, { align: 'center' });
      doc.setFontSize(12);
      doc.text('Creación:' + dateString, 150, 150);
      doc.text('Código:' + data.ecodbitacora.toString() + '-' + data.tunidad, 150, 160);

      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Unidad', 'Unidad de negocio', 'Tipo de reporte', 'Fecha', 'Turno', 'Capturista']],
        body: [
          [data.tunidad, data.tunidadnegocios, data.ttiporeporte, data.fhfecha, data.tturno, data.tcaptura]
        ],
        startY: tableY + 140// Agregar la tabla en la posición calculada
      })
      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Disponibilidad', 'Piezas utilizadas', 'Técnico', 'Supervisor', 'Sistema', 'Subsistema']],
        body: [
          [data.tdisponibilidad, data.tpiezasutilizadas, data.ttecnico, data.tsupervisor, data.tsistema, data.tsubsistema]
        ],
        startY: tableY + 160 // Agregar la tabla debajo de la segunda tabla
      })

      autoTable(doc, {
        headStyles: { fillColor: [0, 0, 0] },
        theme: 'grid',
        head: [['Descripción', 'Efectos de falla']],
        body: [
          [data.tdescripcion, data.tefectosfalla]
        ],
        startY: tableY + 190 // Agregar la tabla debajo de la primera tabla
      })

      doc.line(30, 265, 90, 265);

      // Ajustar la posición X e Y del texto en relación con la línea
      var textX = (30 + 90) / 2; // centro de la línea
      var textY = 260 + 10; // debajo de la línea
      var textX2 = (120 + 180) / 2; // centro de la línea
      var textY2 = 260 + 10; // debajo de la línea

      doc.setFontSize(10);
      doc.text('Juan de la Cruz Lopez Ochoa', textX, textY, { align: 'center' });
      doc.text('Coordinador', textX, textY + 5, { align: 'center' });

      doc.line(120, 265, 180, 265);
      doc.text(data.tsupervisor, textX2, textY2, { align: 'center' });
      doc.text('Supervisor', textX2, textY2 + 5, { align: 'center' });

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
  applyFilter(event: Event) {
    this.filtroClaveSeleccionado = true;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyStartDateFilter(event: MatDatepickerInputEvent<Date>) {
    this.fechaInicioSeleccionada = true;

    if (!event.value) return;

    this.startDate = event.value;
  }

  applyEndDateFilter(event: MatDatepickerInputEvent<Date>) {
    this.fechaFinalSeleccionada = true;

    if (!event.value) return;

    this.endDate = event.value;

    if (this.startDate && this.endDate) {
      const filtrados = this.filasOriginales.filter((fila) => {
        const fecha = Date.parse(fila.fhfecha)

        return fecha >= this.startDate.getTime() && fecha <= this.endDate.getTime();
      })

      this.dataSource.data = filtrados;

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  limpiar() {
    location.reload();
  }

  generarInformes() {
    const doc = new jsPDF();

    if (this.fechaInicioSeleccionada && this.fechaFinalSeleccionada) {  //CONDICIONAL PARA CUANDO SE SELECCIONA EL RANGO DE FECHAS Y/O PALABRA CLAVE

      const filterValue = this.dataSource.filter.trim().toLowerCase();
      const filteredData = this.filasOriginales.filter((bitacora: any) => {
        return bitacora.tunidad.toLowerCase().includes(filterValue) ||
               bitacora.ttiporeporte.toLowerCase().includes(filterValue) ||
               bitacora.tcaptura.toLowerCase().includes(filterValue) ||
               bitacora.tunidadnegocios.toLowerCase().includes(filterValue) ||
               bitacora.fhfecha.toLowerCase().includes(filterValue) ||
               bitacora.tdescripcion.toLowerCase().includes(filterValue);
      }).filter((bitacora: any) => {
        const fecha = new Date(bitacora.fhfecha);
        return fecha >= this.startDate && fecha <= this.endDate;
      });


      ////////////////////////////////////////////////////////////////////APARTIR DE AQUÍ ES PURO DISEÑO
    
      const tableHeight = 150;
      const pageHeight = doc.internal.pageSize.getHeight();
    
      let currentY = 30;
    
      filteredData.forEach((bitacora: any, index: number) => {
        if (currentY + tableHeight > pageHeight) {
          doc.addPage();
          currentY = 30;
        }
    
        autoTable(doc, {
          head: [['Unidad', 'Unidad de negocio', 'Tipo de reporte', 'Fecha', 'Turno', 'Capturista']],
          body: [[
            bitacora.tunidad,
            bitacora.tunidadnegocios,
            bitacora.ttiporeporte,
            isNaN(Date.parse(bitacora.fhfecha)) ? '' : new Date(bitacora.fhfecha).toLocaleDateString(),
            bitacora.tturno,
            bitacora.tcaptura
          ]],
          startY: currentY
        });
    
        autoTable(doc, {
          head: [['Disponibilidad', 'Piezas utilizadas', 'Técnico', 'Supervisor', 'Sistema', 'Subsistema']],
          body: [[
            bitacora.tdisponibilidad,
            bitacora.tpiezasutilizadas,
            bitacora.ttecnico,
            bitacora.tsupervisor,
            bitacora.tsistema,
            bitacora.tsubsistema
          ]],
          startY: currentY + 20
        });

        autoTable(doc, {
          head: [['Descripción', 'Efectos de falla']],
          body: [[
            bitacora.tdescripcion,
            bitacora.tefectosfalla,
          ]],
          startY: currentY + 50
        });
    
        currentY += tableHeight; // SALTO DE PÁGINA COMPLETA DESPUÉS DE ÚLTIMO REGISTRO
        //currentY += 110; // SALTO DE MEDIA PÁGINA DESPUÉS DE ÚLTIMO REGISTRO
      });



  } else if (this.filtroClaveSeleccionado){     //CONDICIONAL PARA CUANDO SE SELECCIONA SOLO PALABRA CLAVE


    const filterValue = this.dataSource.filter.trim().toLowerCase();
    const filteredData = this.filasOriginales.filter((bitacora: any) => {
      return bitacora.tunidad.toLowerCase().includes(filterValue) ||
             bitacora.ttiporeporte.toLowerCase().includes(filterValue) ||
             bitacora.tcaptura.toLowerCase().includes(filterValue) ||
             bitacora.tunidadnegocios.toLowerCase().includes(filterValue) ||
             bitacora.tdescripcion.toLowerCase().includes(filterValue);
    })

    ////////////////////////////////////////////////////////////////////APARTIR DE AQUÍ ES PURO DISEÑO

    
    const tableHeight = 150;
    const pageHeight = doc.internal.pageSize.getHeight();
  
    let currentY = 30;
  
    filteredData.forEach((bitacora: any, index: number) => {
      if (currentY + tableHeight > pageHeight) {
        doc.addPage();
        currentY = 30;
      }
  
      autoTable(doc, {
        head: [['Unidad', 'Unidad de negocio', 'Tipo de reporte', 'Fecha', 'Turno', 'Capturista']],
        body: [[
          bitacora.tunidad,
          bitacora.tunidadnegocios,
          bitacora.ttiporeporte,
          isNaN(Date.parse(bitacora.fhfecha)) ? '' : new Date(bitacora.fhfecha).toLocaleDateString(),
          bitacora.tturno,
          bitacora.tcaptura
        ]],
        startY: currentY
      });
  
      autoTable(doc, {
        head: [['Disponibilidad', 'Piezas utilizadas', 'Técnico', 'Supervisor', 'Sistema', 'Subsistema']],
        body: [[
          bitacora.tdisponibilidad,
          bitacora.tpiezasutilizadas,
          bitacora.ttecnico,
          bitacora.tsupervisor,
          bitacora.tsistema,
          bitacora.tsubsistema
        ]],
        startY: currentY + 20
      });

      autoTable(doc, {
        head: [['Descripción', 'Efectos de falla']],
        body: [[
          bitacora.tdescripcion,
          bitacora.tefectosfalla,
        ]],
        startY: currentY + 50
      });
  
      currentY += tableHeight; // SALTO DE PÁGINA COMPLETA DESPUÉS DE ÚLTIMO REGISTRO
      //currentY += 110; // SALTO DE MEDIA PÁGINA DESPUÉS DE ÚLTIMO REGISTRO
    });


  } else {     //CONDICIONAL PARA CUANDO NO HAY FILTROS SELECCIONADOS


    const data = this.filasOriginales.filter((bitacora: any) => {
      return bitacora.tunidad.toLowerCase() ||
             bitacora.ttiporeporte.toLowerCase() ||
             bitacora.tcaptura.toLowerCase()||
             bitacora.tunidadnegocios.toLowerCase() ||
             bitacora.tdescripcion.toLowerCase();
    })

      ////////////////////////////////////////////////////////////////////APARTIR DE AQUÍ ES PURO DISEÑO


    const tableHeight = 150;
    const pageHeight = doc.internal.pageSize.getHeight();
  
    let currentY = 30;
  
    data.forEach((bitacora: any, index: number) => {
      if (currentY + tableHeight > pageHeight) {
        doc.addPage();
        currentY = 30;
      }
  
      autoTable(doc, {
        head: [['Unidad', 'Unidad de negocio', 'Tipo de reporte', 'Fecha', 'Turno', 'Capturista']],
        body: [[
          bitacora.tunidad,
          bitacora.tunidadnegocios,
          bitacora.ttiporeporte,
          isNaN(Date.parse(bitacora.fhfecha)) ? '' : new Date(bitacora.fhfecha).toLocaleDateString(),
          bitacora.tturno,
          bitacora.tcaptura
        ]],
        startY: currentY
      });
  
      autoTable(doc, {
        head: [['Disponibilidad', 'Piezas utilizadas', 'Técnico', 'Supervisor', 'Sistema', 'Subsistema']],
        body: [[
          bitacora.tdisponibilidad,
          bitacora.tpiezasutilizadas,
          bitacora.ttecnico,
          bitacora.tsupervisor,
          bitacora.tsistema,
          bitacora.tsubsistema
        ]],
        startY: currentY + 20
      });

      autoTable(doc, {
        head: [['Descripción', 'Efectos de falla']],
        body: [[
          bitacora.tdescripcion,
          bitacora.tefectosfalla,
        ]],
        startY: currentY + 50
      });
  
      currentY += tableHeight; // SALTO DE PÁGINA COMPLETA DESPUÉS DE ÚLTIMO REGISTRO
      //currentY += 110; // SALTO DE MEDIA PÁGINA DESPUÉS DE ÚLTIMO REGISTRO

    });

  }

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



/* FUNCIÓN ORIGINAL
  generarInformes() {
    const doc = new jsPDF();
    const data: any[][] = [];

    // Obtiene todos los datos de la tabla
    this.dataSource.data.forEach(row => {
      data.push([
        row.tunidad,
        row.ttiporeporte,
        row.tcaptura,
        row.tunidadnegocios,
        new Date(row.fhfecha).toLocaleDateString(),
        row.tdescripcion
      ]);
    });

    // Agrega la tabla al PDF
    autoTable(doc, {
      head: [['Equipo', 'Tipo de falla', 'Capturó', 'Unidad de negocios', 'Fecha', 'Descripción']],
      body: data as any[][]
    });

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

*/
