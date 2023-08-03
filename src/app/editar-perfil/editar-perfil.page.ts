import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  ElementRef, HostListener } from '@angular/core'; //para retraer el ion-date


//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
  //providers: [DatePipe]
})
export class EditarPerfilPage {
  id!: string;
  email!: any;
  full_name!: any;
  first_lastname!: string;
  second_lastname!: string;
  CURP!: string;
  NSS!: string;
  phone!: string;
  address!: string;
  postal_code!: string;
  personal_email!: string;
  religion!: string;
  weight!: string;
  height!: string;
  responseData!: any;
  gender!: string;
  marital_status!: string;
  enrollment!: string;
  admission!: string;
  emailU!: string;
  birthday!: any;
  showDatetimePicker: boolean = false;
  hobbies!: any;
  income!: string;
  has_job!: any;
  is_native!: any;
  last_grade!: string;
  specialty!: string;
  career1!: string;
  tutor!: string;
  uuid!: string;

 selectedDateTime: string = '';

  constructor(private router: Router, private cookieService: CookieService, private http: HttpClient,private elementRef: ElementRef) {

    this.email = localStorage.getItem('email');
    this.full_name = this.cookieService.get('Nombres');
    this.first_lastname = this.cookieService.get('Ape1');
    this.second_lastname = this.cookieService.get('Ape2');
    this.CURP = this.cookieService.get('CURP');
    this.NSS = this.cookieService.get('NSS');
    this.phone = this.cookieService.get('Phone');
    this.address = this.cookieService.get('Address');
    this.postal_code = this.cookieService.get('Pcode');
    this.personal_email = this.cookieService.get('PersonalMail');
    this.religion = this.cookieService.get('Religion');
    this.weight = this.cookieService.get('Weight');
    this.height = this.cookieService.get('Height');
    this.gender = this.cookieService.get('Gender');
    this.marital_status = this.cookieService.get('MaritalS');
    this.enrollment = this.cookieService.get('Enrol');
    this.admission = this.cookieService.get('Ingreso');
    this.emailU = this.cookieService.get('emailU');
    this.birthday = this.cookieService.get('birthday:');
    //const rawBirthday = this.cookieService.get('birthday:');
    //this.birthday = rawBirthday ? rawBirthday.split('T')[0] : 'null';
    this.income = this.cookieService.get('income');
    this.hobbies = this.cookieService.get('hobbies');
    this.has_job = this.cookieService.get('has_job');
    this.is_native = this.cookieService.get('is_native');
    this.enrollment = this.cookieService.get('Enrol');
    this.last_grade = this.cookieService.get('last_grade');
    this.specialty = this.cookieService.get('Especialidad');
    this.career1 = this.cookieService.get('Carrera');
    this.tutor = this.cookieService.get('tutor');




  }

  ionViewDidEnter() {
    // Llama al método que deseas ejecutar siempre al mostrar la página
   ///De momento esto se va a ejecutar cada que se entre aqui (para refrescar la tarjeta de inicio)
   //pero despues se debe ejecutar cuando se haga el PATCH de esta pag con 2s de delay
  //  if (this.birthday) {
  //   // Obtener solo la parte de la fecha (sin la hora)
  //   this.birthday = this.birthday.split('T')[0];
  // }
  }

///Esto se debe hacer con despues del PATCH para actualizar en inicio los cambios (se podria optimizar si solo se pasa el metodo, en vez de escribirlo todo otra vez)
  public getUserData() {

    const id = this.cookieService.get('user_id');
    const url = `https://platform-api.aaaimx.org/api/v1/users/me/`;
   // console.log('user_id', id);
    // Obtener el token de acceso del almacenamiento local
    const accessToken = localStorage.getItem('access_token');
    //console.log('Access Token:', accessToken);
    const body = {
      id: id,
    };

  // Verificar si se ha obtenido el token de acceso
    if (accessToken) {
      // Define los encabezados de la solicitud
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      });

      this.http.get(url, { headers }).subscribe(
        (response: any) => {
          // Lógica para manejar la respuesta exitosa
          console.log(response);

          //Si la variable guarda un string '' sustituyelo con ''
          let occupation = response.occupation
          if (occupation === 'STUDENT') {
            occupation= 'Estudiante';
          }
          //console.log('Ocupacion:', occupation);
          this.cookieService.set('Ocupacion', occupation);

          //este es para entrar a un apartado en especifico
          //
          let career = response.student.career;
          if (career === 'ISC') {
            career = 'Ingeniería en Sistemas Computacionales';
          }
          if (career === 'IGE') {
            career = 'Ingeniería en Gestión Empresarial';
          }
          if (career === 'IA') {
            career = 'Ingeniería Ambiental';
          }
          if (career === 'IBQ') {
            career = 'Ingeniería Bioquímica';
          }
          if (career === 'IBM') {
            career = 'Ingeniería Biomédica';
          }
          if (career === 'IQ') {
            career = 'Ingeniería Química';
          }
          if (career === 'IELE') {
            career = 'Ingeniería Eléctrica';
          }
          if (career === 'IELC') {
            career = 'Ingeniería Electrónica';
          }
          if (career === 'IM') {
            career = 'Ingeniería Mecánica';
          }
          if (career === 'IC') {
            career = 'Ingeniería Civil';
          }
          if (career === 'II') {
            career = 'Ingeniería Industrial';
          }
          if (career === 'LA') {
            career = 'Licenciatura en Administración';
          }
          //console.log('Carrera:', career);
          this.cookieService.set('Carrera:', career);
          //especialidad
          const specialty = response.student.specialty;
          //console.log('Especialidad:', specialty);
          this.cookieService.set('Especialidad', specialty);
          //ingreso
          const admission = response.student.admission;
          //console.log('ingreso:', admission);
          this.cookieService.set('Ingreso', admission);

          //nombre
          const full_name = response.full_name ;
          this.cookieService.set('Nombres', full_name);
          const first_lastname = response.first_lastname ;
          this.cookieService.set('Ape1', first_lastname);
          const second_lastname = response.second_lastname;
          this.cookieService.set('Ape2', second_lastname);








        },
        (error) => {
          // Lógica para manejar el error
          console.error(error);
        }
      );
    } else {
      console.log('No se encontró el token de acceso');
    }
  }
//Esto solo funciona para informacion escolar
  patchUser(){
    const uuid = localStorage.getItem('uuid');
   // console.log('Valor de uuid:', uuid);
    const url = `https://platform-api.aaaimx.org/api/v1/users/me/students/${uuid}/`;
    const accessToken = localStorage.getItem('access_token');
   // console.log('Valor de accessToken:', accessToken);
    if (accessToken) {
      // Define los encabezados de la solicitud
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      });

      const body = {
        //full_name : this.full_name
        last_grade : this.last_grade,
        specialty : this.specialty ,
        career : this.career1 ,
          tutor: this.tutor ,
         birthday : this.birthday ,

      }
      console.log('Contenido de body:', body);
      this.http.patch(url, body, { headers }).subscribe(
        (response: any) => {
          //console.log('El PATCH se realizó correctamente.');
          // Lógica adicional después de realizar el PATCH exitosamente

          this.getUserData();
          this.clearIonInputs();
          this.navegarInicio2s();
        },
        (error) => {
          // Lógica para manejar el error
          console.error(error);
        }
      );
    }

  }


  patchUserGD(){


    const url = `https://platform-api.aaaimx.org/api/v1/accounts/profile/`;
    const accessToken = localStorage.getItem('access_token');
    //console.log('Valor de accessToken:', accessToken);
    if (accessToken) {
      // Define los encabezados de la solicitud
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      });

      const body = {

        email : this.email ,
        full_name : this.full_name ,
        first_lastname : this.first_lastname ,
        second_lastname : this.second_lastname ,
        CURP : this.CURP ,
        phone : this.phone ,
        birthday : this.birthday ,
        gender : this.gender ,
        marital_status : this.marital_status ,
        address : this.address ,
        postal_code : this.postal_code ,
        personal_email : this.personal_email ,
        religion : this.religion ,
        weight : this.weight ,
        height : this.height ,
        income : this.income ,
        has_job : this.has_job ,
        is_native : this.is_native ,

      }
      console.log('Contenido de body:', body);
      this.http.patch(url, body, { headers }).subscribe(
        (response: any) => {
          console.log('El PATCH se realizó correctamente.');
          // Lógica adicional después de realizar el PATCH exitosamente

          this.getUserData();
          //this.clearIonInputs();
          this.navegarInicio2s();
        },
        (error) => {
          // Lógica para manejar el error
          console.error(error);
        }
      );
    }

  }

  toggleDatetimePicker() {
    this.showDatetimePicker = !this.showDatetimePicker;
  }

  openDatetimePicker() {
    this.selectedDateTime = this.birthday; // Almacenar la fecha y hora actual en selectedDateTime
    this.showDatetimePicker = true; // Mostrar el componente ion-datetime
  }

  closeDatetimePicker() {
    this.showDatetimePicker = false; // Ocultar el componente ion-datetime
  }

  // Evento cuando se cancela la selección de fecha y hora
  onCancelDateTimePicker() {
    this.closeDatetimePicker(); // Cierra el componente ion-datetime sin cambios
  }

  // Evento cuando se selecciona una fecha y hora
  onDateTimePickerChange(event: any) {
    // Actualizar la variable birthday con la nueva fecha y hora seleccionada
    this.birthday = this.selectedDateTime;
    this.closeDatetimePicker(); // Cierra el componente ion-datetime
  }


  //para que si la variable hobbies regresa un 'null' no muestre null en el ion-input



  navegarInicio2s(): void {
    setTimeout(() => {
      this.router.navigate(['/inicio']);
    }, 2000); // 2000 milisegundos = 2 segundos
  }
//Esto es para si se actualiza una sola parte de perfil y se modifico un label que al final
// no se cocntreo, lo borra para que no se conserve ese valor que no se actualizó, pero al final
//voy a actulizar todo con 1 boton asi que no tiene caso esto al final
// Al final va a ir en el boton de regresar para que no se conserven los cambios sin PATCH
  clearIonInputs() {
    const ionInputs = document.querySelectorAll('ion-input');
    ionInputs.forEach((input: any) => {
      input.value = '';
    });
  }



}
