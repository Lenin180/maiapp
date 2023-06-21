import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html', 
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
  }

  redirectToUrl() {
    const url = 'https://docs.google.com/spreadsheets/d/1vTdiAxo60aoPjZwX-IprmwO3fc8sOOVu2zeqUzYXo4I/edit#gid=0'; // URL a la que deseas redireccionar
    window.open(url, '_blank');
  }

  redirectToCred() {
    this.router.navigateByUrl('/creditos');
   /// console.log('Access Token:', access); checar como poder usar las variables access y refresh en otras vetanas
  }
  logout() {
    // Redirigir a la página de inicio de sesión
    this.router.navigateByUrl('/home');
  }

///  public mostrarPassword: boolean = false; a futuro 
}

