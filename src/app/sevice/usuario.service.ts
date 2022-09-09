import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NombreVacuna } from '../models/nombre-vacuna';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:8080/api/admin';
  constructor(private http:HttpClient) { }

  public listarUsuarios():Observable<any>{
    return this.http.get<any>(this.url+"/listar" );
  }

  public buscarUsuario(id:number):Observable<any>{
    return this.http.get<any>(this.url+"/listar/"+id );
  }
 
  public eliminarUsuario(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"/eliminar/"+id );
  }

  public crearUsuario(usuario:Usuario):Observable<any>{
    return this.http.post<any>(this.url+"/guardar",usuario );
  }

  public actualizarUsuario(usuario:Usuario,id:number):Observable<any>{
    return this.http.put<any>(this.url+"/actualizar/"+id ,usuario );
  }



  public buscarUsuarioPorEstado(estado:boolean):Observable<any>{
    return this.http.get<any>(this.url+"/buscar-por-estado?estado="+estado );
  }

  public buscarUsuarioPorNombreVacuna(vacuna:NombreVacuna):Observable<any>{
    return this.http.get<any>(this.url+"/buscar-por-vacuna?vacuna="+vacuna );
  }


}
