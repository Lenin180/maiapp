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
    this.getcreditos();


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
    }
  
  


  ngOnInit() {}
  
  getcreditos() {
    const url = `https://platform-api.aaaimx.org/api/v1/complementaryCredit/credits/${this.id}`;
  
  


    // Define los encabezados de la solicitud
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    this.http.get(url, { headers }).subscribe(
      (response: any) => {
        // Lógica para manejar la respuesta exitosa
        console.log(response);
        this.responseData = response;

        //Guardar Nombre_de_Actividad strig//
        const name_credit_1 = response.name_credit_1;
        //console.log('Ncredito1:', name_credit_1);
        this.cookieService.set('Descripcion1', name_credit_1);

        const name_credit_2 = response.name_credit_2;
        //console.log('Ncredito2:', name_credit_2);
        this.cookieService.set('Descripcion2', name_credit_2);

        const name_credit_3 = response.name_credit_3;
        //console.log('Ncredito3:', name_credit_3);
        this.cookieService.set('Descripcion3', name_credit_3);

        const name_credit_4 = response.name_credit_4;
        //console.log('Ncredito3:', name_credit_4);
        this.cookieService.set('Descripcion3', name_credit_4);

        const name_credit_5 = response.name_credit_5;
        //console.log('Ncredito3:', name_credit_5);
        this.cookieService.set('Descripcion3', name_credit_5);

        const name_credit_6 = response.name_credit_6;
        //console.log('Ncredito3:', name_credit_6);
        this.cookieService.set('Descripcion3', name_credit_6);
        

        //Guardar descripcion string//
        const description_credit_1 = response.description_credit_1;
        //console.log('Descripcion1:', description_credit_1);
        this.cookieService.set('Descripcion1', description_credit_1);

        const description_credit_2 = response.description_credit_2;
        //console.log('Descripcion2:', description_credit_2);
        this.cookieService.set('Descripcion2', description_credit_2);

        const description_credit_3 = response.description_credit_3;
        //console.log('Descripcion3:', description_credit_3);
        this.cookieService.set('Descripcion3', description_credit_3);
        
        const description_credit_4 = response.description_credit_4;
        //console.log('Descripcion4:', description_credit_4);
        this.cookieService.set('Descripcion4', description_credit_4);

        const description_credit_5 = response.description_credit_5;
        //console.log('Descripcion5:', description_credit_5);
        this.cookieService.set('Descripcion5', description_credit_5);

        const description_credit_6 = response.description_credit_6;
        //console.log('Descripcion6:', description_credit_6);
        this.cookieService.set('Descripcion6', description_credit_6);
        
        //Url evidencia //
        //url_evidence_credit_1
        const url_evidence_credit_1 = response.url_evidence_credit_1;
        //console.log('URL1:', url_evidence_credit_1);
        this.cookieService.set('URL1', url_evidence_credit_1);

        const url_evidence_credit_2 = response.url_evidence_credit_2;
        //console.log('URL2:', url_evidence_credit_2);
        this.cookieService.set('URL2', url_evidence_credit_2);

        const url_evidence_credit_3 = response.url_evidence_credit_3;
        //console.log('URL3:', url_evidence_credit_3);
        this.cookieService.set('URL3', url_evidence_credit_3);

        const url_evidence_credit_4 = response.url_evidence_credit_4;
        //console.log('URL4:', url_evidence_credit_4);
        this.cookieService.set('URL4', url_evidence_credit_4);

        const url_evidence_credit_5 = response.url_evidence_credit_5;
        //console.log('URL5:', url_evidence_credit_5);
        this.cookieService.set('URL5', url_evidence_credit_5);

        const url_evidence_credit_6 = response.url_evidence_credit_6;
        //console.log('URL6:', url_evidence_credit_6);
        this.cookieService.set('URL6', url_evidence_credit_6);

        //Value creditos
        //value_credit_1
        const value_credit_1 = response.value_credit_1;
        //console.log('URL6:', value_credit_1);
        this.cookieService.set('URL6', value_credit_1);
        const value_credit_2 = response.value_credit_2;
        //console.log('URL6:', value_credit_2);
        this.cookieService.set('URL6', value_credit_1);

        

        


      },
      (error) => {
        // Lógica para manejar el error
        console.error(error);
      }
    );
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
   // this.cookieService.deleteAll();
    this.router.navigateByUrl('/home');
  }




  
}