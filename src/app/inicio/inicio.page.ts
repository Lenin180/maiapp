import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html', 
  styleUrls: ['./inicio.page.scss'],
  
})
export class InicioPage implements OnInit {
  //id: string;
  fullname!: string;
  emailU!: string;
  //id: String;

  constructor(private router: Router, private http:HttpClient, private cookieService: CookieService ) { 
    //Llama en loca storage el item "access_token" 
    //console.log(localStorage.getItem('access_token'))
    //Esto va a servir adelante 
    //this.id = this.cookieService.get('user_id');
    //console.log('id_usuario:', this.id);

    //Obteniendo valores para mostrar en el html de perfil 
    
  }
    getcookies(){
      this.fullname = this.cookieService.get('fullnameU');
    this.emailU = this.cookieService.get('emailU');
    console.log('Nombre estudiante', this.fullname);
    console.log('Email estudiante', this.emailU);
  
    }
  
  

  ngOnInit() {
    this.getcookies();

  } 
   //Boton bancode proyectos 
  redirectToUrl() {
    const url = 'https://docs.google.com/spreadsheets/d/1vTdiAxo60aoPjZwX-IprmwO3fc8sOOVu2zeqUzYXo4I/edit#gid=0'; // URL a la que deseas redireccionar
    window.open(url, '_blank');
  }
  //Boton creditos comp
  redirectToCred() {
    //FUNCIONAA (ASI HACER PARA pasar el id mańana)
    //console.log(localStorage.getItem('access_token'))

    
  this.router.navigateByUrl('/creditos');
    //Imprimir token access (solo para saber que esta guardado y se puede utilizar)
    
    }
  logout() {
    // Redirigir a la página de inicio de sesión
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/home');

  }
}

