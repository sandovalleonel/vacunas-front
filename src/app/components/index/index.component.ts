import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/sevice/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private tokenService:TokenService,
              private router:Router) { }

  ngOnInit(): void {

    if(this.tokenService.getToken() == null || this.tokenService.getToken() == undefined){
      this.router.navigate(['/login']);
    }

    


  }


  regresar(){

    if(this.tokenService.getRoles()[0] == "ROLE_ADMIN"){
      this.router.navigate(['/admin']);
    }
    if(this.tokenService.getRoles()[0] == "ROLE_EMPLEADO"){
      this.router.navigate(['/empleado']);  
    }  
  }


}
