import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../sevice/token.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoGuardService {

  roles:string[] = [];

  constructor(private tokenService:TokenService,
              private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    this.roles = this.tokenService.getRoles();
                  
    if(this.tokenService.getToken() != null && this.roles[0] == "ROLE_EMPLEADO" ){
      return true;
    }
                  
    this.router.navigate(['/']);
    return false;
  }
}
