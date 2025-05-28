import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  
  
  constructor(private authService: AuthService, private router: Router) {}
  
  // let prueba = el.getElementsByClassName('prueba');

  onClick() {
    console.log('Button clicked!');
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige a la página de login después de cerrar sesión
    // Aquí puedes agregar la lógica para cerrar sesión, como llamar a un servicio de autenticación
  }



}
