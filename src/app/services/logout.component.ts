import { Component } from '@angular/core';
import { AuthService } from './data.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-logout',
    template: "",
  })
  export class LogoutComponent {
    constructor(private authService: AuthService, private router: Router) {}
  
    logout() {
     
  
      // Redirigir a la página de inicio de sesión
      this.router.navigate(['/login']);
    }
  }