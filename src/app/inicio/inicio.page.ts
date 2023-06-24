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

  fullname!: string;
  emailU!: string;
  occupation!: string;
  career!: string; 
  specialty!: string;
  full_name!: string;
  first_lastname!: string;
  second_lastname!: string;
  admission!: string;
  
  constructor(private router: Router, private http:HttpClient, private cookieService: CookieService ) { 

   
  }
    getcookies(){
      this.fullname = this.cookieService.get('fullnameU');
      this.emailU = this.cookieService.get('emailU');
      this.occupation = this.cookieService.get('Ocupacion');
      this.career = this.cookieService.get('Carrera');
      this.specialty  = this.cookieService.get('Especialidad');
      this.full_name = this.cookieService.get('Nombres');
      this.first_lastname = this.cookieService.get('Ape1');
      this.second_lastname = this.cookieService.get('Ape2');
      this.admission = this.cookieService.get('Ingreso');

    //console.log('Nombre estudiante', this.fullname);
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