import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postTicket(data: any){
    return this.http.post<any>("http://localhost:3000/Ticket/", data);
  }
  getTicket(){
    return this.http.get<any>("http://localhost:3000/Ticket");
  }
  putTicket(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/Ticket/"+id, data);
  }
  deleteTicket(id: number){
    return this.http.delete<any>("http://localhost:3000/Ticket/"+id);
  }
  /////////////////////////////////////////////////////////////////////////////
  postPreventivo(data: any){
    return this.http.post<any>("http://localhost:3000/Preventivo/", data);
  }
  getPreventivo(){
    return this.http.get<any>("http://localhost:3000/Preventivo");
  }
  putPreventivo(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/Preventivo/"+id, data);
  }
  deletePreventivo(id: number){
    return this.http.delete<any>("http://localhost:3000/Preventivo/"+id);
  }
  getPreventivoByid(id:Number){
    return this.http.get("http://localhost:3000/Preventivo/"+id);
}
/////////////////////////////////////////////////////////////////////////////
postManpower(data: any){
  return this.http.post<any>("http://localhost:3000/Manpower/", data);
}
getManpower(){
  return this.http.get<any>("http://localhost:3000/Manpower");
}
putManpower(data: any, id: number){
  return this.http.put<any>("http://localhost:3000/Manpower/"+id, data);
}
deleteManpower(id: number){
  return this.http.delete<any>("http://localhost:3000/Manpower/"+id);
}
getManpowerByid(id:Number){
  return this.http.get("http://localhost:3000/Manpower/"+id);
}
/////////////////////////////////////////////////////////////////////////////
postSemanal(data: any){
  return this.http.post<any>("http://localhost:3000/Semanal/", data);
}
getSemanal(){
  return this.http.get<any>("http://localhost:3000/Semanal");
}
putSemanal(data: any, id: number){
  return this.http.put<any>("http://localhost:3000/Semanal/"+id, data);
}
deleteSemanal(id: number){
  return this.http.delete<any>("http://localhost:3000/Semanal/"+id);
}
getSemanalByid(id:Number){
  return this.http.get("http://localhost:3000/Semanal/"+id);
}
/////////////////////////////////////////////////////////////////////////////
postKpis(data: any){
  return this.http.post<any>("http://localhost:3000/Kpis/", data);
}
getKpis(){
  return this.http.get<any>("http://localhost:3000/Kpis");
}
putKpis(data: any, id: number){
  return this.http.put<any>("http://localhost:3000/Kpis/"+id, data);
}
deleteKpis(id: number){
  return this.http.delete<any>("http://localhost:3000/Kpis/"+id);
}
getKpisByid(id:Number){
  return this.http.get("http://localhost:3000/Kpis/"+id);
}
//////////////////////////////////////////////////////////////////////////////////
postBitacora(data: any){
  return this.http.post<any>("http://localhost:3000/Bitacora/", data);
}
getBitacora(){
  return this.http.get<any>("http://localhost:3000/Bitacora");
}
putBitacora(data: any, id: number){
  return this.http.put<any>("http://localhost:3000/Bitacora/"+id, data);
}
deleteBitacora(id: number){
  return this.http.delete<any>("http://localhost:3000/Bitacora/"+id);
}
getBitacoraByid(id:Number){
  return this.http.get("http://localhost:3000/Bitacora/"+id);
}
}
