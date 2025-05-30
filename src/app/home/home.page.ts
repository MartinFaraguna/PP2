import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  nombre = '';
  apellido = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private ticketService: TicketService
  ) {}

  // let prueba = el.getElementsByClassName('prueba');

  onClick() {
    const nuevoTicket = {
      titulo: this.nombre,
      descripcion: this.apellido,
    };

    this.ticketService.crearTicket(nuevoTicket).then(() => {
      this.router.navigate(['/home']); // Redirige a la página de inicio después de guardar el ticket
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige a la página de login después de cerrar sesión
    // Aquí puedes agregar la lógica para cerrar sesión, como llamar a un servicio de autenticación
  }
}
