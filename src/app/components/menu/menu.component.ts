import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/sevice/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAdmin:boolean = false;
  isEmpleado:boolean = false;

  constructor(private tokenService:TokenService,
              private router:Router) { }

  ngOnInit(): void {

    if(this.tokenService.getRoles()[0] == "ROLE_ADMIN"){
      this.isAdmin = true;
      this.isEmpleado = false;

    }

    if(this.tokenService.getRoles()[0] == "ROLE_EMPLEADO"){
      this.isAdmin = false;
      this.isEmpleado = true;

    }
  }


  logout(){
    this.tokenService.logout();
    this.router.navigate(['/login']);
  }

}
