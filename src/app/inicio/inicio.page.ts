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
  uuid!: string;

  constructor(private router: Router, private http:HttpClient, private cookieService: CookieService, ) {


  }
  ionViewDidEnter() {
    // Llama al método que deseas ejecutar siempre al mostrar la página
    this.getcookies();
    this.genpicture();
    this.getinfoperfil();
    this.getcreditos();
    /*
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
    */


  /////
  }



    getcookies(){
      this.id = this.cookieService.get('user_id');
      //console.log('user_id', this.id);
      this.fullname = this.cookieService.get('fullnameU');
      this.emailU = this.cookieService.get('emailU');
      this.occupation = this.cookieService.get('Ocupacion');
      this.career = this.cookieService.get('Carrera:');
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


    getinfoperfil(){


    const id = this.cookieService.get('user_id');
    const url = `https://platform-api.aaaimx.org/api/v1/users/me/`;
    console.log('user_id', id);
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


          //este es para entrar a un apartado en especifico
          //
          const career1 = response.student.career;
          this.cookieService.set('Carrera', career1);
          //especialidad
          const specialty = response.student.specialty;
          this.cookieService.set('Especialidad', specialty);
          //ingreso
          const admission = response.student.admission;
          this.cookieService.set('Ingreso', admission);

          //nombre
          const full_name = response.full_name ;
          this.cookieService.set('Nombres', full_name);
          const first_lastname = response.first_lastname ;
          this.cookieService.set('Ape1', first_lastname);
          const second_lastname = response.second_lastname;
          this.cookieService.set('Ape2', second_lastname);

          //CURP
          const CURP = response.CURP;
          this.cookieService.set('CURP', CURP);

          //NSS
          const NSS = response.NSS;
          this.cookieService.set('NSS', NSS);
          const phone = response.phone;
          this.cookieService.set('Phone', phone);
          const address = response.address;
          this.cookieService.set('Address',address);
          const postal_code = response.postal_code;
          this.cookieService.set('Pcode',postal_code);
          const personal_email = response.personal_email;
          this.cookieService.set('PersonalMail',personal_email);
          const religion = response.religion;
          this.cookieService.set('Religion',religion);
          const weight = response.weight;
          this.cookieService.set('Weight',weight);
          const height = response.height;
          this.cookieService.set('Height',height);
          const gender = response.gender;
          this.cookieService.set('Gender',gender);
          const marital_status = response.marital_status;
          this.cookieService.set('MaritalS',marital_status);
          const enrollment = response.student.enrollment;
          //
          this.cookieService.set('Enrol',enrollment); //matricula
          const birthday = response.birthday;
          this.cookieService.set('birthday:', birthday);
          console.log('birthday', birthday);
           const hobbies = response.hobbies;
          this.cookieService.set('hobbies', hobbies);
          const income = response.income;
          this.cookieService.set('income', income);
          const has_job = response.has_job
          this.cookieService.set('has_job', has_job);
          const is_native = response.is_native
          this.cookieService.set('is_native', is_native);
          const last_grade = response.student.last_grade;
          this.cookieService.set('last_grade',last_grade); //matricula
          const tutor = response.student.tutor;
          this.cookieService.set('tutor',tutor);
          const uuid = response.student.uuid;
          localStorage.setItem('uuid', uuid);
          //console.log('uuid', uuid);
          const email = response.email;
          localStorage.setItem('email', email);





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
          this.cookieService.set('Ncredito2', name_credit_2);

          const name_credit_3 = response.name_credit_3;
          this.cookieService.set('Ncredito3', name_credit_3);

          const name_credit_4 = response.name_credit_4;
          this.cookieService.set('Ncredito4', name_credit_4);

          const name_credit_5 = response.name_credit_5;
          this.cookieService.set('Ncredito5', name_credit_5);


          const name_credit_6 = response.name_credit_6;
          this.cookieService.set('Ncredito6', name_credit_6);

          const name_credit_7 = response.name_credit_7;
          //console.log('Ncredito7:', name_credit_7);
          this.cookieService.set('Ncredito7', name_credit_7);

          const name_credit_8 = response.name_credit_8;
          this.cookieService.set('Ncredito8', name_credit_8);

          const name_credit_9 = response.name_credit_9;
          this.cookieService.set('Ncredito9', name_credit_9);

          const name_credit_10 = response.name_credit_10;
          this.cookieService.set('Ncredito10', name_credit_10);


          //Guardar descripcion string//
          const description_credit_1 = response.description_credit_1;
          //console.log('Descripcion1:', description_credit_1);
          this.cookieService.set('Descripcion1', description_credit_1);

          const description_credit_2 = response.description_credit_2;
          this.cookieService.set('Descripcion2', description_credit_2);

          const description_credit_3 = response.description_credit_3;
          this.cookieService.set('Descripcion3', description_credit_3);

          const description_credit_4 = response.description_credit_4;
          this.cookieService.set('Descripcion4', description_credit_4);

          const description_credit_5 = response.description_credit_5;
          this.cookieService.set('Descripcion5', description_credit_5);

          const description_credit_6 = response.description_credit_6
          this.cookieService.set('Descripcion6', description_credit_6);

          const description_credit_7 = response.description_credit_7;
          this.cookieService.set('Descripcion7', description_credit_7);

          const description_credit_8 = response.description_credit_8;
          this.cookieService.set('Descripcion8', description_credit_8);

          const description_credit_9 = response.description_credit_9;
          this.cookieService.set('Descripcion9', description_credit_9);

          const description_credit_10 = response.description_credit_10;
          this.cookieService.set('Descripcion10', description_credit_10);


          //Url evidencia //
          const url_evidence_credit_1 = response.url_evidence_credit_1;
          //console.log('URL1:', url_evidence_credit_1);
          this.cookieService.set('URL1', url_evidence_credit_1);

          const url_evidence_credit_2 = response.url_evidence_credit_2;
          this.cookieService.set('URL2', url_evidence_credit_2);

          const url_evidence_credit_3 = response.url_evidence_credit_3;
          this.cookieService.set('URL3', url_evidence_credit_3);

          const url_evidence_credit_4 = response.url_evidence_credit_4;
          this.cookieService.set('URL4', url_evidence_credit_4);

          const url_evidence_credit_5 = response.url_evidence_credit_5;
          this.cookieService.set('URL5', url_evidence_credit_5);

          const url_evidence_credit_6 = response.url_evidence_credit_6;
          this.cookieService.set('URL6', url_evidence_credit_6);

          const url_evidence_credit_7 = response.url_evidence_credit_7;
          this.cookieService.set('URL7', url_evidence_credit_7);

          const url_evidence_credit_8 = response.url_evidence_credit_8;
          this.cookieService.set('URL8', url_evidence_credit_8);

          const url_evidence_credit_9 = response.url_evidence_credit_9;
          this.cookieService.set('URL9', url_evidence_credit_9);

          const url_evidence_credit_10 = response.url_evidence_credit_10;
          this.cookieService.set('URL10', url_evidence_credit_10);

          //Value creditos
          const value_credit_1 = response.value_credit_1;
          //console.log('value1:', value_credit_1);
          this.cookieService.set('value1:', value_credit_1);

          const value_credit_2 = response.value_credit_2;
          this.cookieService.set('value2:', value_credit_2);

          const value_credit_3 = response.value_credit_3;
          this.cookieService.set('value3:', value_credit_3);

          const value_credit_4 = response.value_credit_4;
          this.cookieService.set('value4:', value_credit_4);

          const value_credit_credit_5 = response.value_credit_credit_5;
          this.cookieService.set('value5:', value_credit_credit_5);

          const value_credit_6 = response.value_credit_6;
          this.cookieService.set('value6:', value_credit_6);

          const value_credit_7 = response.value_credit_7;
          this.cookieService.set('value7:', value_credit_7);

          const value_credit_8 = response.value_credit_8;
          this.cookieService.set('value8:', value_credit_8);

          const value_credit_9 = response.value_credit_9;
          this.cookieService.set('value9:', value_credit_9);

          const value_credit_10 = response.value_credit_10;
          this.cookieService.set('value10:', value_credit_10);

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

          const status_credit_7 = response.status_credit_7;
          this.cookieService.set('Status7', status_credit_7);

          const status_credit_8 = response.status_credit_8;
          this.cookieService.set('Status8', status_credit_8);

          const status_credit_9 = response.status_credit_9;
          this.cookieService.set('Status9', status_credit_9);

          const status_credit_10 = response.status_credit_10;
          this.cookieService.set('Status10', status_credit_10);

        },
        (error) => {
          // Lógica para manejar el error
          console.error(error);
          this.cookieService.delete('Ncredito1');
          this.cookieService.delete('Descripcion1');
          this.cookieService.delete('URL1');
          this.cookieService.delete('value1:');
          this.cookieService.delete('Status1');

          this.cookieService.delete('Ncredito2');
          this.cookieService.delete('Descripcion2');
          this.cookieService.delete('URL2');
          this.cookieService.delete('value2:');
          this.cookieService.delete('Status2');

          this.cookieService.delete('Ncredito3');
          this.cookieService.delete('Descripcion3');
          this.cookieService.delete('URL3');
          this.cookieService.delete('value3:');
          this.cookieService.delete('Status3');

          this.cookieService.delete('Ncredito4');
          this.cookieService.delete('Descripcion4');
          this.cookieService.delete('URL4');
          this.cookieService.delete('value4:');
          this.cookieService.delete('Status4');

          this.cookieService.delete('Ncredito5');
          this.cookieService.delete('Descripcion5');
          this.cookieService.delete('URL5');
          this.cookieService.delete('value5:');
          this.cookieService.delete('Status5');

          this.cookieService.delete('Ncredito6');
          this.cookieService.delete('Descripcion6');
          this.cookieService.delete('URL6');
          this.cookieService.delete('value6:');
          this.cookieService.delete('Status6');

          this.cookieService.delete('Ncredito7');
          this.cookieService.delete('Descripcion7');
          this.cookieService.delete('URL7');
          this.cookieService.delete('value7:');
          this.cookieService.delete('Status7');

          this.cookieService.delete('Ncredito8');
          this.cookieService.delete('Descripcion8');
          this.cookieService.delete('URL8');
          this.cookieService.delete('value8:');
          this.cookieService.delete('Status8');

          this.cookieService.delete('Ncredito9');
          this.cookieService.delete('Descripcion9');
          this.cookieService.delete('URL9');
          this.cookieService.delete('value9:');
          this.cookieService.delete('Status9');

          this.cookieService.delete('Ncredito10');
          this.cookieService.delete('Descripcion10');
          this.cookieService.delete('URL10');
          this.cookieService.delete('value10:');
          this.cookieService.delete('Status10');
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
    //FUNCIONAA (ASI HACER PARA pasar el id gńana)
    //console.log(localStorage.getItem('access_token'))

  this.router.navigateByUrl('/creditos');
    //Imprimir token access (solo para saber que esta guardado y se puede utilizar)

    }

  redirecToEdit(){

    this.router.navigateByUrl('/editar-perfil');
  }
  //Botón cuestionarios
  redirecToCues(){
    this.router.navigateByUrl('/cuestionarios');
  }

  logout() {
    // Redirigir a la página de inicio de sesión
    //this.cookieService.deleteAll(); //Esto esta bien, pero por alguna razon perjudica al cargar datos en pagina
    //hay que hacer que se refesque la pag para que fucnione correctamente
    this.router.navigateByUrl('/home');

  }

  ngOnInit() {

  }






}
