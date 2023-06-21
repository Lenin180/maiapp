import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
})
export class CreditosPage {

  constructor(private router: Router) { }


  capturar() {
  }

  logout() {
     
  
    // Redirigir a la página de inicio de sesión
    this.router.navigateByUrl('/home');
    
  }
}


