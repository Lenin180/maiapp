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
  name_credit_7!: string;
  name_credit_8!: string;
  name_credit_9!: string;
  name_credit_10!: string;
  description_credit_1!: string;
  description_credit_2!: string;
  description_credit_3!: string;
  description_credit_4!: string;
  description_credit_5!: string;
  description_credit_6!: string;
  description_credit_7!: string;
  description_credit_8!: string;
  description_credit_9!: string;
  description_credit_10!: string;
  url_evidence_credit_1!: string;
  url_evidence_credit_2!: string;
  url_evidence_credit_3!: string;
  url_evidence_credit_4!: string;
  url_evidence_credit_5!: string;
  url_evidence_credit_6!: string;
  url_evidence_credit_7!: string;
  url_evidence_credit_8!: string;
  url_evidence_credit_9!: string;
  url_evidence_credit_10!: string;
  value_credit_1!: any;
  value_credit_2!: any;
  value_credit_3!: any;
  value_credit_4!: any;
  value_credit_5!: any;
  value_credit_6!: any;
  value_credit_7!: any;
  value_credit_8!: any;
  value_credit_9!: any;
  value_credit_10!: any;
  responseData!: any;
  status_credit_1!: string;
  status_credit_2!: string;
  status_credit_3!: string;
  status_credit_4!: string;
  status_credit_5!: string;
  status_credit_6!: string;
  status_credit_7!: string;
  status_credit_8!: string;
  status_credit_9!: string;
  status_credit_10!: string;
  currentValue: number;
  fullname : any;
  clickCount: number = 0;
  valueCredits: string[] = ['', '', '', '', ''];

  constructor(private router: Router, private cookieService: CookieService, private http:HttpClient) {
    //para mostrar en el html
    //fila 1
    this.name_credit_1 = this.cookieService.get('Ncredito1');
    this.name_credit_2 = this.cookieService.get('Ncredito2');
    this.name_credit_3 = this.cookieService.get('Ncredito3');
    this.name_credit_4 = this.cookieService.get('Ncredito4');
    this.name_credit_5 = this.cookieService.get('Ncredito5');
    this.name_credit_6 = this.cookieService.get('Ncredito6');
    this.name_credit_7 = this.cookieService.get('Ncredito7');
    this.name_credit_8 = this.cookieService.get('Ncredito8');
    this.name_credit_9 = this.cookieService.get('Ncredito9');
    this.name_credit_10 = this.cookieService.get('Ncredito10');
    this.description_credit_1 = this.cookieService.get('Descripcion1');
    this.description_credit_2 = this.cookieService.get('Descripcion2');
    this.description_credit_3 = this.cookieService.get('Descripcion3');
    this.description_credit_4 = this.cookieService.get('Descripcion4');
    this.description_credit_5 = this.cookieService.get('Descripcion5');
    this.description_credit_6 = this.cookieService.get('Descripcion6');
    this.description_credit_7 = this.cookieService.get('Descripcion7');
    this.description_credit_8 = this.cookieService.get('Descripcion8');
    this.description_credit_9 = this.cookieService.get('Descripcion9');
    this.description_credit_10 = this.cookieService.get('Descripcion10');
    this.value_credit_1 = this.cookieService.get('value1:');
    this.value_credit_2 = this.cookieService.get('value2:');
    this.value_credit_3 = this.cookieService.get('value3:');
    this.value_credit_4 = this.cookieService.get('value4:');
    this.value_credit_5 = this.cookieService.get('value5:');
    this.value_credit_6 = this.cookieService.get('value6:');
    this.value_credit_7 = this.cookieService.get('value7:');
    this.value_credit_8 = this.cookieService.get('value8:');
    this.value_credit_9 = this.cookieService.get('value9:');
    this.value_credit_10 = this.cookieService.get('value10:');
    this.url_evidence_credit_1 = this.cookieService.get('URL1');
    this.url_evidence_credit_2 = this.cookieService.get('URL2');
    this.url_evidence_credit_3 = this.cookieService.get('URL3');
    this.url_evidence_credit_4 = this.cookieService.get('URL4');
    this.url_evidence_credit_5 = this.cookieService.get('URL5');
    this.url_evidence_credit_6 = this.cookieService.get('URL6');
    this.url_evidence_credit_7 = this.cookieService.get('URL7');
    this.url_evidence_credit_8 = this.cookieService.get('URL8');
    this.url_evidence_credit_9 = this.cookieService.get('URL9');
    this.url_evidence_credit_10 = this.cookieService.get('URL10');
    this.status_credit_1 = this.cookieService.get('Status1');
    this.status_credit_2 = this.cookieService.get('Status2');
    this.status_credit_3 = this.cookieService.get('Status3');
    this.status_credit_4 = this.cookieService.get('Status4');
    this.status_credit_5 = this.cookieService.get('Status5');
    this.status_credit_6 = this.cookieService.get('Status6');
    this.status_credit_7 = this.cookieService.get('Status7');
    this.status_credit_8 = this.cookieService.get('Status8');
    this.status_credit_9 = this.cookieService.get('Status9');
    this.status_credit_10 = this.cookieService.get('Status10');
    //
    this.currentValue = 6;
  }


  ionViewDidEnter() {
    // Llama al método que deseas ejecutar siempre al mostrar la página





  }

  ReloV(){

    const redirected = localStorage.getItem('redirected');
    if (!redirected) {
      // Establecer la bandera de redirección
      localStorage.setItem('redirected', 'true');

      // Refrescar la página después de un breve período de tiempo (por ejemplo, 1000 milisegundos)
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      // Limpiar la bandera de redirección
      localStorage.removeItem('redirected');
    }

  }




    deleteCredit() {
      this.id = this.cookieService.get('user_id');
      localStorage.getItem('access_token');
      const url = `https://platform-api.aaaimx.org/api/v1/complementaryCredit/credits/${this.id}`;

      // Define los encabezados de la solicitud
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      });

      // Realiza la solicitud DELETE
      this.http.delete(url, { headers }).subscribe(
        (response) => {
          // Lógica para manejar la respuesta exitosa
          console.log('DELETE request successful', response);

          this.router.navigate(['/inicio']);
          //this.ReloV();
        },
        (error) => {
          // Lógica para manejar el error
          console.error('DELETE request error', error);
        }

      );
    }

    PatchCreditos(){

    }



    //Hacer enable o no boton de BORRAR creditos segun los status que regresa

    deletebuton(){
      return (
        this.status_credit_1 === 'VIEWED' &&
        this.status_credit_2 === 'VIEWED' &&
        this.status_credit_3 === 'VIEWED' &&
        this.status_credit_4 === 'VIEWED' &&
        this.status_credit_5 === 'VIEWED'
      );
    }

    BorradorCred(){
      const id = this.cookieService.get('user_id');
      const url = `https://platform-api.aaaimx.org/api/v1/complementaryCredit/credits/${id}/`;
      const accessToken = localStorage.getItem('access_token');
     // console.log('Valor de accessToken:', accessToken);
      if (accessToken) {
        // Define los encabezados de la solicitud
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${accessToken}`
        });

        const body = {




          name_credit_1 : this.name_credit_1 !== '' ? this.name_credit_1 : null,
          description_credit_1 : this.description_credit_1 !== '' ? this.description_credit_1 : null,
          url_evidence_credit_1 : this.url_evidence_credit_1 !== '' ? this.url_evidence_credit_1 : null,
          value_credit_1 : this.value_credit_1 !== "null"  ? this.value_credit_1 : null,
          //                              //Si name_cret tiene valor '', evia un null
          name_credit_2: this.name_credit_2 !== '' ? this.name_credit_2 : null,
          description_credit_2 : this.description_credit_2 !== '' ? this.description_credit_2 : null,
          url_evidence_credit_2 : this.url_evidence_credit_2  !== '' ? this.url_evidence_credit_2 : null,
          value_credit_2 : this.value_credit_2 !== "null" ? this.value_credit_2 : null,
          //
          name_credit_3 : this.name_credit_3 !== '' ? this.name_credit_3 : null,
          description_credit_3 : this.description_credit_3 !== '' ? this.description_credit_3 : null,
          url_evidence_credit_3 : this.url_evidence_credit_3 !== '' ? this.url_evidence_credit_3 : null,
          value_credit_3 : this.value_credit_3 !== "null" ? this.value_credit_3 : null,
          //
          name_credit_4 : this.name_credit_4 !== '' ? this.name_credit_4 : null,
          description_credit_4 : this.description_credit_4 !== '' ? this.description_credit_4 : null,
          url_evidence_credit_4 : this.url_evidence_credit_4 !== '' ? this.url_evidence_credit_4 : null,
          value_credit_4 : this.value_credit_4 !== "null" ? this.value_credit_4 : null,
          //
          name_credit_5 : this.name_credit_5 !== '' ? this.name_credit_5 : null,
          description_credit_5 : this.description_credit_5 !== '' ? this.description_credit_5 : null,
          url_evidence_credit_5 : this.url_evidence_credit_5 !== '' ? this.url_evidence_credit_5 : null,
          value_credit_credit_5 : this.value_credit_5 !== "null" ? this.value_credit_5 : null,
          //
          name_credit_6 : this.name_credit_6 !== '' ? this.name_credit_6 : null,
          description_credit_6 : this.description_credit_6 !== '' ? this.description_credit_6 : null,
          url_evidence_credit_6 : this.url_evidence_credit_6 !== '' ? this.url_evidence_credit_6 : null,
          value_credit_6 : this.value_credit_6 !== "null" ? this.value_credit_6 : null,

          name_credit_7 : this.name_credit_7 !== '' ? this.name_credit_7 : null,
          description_credit_7 : this.description_credit_7 !== '' ? this.description_credit_7 : null,
          url_evidence_credit_7 : this.url_evidence_credit_7 !== '' ? this.url_evidence_credit_7 : null,
          value_credit_7 : this.value_credit_7 !== "null" ? this.value_credit_7 : null,

          name_credit_8 : this.name_credit_8 !== '' ? this.name_credit_8 : null,
          description_credit_8 : this.description_credit_8 !== '' ? this.description_credit_8 : null,
          url_evidence_credit_8 : this.url_evidence_credit_8 !== '' ? this.url_evidence_credit_8 : null,
          value_credit_8 : this.value_credit_8 !== "null" ? this.value_credit_8 : null,

          name_credit_9 : this.name_credit_9 !== '' ? this.name_credit_9 : null,
          description_credit_9 : this.description_credit_9 !== '' ? this.description_credit_9 : null,
          url_evidence_credit_9 : this.url_evidence_credit_9 !== '' ? this.url_evidence_credit_9 : null,
          value_credit_9 : this.value_credit_9 !== "null" ? this.value_credit_9 : null,

          name_credit_10 : this.name_credit_10 !== '' ? this.name_credit_10 : null,
          description_credit_10 : this.description_credit_10 !== '' ? this.description_credit_10 : null,
          url_evidence_credit_10 : this.url_evidence_credit_10 !== '' ? this.url_evidence_credit_10 : null,
          value_credit_10 : this.value_credit_10 !== "null" ? this.value_credit_10 : null,


        }
        console.log('Contenido de body:', body);
        this.http.patch(url, body, { headers }).subscribe(
          (response: any) => {
            //console.log('El PATCH se realizó correctamente.');
            // Lógica adicional después de realizar el PATCH exitosamente

            this.router.navigate(['/inicio']);

          },
          (error) => {
            // Lógica para manejar el error
            console.error(error);
            this.PostCred();
          }
        );
      }

    }

    PostCred(){
      const id = this.cookieService.get('user_id');
      const fullname = this.cookieService.get('NombreC');
      const enrollment = this.cookieService.get('Enrol');
      const url = `https://platform-api.aaaimx.org/api/v1/complementaryCredit/credits/`;
      const accessToken = localStorage.getItem('access_token');
     // console.log('Valor de accessToken:', accessToken);
      if (accessToken) {
        // Define los encabezados de la solicitud
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${accessToken}`
        });

        const body = {
            //Validacion
            user : id,
            full_ame : fullname,
            matricula : enrollment,


          name_credit_1 : this.name_credit_1 !== '' ? this.name_credit_1 : null,
          description_credit_1 : this.description_credit_1 !== '' ? this.description_credit_1 : null,
          url_evidence_credit_1 : this.url_evidence_credit_1 !== '' ? this.url_evidence_credit_1 : null,
          value_credit_1 : this.value_credit_1 !== ""  ? this.value_credit_1 : null,
          //                              //Si name_cret tiene valor '', evia un null
          name_credit_2: this.name_credit_2 !== '' ? this.name_credit_2 : null,
          description_credit_2 : this.description_credit_2 !== '' ? this.description_credit_2 : null,
          url_evidence_credit_2 : this.url_evidence_credit_2  !== '' ? this.url_evidence_credit_2 : null,
          value_credit_2 : this.value_credit_2 !== "" ? this.value_credit_2 : null,
          //
          name_credit_3 : this.name_credit_3 !== '' ? this.name_credit_3 : null,
          description_credit_3 : this.description_credit_3 !== '' ? this.description_credit_3 : null,
          url_evidence_credit_3 : this.url_evidence_credit_3 !== '' ? this.url_evidence_credit_3 : null,
          value_credit_3 : this.value_credit_3 !== "" ? this.value_credit_3 : null,
          //
          name_credit_4 : this.name_credit_4 !== '' ? this.name_credit_4 : null,
          description_credit_4 : this.description_credit_4 !== '' ? this.description_credit_4 : null,
          url_evidence_credit_4 : this.url_evidence_credit_4 !== '' ? this.url_evidence_credit_4 : null,
          value_credit_4 : this.value_credit_4 !== "" ? this.value_credit_4 : null,
          //
          name_credit_5 : this.name_credit_5 !== '' ? this.name_credit_5 : null,
          description_credit_5 : this.description_credit_5 !== '' ? this.description_credit_5 : null,
          url_evidence_credit_5 : this.url_evidence_credit_5 !== '' ? this.url_evidence_credit_5 : null,
          value_credit_credit_5 : this.value_credit_5 !== "" ? this.value_credit_5 : null,
          //
          name_credit_6 : this.name_credit_6 !== '' ? this.name_credit_6 : null,
          description_credit_6 : this.description_credit_6 !== '' ? this.description_credit_6 : null,
          url_evidence_credit_6 : this.url_evidence_credit_6 !== '' ? this.url_evidence_credit_6 : null,
          value_credit_6 : this.value_credit_6 !== "" ? this.value_credit_6 : null,

          name_credit_7 : this.name_credit_7 !== '' ? this.name_credit_7 : null,
          description_credit_7 : this.description_credit_7 !== '' ? this.description_credit_7 : null,
          url_evidence_credit_7 : this.url_evidence_credit_7 !== '' ? this.url_evidence_credit_7 : null,
          value_credit_7 : this.value_credit_7 !== "" ? this.value_credit_7 : null,

          name_credit_8 : this.name_credit_8 !== '' ? this.name_credit_8 : null,
          description_credit_8 : this.description_credit_8 !== '' ? this.description_credit_8 : null,
          url_evidence_credit_8 : this.url_evidence_credit_8 !== '' ? this.url_evidence_credit_8 : null,
          value_credit_8 : this.value_credit_8 !== "" ? this.value_credit_8 : null,

          name_credit_9 : this.name_credit_9 !== '' ? this.name_credit_9 : null,
          description_credit_9 : this.description_credit_9 !== '' ? this.description_credit_9 : null,
          url_evidence_credit_9 : this.url_evidence_credit_9 !== '' ? this.url_evidence_credit_9 : null,
          value_credit_9 : this.value_credit_9 !== "" ? this.value_credit_9 : null,

          name_credit_10 : this.name_credit_10 !== '' ? this.name_credit_10 : null,
          description_credit_10 : this.description_credit_10 !== '' ? this.description_credit_10 : null,
          url_evidence_credit_10 : this.url_evidence_credit_10 !== '' ? this.url_evidence_credit_10 : null,
          value_credit_10 : this.value_credit_10 !== "" ? this.value_credit_10 : null,


        }
        console.log('Contenido de body:', body);
        this.http.post(url, body, { headers }).subscribe(
          (response: any) => {
            //console.log('El PATCH se realizó correctamente.');
            // Lógica adicional después de realizar el PATCH exitosamente

            this.router.navigate(['/inicio']);

          },
          (error) => {
            // Lógica para manejar el error
            console.error(error);
          }
        );
      }

    }

    // Para mostrar apartados 6-10

    BotAgregarC(){

  if (this.clickCount === 0 && this.value_credit_6 !== '0') {
    this.value_credit_6 = '1';
  } else if (this.clickCount === 1 && this.value_credit_7 !== '0') {
    this.value_credit_7 = '1';
  } else if (this.clickCount === 2 && this.value_credit_8 !== '0') {
    this.value_credit_8 = '1';
  } else if (this.clickCount === 3 && this.value_credit_9 !== '0') {
    this.value_credit_9 = '1';
  } else if (this.clickCount === 4 && this.value_credit_10 !== '0') {
    this.value_credit_10 = '1';
  }

  this.clickCount++;
  if (this.clickCount > 4) {
    this.clickCount = 0;
  }




    }


    BorrarCampo(){

      if (this.value_credit_10 === '1') {
        this.value_credit_10 = 'null';
        this.clickCount = 4;
      } else if (this.value_credit_9 === '1') {
        this.value_credit_9 = 'null';
        this.clickCount = 3;
      } else if (this.value_credit_8 === '1') {
        this.value_credit_8 = 'null';
        this.clickCount = 2;
      } else if (this.value_credit_7 === '1') {
        this.value_credit_7 = 'null';
        this.clickCount = 1;
      } else if (this.value_credit_6 === '1') {
        this.value_credit_6 = 'null';
        this.clickCount = 0;
      }
    }



  logout() {
    // Redirigir a la página de inicio de sesión
    //this.cookieService.deleteAll();
    this.router.navigateByUrl('/home');

  }
}
