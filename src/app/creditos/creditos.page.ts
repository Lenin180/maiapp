import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
})
export class CreditosPage {

  constructor(private router: Router, private cookieService: CookieService) { }


  capturar() {
  }

  logout() {
    // Redirigir a la página de inicio de sesión
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/home');
    
  }
}


