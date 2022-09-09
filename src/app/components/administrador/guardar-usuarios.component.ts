import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/sevice/usuario.service';

@Component({
  selector: 'app-guardar-usuarios',
  templateUrl: './guardar-usuarios.component.html',
  styleUrls: ['./guardar-usuarios.component.css']
})
export class GuardarUsuariosComponent implements OnInit {

  usuario:Usuario = new Usuario();
  mensajeError:string = "";

  constructor(private usuarioService:UsuarioService,
              private router:Router,
              private activateRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];

    if(id != undefined){
      this.buscarUsuario(id);
    }

 
  }

  buscarUsuario(id:number){
    this.usuarioService.buscarUsuario(id).subscribe(
      (data) => {  this.usuario = data;}
    )
  }




  onSubmit(){

    if(this.usuario.id == null){
      this.nuevoRegistro();
    }else{
      this.actualizarRegistro();
    }

    
  }

  nuevoRegistro(){

    this.usuarioService.crearUsuario(this.usuario).subscribe(
      (data) => { this.router.navigate(['/admin']); },
      (error) => { 
        this.mensajeError = error.error; 
        console.log(this.mensajeError);
      }
    )
  }

  actualizarRegistro(){
    this.usuarioService.actualizarUsuario(this.usuario,this.usuario.id).subscribe(
      (data) => { this.router.navigate(['/admin']); },
      (error) => { 
        console.log(this.mensajeError);
        this.mensajeError = error.error;
   
      }
    )
  }



}
