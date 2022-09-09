import { Injectable } from '@angular/core';


const TOKEN = "token-jwt";
const USUARIO = "usuario";
const ROLES = "authorities";


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  constructor() { }




  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.setItem(TOKEN,token);
  }

  public getToken():any{
    return  window.sessionStorage.getItem(TOKEN);
  }


  public setUsuario(usuario:string):void{
    window.sessionStorage.removeItem(USUARIO);
    window.sessionStorage.setItem(USUARIO,usuario);
  }
  public getUsuario():any{
    return  window.sessionStorage.getItem(USUARIO); 
  }

  public setRoles(autoridade:string[]):void{
    window.sessionStorage.removeItem(ROLES);
    window.sessionStorage.setItem(ROLES,JSON.stringify(autoridade))


  }

  public getRoles():string[]{
    let misRoles:any = []
   
    if(sessionStorage.getItem(ROLES)){
     JSON.parse(sessionStorage.getItem(ROLES)+"").forEach(function(a:any) {
        misRoles.push (a['authority']);
       });
    }
    return misRoles
  }

  
  public logout():void{
    window.sessionStorage.clear();
  }
}
