import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email!: string;
  password!: string; 
  route!:Router
 

  constructor(private http:HttpClient, private router: Router) {}

  
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
    // Guardar los tokens acces y refrsh por serparado 
    console.log('Access Token:', access);
    console.log('Refresh Token:', refresh);
  }
  //mostrar contraseńa
  mostrarPassword(){
   
  }

}
