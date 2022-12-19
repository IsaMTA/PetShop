import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.less']
})
export class IniciarSesionComponent implements OnInit {

  constructor(private authService: AuthService) { 
    
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    console.log(this.authService.getUser())
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
  }

  ngOnInit(): void {
    
  }
  

}
