import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
})
export class CreditosPage {
  id!: string;
  name_credit_1!: string;
  name_credit_2!: string;
  name_credit_3!: string;
  name_credit_4!: string;
  name_credit_5!: string;
  name_credit_6!: string;
  description_credit_1!: string;
  description_credit_2!: string;
  description_credit_3!: string;
  description_credit_4!: string;
  description_credit_5!: string;
  description_credit_6!: string;
  url_evidence_credit_1!: string;
  url_evidence_credit_2!: string;
  url_evidence_credit_3!: string;
  url_evidence_credit_4!: string;
  url_evidence_credit_5!: string;
  url_evidence_credit_6!: string;
  value_credit_1!: string;
  value_credit_2!: string;
  value_credit_3!: string;
  value_credit_4!: string;
  value_credit_5!: string;
  value_credit_6!: string;
  responseData!: any;
  status_credit_1!: string;
  status_credit_2!: string;
  status_credit_3!: string;
  status_credit_4!: string;
  status_credit_5!: string;
  status_credit_6!: string;



  constructor(private router: Router, private cookieService: CookieService, private http:HttpClient) { 
    //para mostrar en el html
    //fila 1 
    this.name_credit_1 = this.cookieService.get('Ncredito1');
    this.name_credit_2 = this.cookieService.get('Ncredito2');
    this.name_credit_3 = this.cookieService.get('Ncredito3');
    this.name_credit_4 = this.cookieService.get('Ncredito4');
    this.name_credit_5 = this.cookieService.get('Ncredito5');
    this.name_credit_6 = this.cookieService.get('Ncredito6');
    this.description_credit_1 = this.cookieService.get('Descripcion1');
    this.description_credit_2 = this.cookieService.get('Descripcion2');
    this.description_credit_3 = this.cookieService.get('Descripcion3');
    this.description_credit_4 = this.cookieService.get('Descripcion4');
    this.description_credit_5 = this.cookieService.get('Descripcion5');
    this.description_credit_6 = this.cookieService.get('Descripcion6');
    this.value_credit_1 = this.cookieService.get('value1:');
    this.value_credit_2 = this.cookieService.get('value2:');
    this.value_credit_3 = this.cookieService.get('value3:');
    this.value_credit_4 = this.cookieService.get('value4:');
    this.value_credit_5 = this.cookieService.get('value5:');
    this.value_credit_6 = this.cookieService.get('value6:');
    this.url_evidence_credit_1 = this.cookieService.get('URL1');
    this.url_evidence_credit_2 = this.cookieService.get('URL2');
    this.url_evidence_credit_3 = this.cookieService.get('URL3');
    this.url_evidence_credit_4 = this.cookieService.get('URL4');
    this.url_evidence_credit_5 = this.cookieService.get('URL5');
    this.url_evidence_credit_6 = this.cookieService.get('URL6');
    this.status_credit_1 = this.cookieService.get('Status1');
    this.status_credit_2 = this.cookieService.get('Status2');
    this.status_credit_3 = this.cookieService.get('Status3');
    this.status_credit_4 = this.cookieService.get('Status4');
    this.status_credit_5 = this.cookieService.get('Status5');
    this.status_credit_6 = this.cookieService.get('Status6');

  }
  

  ionViewDidEnter() {
    // Llama al método que deseas ejecutar siempre al mostrar la página
    this.getcreditos();
    
    const redirected = localStorage.getItem('redirected');

    if (!redirected) {
      // Establecer la bandera de redirección
      localStorage.setItem('redirected', 'true');
    
      // Agregar un retraso de 1 segundo antes de refrescar la página
      setTimeout(() => {
        window.location.reload();
      }, 200);
    } else {
      // Limpiar la bandera de redirección
      localStorage.removeItem('redirected');
    }
  
  }
 

  getcreditos() {
    this.id = this.cookieService.get('user_id');
    localStorage.getItem('access_token');
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
        this.cookieService.set('Ncredito1', name_credit_1);

        const name_credit_2 = response.name_credit_2;
        //console.log('Ncredito2:', name_credit_2);
        this.cookieService.set('Ncredito2', name_credit_2);

        const name_credit_3 = response.name_credit_3;
        //console.log('Ncredito3:', name_credit_3);
        this.cookieService.set('Ncredito3', name_credit_3);

        const name_credit_4 = response.name_credit_4;
        //console.log('Ncredito3:', name_credit_4);
        this.cookieService.set('Ncredito4', name_credit_4);

        const name_credit_5 = response.name_credit_5;
        //console.log('Ncredito3:', name_credit_5);
        this.cookieService.set('Ncredito5', name_credit_5);

        const name_credit_6 = response.name_credit_6;
        //console.log('Ncredito3:', name_credit_6);
        this.cookieService.set('Ncredito6', name_credit_6);
        

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
        //console.log('value1:', value_credit_1);
        this.cookieService.set('value1:', value_credit_1);

        const value_credit_2 = response.value_credit_2;
        //console.log('value2:', value_credit_2);
        this.cookieService.set('value2:', value_credit_1);

        const value_credit_3 = response.value_credit_3;
        //console.log('value3:', value_credit_3);
        this.cookieService.set('value3:', value_credit_3);

        const value_credit_4 = response.value_credit_4;
        //console.log('value4:', value_credit_4);
        this.cookieService.set('value4:', value_credit_4);

        const value_credit_credit_5 = response.value_credit_credit_5;
        //console.log('value5:', value_credit_credit_5);
        this.cookieService.set('value5:', value_credit_credit_5);

        const value_credit_6 = response.value_credit_6;
        //console.log('value6:', value_credit_6);
        this.cookieService.set('value6:', value_credit_6);

        //Status

        const status_credit_1 = response.status_credit_1;
        this.cookieService.set('Status1', status_credit_1);
        
        const status_credit_2 = response.status_credit_2;
        this.cookieService.set('Status2', status_credit_2);
        
        const status_credit_3 = response.status_credit_3;
        this.cookieService.set('Status3', status_credit_3);
        
        const status_credit_4 = response.status_credit_4;
        this.cookieService.set('Status4', status_credit_4);
        
        const status_credit_5 = response.status_credit_5;
        this.cookieService.set('Status5', status_credit_5);

        const status_credit_6 = response.status_credit_6;
        this.cookieService.set('Status6', status_credit_6);

      },
      (error) => {
        // Lógica para manejar el error
        console.error(error);
        this.cookieService.delete('Ncredito1');
        this.cookieService.delete('Descripcion1');
        this.cookieService.delete('URL1');
        this.cookieService.delete('value1');
        this.cookieService.delete('Status1');

        this.cookieService.delete('Ncredito2');
        this.cookieService.delete('Descripcion2');
        this.cookieService.delete('URL2');
        this.cookieService.delete('value2');
        this.cookieService.delete('Status2');

        this.cookieService.delete('Ncredito3');
        this.cookieService.delete('Descripcion3');
        this.cookieService.delete('URL3');
        this.cookieService.delete('value3');
        this.cookieService.delete('Status3');

        this.cookieService.delete('Ncredito4');
        this.cookieService.delete('Descripcion4');
        this.cookieService.delete('URL4');
        this.cookieService.delete('value4');
        this.cookieService.delete('Status4');

        this.cookieService.delete('Ncredito5');
        this.cookieService.delete('Descripcion5');
        this.cookieService.delete('URL5');
        this.cookieService.delete('value5');
        this.cookieService.delete('Status5');

        this.cookieService.delete('Ncredito6');
        this.cookieService.delete('Descripcion6');
        this.cookieService.delete('URL6');
        this.cookieService.delete('value6');
        this.cookieService.delete('Status6');
        
        
        
        
        
      }
    );

    }
     patchCredi(){
      const userId = this.cookieService.get('user_id'); // Reemplaza 'your_user_id' con el ID de usuario correcto
    const url = `https://platform-api.aaaimx.org/api/v1/complementaryCredit/credits/${userId}`;

  // Define el cuerpo de la solicitud con los datos que deseas actualizar
  const requestBody = {
    // Aquí debes incluir los campos y valores que deseas actualizar
    // Ejemplo:
    name_credit_1: 'new_value1',
    
  };

  // Define los encabezados de la solicitud
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  });


  // Realiza la solicitud PATCH
  this.http.patch(url, requestBody, { headers }).subscribe(
    (response) => {
      // Lógica para manejar la respuesta exitosa
      console.log('PATCH request successful', response);
    },
    (error) => {
      // Lógica para manejar el error
      console.error('PATCH request error', error);
    }
  );

     }
     


  logout() {
    // Redirigir a la página de inicio de sesión
    //this.cookieService.deleteAll();
    this.router.navigateByUrl('/home');
    
  }
}