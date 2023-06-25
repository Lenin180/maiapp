import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage {
  id!: string;
  email!: string;
  full_name!: string;
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

  constructor(private router: Router, private cookieService: CookieService, private http:HttpClient) { 

    this.email = this.cookieService.get('Email');
    this.full_name = this.cookieService.get('Nombre');
    this.first_lastname = this.cookieService.get('Ape1');
    this.second_lastname = this.cookieService.get('Ape2');
    this.CURP = this.cookieService.get('CURP');
    this.NSS = this.cookieService.get('NSS');
  }

  ionViewDidEnter() {
    // Llama al método que deseas ejecutar siempre al mostrar la página
    this.getEdit();
  
  }

  getEdit(){
    this.id = this.cookieService.get('email');
    localStorage.getItem('access_token');
    const url = `https://platform-api.aaaimx.org/api/v1/accounts/profile/${this.id}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    this.http.get(url, { headers }).subscribe(
      (response: any)=>{
        console.log(response);
        this.responseData = response;

      },
      (error) => {
        console.error(error);
      }
    )
    }


}
