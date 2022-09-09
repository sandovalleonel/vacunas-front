import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarUsuariosComponent } from './components/administrador/guardar-usuarios.component';
import { ListarUsuariosComponent } from './components/administrador/listar-usuarios.component';
import { ActualizarPerfilComponent } from './components/empleado/actualizar-perfil.component';
import { VerPerfilComponent } from './components/empleado/ver-perfil.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuardService } from './guards/admin-guard.service';
import { EmpleadoGuardService } from './guards/empleado-guard.service';

const routes: Routes = [
  {path:'',component:IndexComponent},
  
  {path:'login',component:LoginComponent},
  {path:'admin',component:ListarUsuariosComponent,canActivate:[AdminGuardService]},
  {path:'admin/editar/:id',component:GuardarUsuariosComponent ,canActivate:[AdminGuardService]},
  {path:'admin/guardar',component:GuardarUsuariosComponent ,canActivate:[AdminGuardService]},
  {path:'empleado',component:VerPerfilComponent ,canActivate:[EmpleadoGuardService]},
  {path:'empleado/editar',component:ActualizarPerfilComponent,canActivate:[EmpleadoGuardService]},
  {path:'**',component:IndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
