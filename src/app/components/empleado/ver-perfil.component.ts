import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detalle } from 'src/app/models/detalle';
import { Usuario } from 'src/app/models/usuario';
import { DetalleService } from 'src/app/sevice/detalle.service';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

  usuario:Usuario = new Usuario();
  detalle:Detalle = new Detalle();
  constructor(private detalleService:DetalleService,
              private router:Router) { }

  ngOnInit(): void {
    this.usuario.detalle = this.detalle;

    this.cargarPerfil();
  }


  cargarPerfil(){
    this.detalleService.buscarPerfil().subscribe(
      (data) => { 
        this.usuario = data;
    
      
      }
    )
  }

}
