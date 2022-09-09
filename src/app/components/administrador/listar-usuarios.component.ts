import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NombreVacuna } from 'src/app/models/nombre-vacuna';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/sevice/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  vacunas:string[] = [];
  usuarios: Usuario[] = [];
  usuariosAux: Usuario[] = [];
  estado:number = 0;
  nombreVacuna:string = "0";

  fechaInicio!:Date;
  fechaFin!:Date;

  constructor(private usuarioService:UsuarioService,
              private router:Router ) { }

  ngOnInit(): void {
    this.vacunas = Object.keys(NombreVacuna).filter((item) => {
      return isNaN(Number(item));
    });

    this.cargarUsuarios();

  }



  cargarUsuarios(){
    this.usuarioService.listarUsuarios().subscribe(
      (data)=> {  
        this.usuarios = data;
        this.usuariosAux = data;
        
      }
    )
    
  }

  eliminar(id:number){

    if(!confirm('Eliminar este usario?')){
      return;
    }

    this.usuarioService.eliminarUsuario(id).subscribe(
      (data) => {this.cargarUsuarios();},
      (error) => { console.log(error.error);}

    )
  }


  onChangeestado(event:any){
    this.fechaFin = new Date("yyyy-MM-dd");
    this.fechaInicio = new Date("yyyy-MM-dd");
    this.nombreVacuna = "0";


    if(event.target.value == 0){
      this.cargarUsuarios();
    }

    if(event.target.value == 1){
      this.buscarPorEstado(true);
    }

    if(event.target.value == 2){
      this.buscarPorEstado(false);
    }
    

  }


  onChangevacuna(event:any){
    this.fechaFin = new Date("yyyy-MM-dd");
    this.fechaInicio = new Date("yyyy-MM-dd");
    this.estado = 0;
    
    if(event.target.value == "0"){
      this.cargarUsuarios();
    }else{

      this.usuarioService.buscarUsuarioPorNombreVacuna(event.target.value).subscribe(
        (data) => { this.usuarios = data; }
      )
    }
  }



  buscarPorEstado(estado:boolean){
    this.usuarioService.buscarUsuarioPorEstado(estado).subscribe(
      (data) => { this.usuarios = data; }
    )
  }


  buscarPorFecha(){
    this.estado = 0;
    this.nombreVacuna = "0";
    
   
    this.usuarios =  this.usuariosAux
                    .filter(usu => usu.detalle.estadoVacuna == true)
                    .filter(usu => usu.detalle.fechaVacuna != null)
                    .filter(usu => {
                      if(usu.detalle.fechaVacuna <= this.fechaFin && usu.detalle.fechaVacuna >= this.fechaInicio){
                        return true;
                     }else{
                        return false;
                     }
                    })
   
  }


  limpiarBusquedas(){
    this.cargarUsuarios();
    this.estado = 0;
    this.nombreVacuna = "0";
 
    this.fechaFin = new Date("yyyy-MM-dd");
    this.fechaInicio = new Date("yyyy-MM-dd");
  }
  


}
