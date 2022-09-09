import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/auth';

  constructor(private http:HttpClient) { }


  public ObtenerToken(credenciales:any):Observable<any>{
    return this.http.post<any>(this.url,credenciales);
  }
}
