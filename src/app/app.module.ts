import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ListarUsuariosComponent } from './components/administrador/listar-usuarios.component';
import { GuardarUsuariosComponent } from './components/administrador/guardar-usuarios.component';
import { VerPerfilComponent } from './components/empleado/ver-perfil.component';
import { ActualizarPerfilComponent } from './components/empleado/actualizar-perfil.component';


import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './interceptor/inventario-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    LoginComponent,
    ListarUsuariosComponent,
    GuardarUsuariosComponent,
    VerPerfilComponent,
    ActualizarPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
