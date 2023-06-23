import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  email!: string;
  password!: string; 
  route!:Router;
  id!: String;
  fullname!: string;
  emailU!: string;

  constructor(private http:HttpClient, private router: Router, private cookieService: CookieService) {}
 

  
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
        this.cookieService.set('fullnameU', fullname);
        this.cookieService.set('emailU', emailU);
        
        

       
        this.getUserData();
        this.router.navigate(['/inicio']);
        
      },
      (response) => {
        if (response) {
          console.log('Futuro pop-up para usuario no valido');
        }
      }
    );

  }
  

  public guardarDatosJWT(access: string, refresh: string): void {
    //Guardar en el local
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    
    // imprimir
    console.log('Access Token:', access);
    //console.log('Refresh Token:', refresh);
  }

  public getUserData() {
    
    const id = this.cookieService.get('user_id');
    const url = `http://platform-api.aaaimx.org/api/v1/users/me/`;
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
  


  
}

