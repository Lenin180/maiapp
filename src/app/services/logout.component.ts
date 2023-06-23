import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
    selector: 'app-logout',
    template: "",
  })
  export class LogoutComponent {
    constructor(private router: Router) {}
  
    logout() {
     
  
      // Redirigir a la página de inicio de sesión
      this.router.navigate(['/login']);
    }
  }