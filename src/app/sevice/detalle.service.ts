import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle } from '../models/detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  url = 'http://localhost:8080/api/empleado';

  constructor(private http:HttpClient) { }

  public buscarPerfil():Observable<any>{
    return this.http.get<any>(this.url+"/ver");
  }

  public buscarDetalle():Observable<any>{
    return this.http.get<any>(this.url+"/verdetalle");
  }

  public actualizarDetalle(detalle:Detalle):Observable<any>{
    return this.http.put<any>(this.url+"/actualizar",detalle);
  }
}
