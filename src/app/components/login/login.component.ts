import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/sevice/login.service';
import { TokenService } from 'src/app/sevice/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin = {
    "usuario":'',
    "password":''
  }

  usuarioResponse = {
    "token":'',
    "rol":[],
    "usuario":''
  }

  mensajeError:string = "";

  roles:string[] = []


  constructor(private loginService:LoginService,
              private tokenService:TokenService,
              private router:Router) { }

  ngOnInit(): void {

    if(this.tokenService.getToken() != null ){
      this.router.navigate(['/']);
    }
  }



  onSubmit(){




    this.loginService.ObtenerToken(this.usuarioLogin).subscribe(
      (data) => { 
        this.usuarioResponse = data; 
        this.tokenService.setToken(this.usuarioResponse.token);
        this.tokenService.setUsuario(this.usuarioResponse.usuario);
        this.tokenService.setRoles (this.usuarioResponse.rol);
        this.roles = this.tokenService.getRoles();

        if( this.roles.includes('ROLE_ADMIN') ){
          this.router.navigate(['/admin']);

        }else if ( this.roles.includes('ROLE_EMPLEADO') ){
          this.router.navigate(['/empleado']);
        }

      },
      (error) => {this.mensajeError = "usuario o constrasña incorrecto"}
    )
  }
}
