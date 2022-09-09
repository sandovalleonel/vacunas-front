import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detalle } from 'src/app/models/detalle';
import { NombreVacuna } from 'src/app/models/nombre-vacuna';
import { DetalleService } from 'src/app/sevice/detalle.service';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.component.html',
  styleUrls: ['./actualizar-perfil.component.css']
})
export class ActualizarPerfilComponent implements OnInit {

  mensajeError:string = '';

  detalle: Detalle = new Detalle();
  vacunas:string[]=[];
 

  constructor(private detalleService:DetalleService,
              private router:Router) { }

  ngOnInit(): void {
    this.vacunas = Object.keys(NombreVacuna).filter((item) => {
      return isNaN(Number(item));
    });

    this.cargarDetalle();

    

  }


  cargarDetalle(){
    this.detalleService.buscarDetalle().subscribe(
      (data) => { 
        this.detalle = data; 

      }
    )

  }


  onSubmit(){
    this.detalleService.actualizarDetalle(this.detalle).subscribe(
      (data) => { this.router.navigate(['/empleado']); },
      (error) => { this.mensajeError = error.error; }
    )

  }


 

}
