import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  firstLetter2!: string;
  firstLetter!: string;
  access!: string;
  id!: string;
  responseData: any;
  constructor(private router: Router, private http:HttpClient, private cookieService: CookieService ) { 
    
    
  }
  ionViewDidEnter() {
    // Llama al método que deseas ejecutar siempre al mostrar la página
    this.getcookies();
    this.genpicture();

    //Para refrescar 1 vez 
    const redirected = localStorage.getItem('redirected');

    if (!redirected) {
      // Establecer la bandera de redirección
      localStorage.setItem('redirected', 'true');
  
      // Refrescar la página después de un breve período de tiempo (por ejemplo, 100 milisegundos)
      setTimeout(() => {
        window.location.reload();
      }, 1);
    } else {
      // Limpiar la bandera de redirección
      localStorage.removeItem('redirected');
    }
    
    
  /////  
  }
 


    getcookies(){
      this.id = this.cookieService.get('user_id');
      //console.log('user_id', this.id);
      this.fullname = this.cookieService.get('fullnameU');
      this.emailU = this.cookieService.get('emailU');
      this.occupation = this.cookieService.get('Ocupacion');
      this.career = this.cookieService.get('Carrera');
      this.specialty  = this.cookieService.get('Especialidad');
      this.full_name = this.cookieService.get('Nombres');
      this.first_lastname = this.cookieService.get('Ape1');
      this.second_lastname = this.cookieService.get('Ape2');
      this.admission = this.cookieService.get('Ingreso');
      localStorage.getItem('access_token');
      
      
      //this.access = this.cookieService.get('access_tokenk');
      //console.log('access_tokenk', this.access);
      

    //console.log('Nombre estudiante', this.fullname);
    //console.log('Email estudiante', this.emailU);
  
    }

    genpicture(){
      const firstLetter = this.full_name.charAt(0);
      //console.log('Primera letra:', firstLetter);
      const firstLetter2 = this.first_lastname.charAt(0);
      //console.log('Primera letra:', firstLetter2);
     // 
     
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
  
  redirecToEdit(){
    this.router.navigateByUrl('/editar-perfil');
  }


  logout() {
    // Redirigir a la página de inicio de sesión
    this.cookieService.deleteAll(); //Esto esta bien, pero por alguna razon perjudica al cargar datos en pagina 
    //hay que hacer que se refesque la pag para que fucnione correctamente 
    this.router.navigateByUrl('/home');
   
  }

  ngOnInit() {
   
  }

  



  
}