import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage implements OnInit {

  email!: string;
  password!: string;
  route!:Router;
  id!: String;
  fullname!: string;
  emailU!: string;

  constructor(private http:HttpClient, private router: Router, private cookieService: CookieService,  private activatedRoute: ActivatedRoute, private alertController: AlertController) {

  }

  ionViewDidEnter() {
    // Llama al método que deseas ejecutar siempre al mostrar la página
    this.cookieService.deleteAll();

  }





   public login() {



    const url = 'https://platform-api.aaaimx.org/api/v1/token/'; // Reemplaza con la URL de tu API de inicio de sesión

    const body = {
      email: this.email,
      password: this.password,
    };

    this.http.post(url, body).subscribe(
      (response: any) => {
        // Lógica para manejar la respuesta exitosa
        console.log(response);

        // Guarda los tokens JWT "access y refresh" en el almacenamiento local
        this.guardarDatosJWT(response.access, response.refresh);

        //Decoded todo el token.
        const decodedToken: any = jwt_decode(response.access);
        console.log('DecodedTok',decodedToken);
        const id = decodedToken.id;
        const fullname = decodedToken.fullname;
        const emailU = decodedToken.email;
        this.cookieService.set('user_id', id);
        //this.cookieService.set('fullnameU', fullname);
        this.cookieService.set('emailU', emailU);




        this.getUserData();
        this.navegarDespuesDeEsperar();


      },
      (response) => {
        if (response) {
          //console.log('Futuro pop-up para usuario no valido');
          this.presentAlert();
        }
      }

    );

  }


  navegarDespuesDeEsperar(): void {
    setTimeout(() => {
      this.router.navigate(['/inicio']);
    }, 2000); // 2000 milisegundos = 2 segundos
  }


  public guardarDatosJWT(access: string, refresh: string): void {
    //Guardar en el local
    localStorage.setItem('access_token', access);
    this.cookieService.set('access_tokenk', access);
    localStorage.setItem('refresh_token', refresh);

    // imprimir
    //console.log('access Token:', access);
    //console.log('Refresh Token:', refresh);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciales no válidas',
      message: 'Presione "Aceptar" para volver a intentarlo',
      buttons: ['Aceptar'],
      cssClass: 'alert-button-confirm'
    });

    await alert.present();
  }

 public getUserData() {

    const id = this.cookieService.get('user_id');
    const url = `https://platform-api.aaaimx.org/api/v1/users/me/`;
    //console.log('user_id', id);
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
          if (occupation === 'GRADUATED') {
            occupation= 'Egresado';
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
          console.log('Nombres', full_name );
          this.cookieService.set('Nombres', full_name);
          const first_lastname = response.first_lastname ;
          console.log('Ap1:', first_lastname );
          this.cookieService.set('Ape1', first_lastname);
          const second_lastname = response.second_lastname;
          console.log('Ap2', second_lastname);
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

  ngOnInit() {

  }

  getCareerName(career: string): string {
    if (career === 'ISC') {
      return 'Ingeniería en Sistemas Computacionales';
    } else {
      return career;
    }
  }


}
