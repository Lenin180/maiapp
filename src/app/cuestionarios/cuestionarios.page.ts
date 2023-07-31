import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.page.html',
  styleUrls: ['./cuestionarios.page.scss'],
})
export class CuestionariosPage implements OnInit {
  enrollment: string = ''; //matricula
  admission!: string; //Ingreso
  occupation! : string; //STUDENT O GRADUATED
  list: any[] = [];
  listQuery: any = {};
  responseData: any[] = [];
  item = [];
  name = [] = [];
  nameValues: string[] = [];
  constructor(private router: Router, private http:HttpClient, private cookieService: CookieService, ) {

  }

  ionViewDidEnter() {
    this.getpolls();

    // Esperar 2 segundos y luego llamar a this.getMSOc()
    //setTimeout(() => {
      //this.getMSOc();
   // }, 4000);
  }


  getpolls(){

    const url = `https://platform-api.aaaimx.org/api/v1/users/me/available_polls/`;
    // Obtener el token de acceso del almacenamiento local
    const accessToken = localStorage.getItem('access_token');
    //console.log('Access Token:', accessToken);
    const body = {
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
          this.responseData = response;   //Var que tiene los cuest sin filtrar
          console.log('VarResponseData', this.responseData);

          this.getMSOc();
          //console.log(response);

          /*
          this.data.forEach((item) => {  //Para sacar el valor name,
            if (item.hasOwnProperty('name')) {
              console.log('Valor de name:', item.name);
            } else {
              console.log('El objeto no tiene la propiedad name');
            }
          });
          */

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


///filtros

     getMSOc(){


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
          (user: any) => {
            // Lógica para manejar la respuesta exitosa
            console.log(user);
            const occupation = user.occupation;
            console.log(occupation);
            //ingreso
            const admission = user.student.admission;
            this.admission = admission.toString();
            this.admission = this.admission ? this.admission : '0'; // Si no existe admission es 0
            console.log(this.admission);
            //Matricula
            const enrollment = user.student.enrollment;
            this.enrollment = this.enrollment ? this.enrollment : '0';
            console.log(enrollment);
            console.log('sasas',this.responseData);


            //Filtro

            if(occupation === 'STUDENT'){
              this.list = this.responseData.filter((item) => {
                 //console.log('ID:', item.name);
                if(item.ids_students){
                  //console.log('ID:', item.name);
                  return item.is_active && (item.filter_student.includes(this.admission) || item.ids_students.includes(this.enrollment) || item.audience === 'ALL');
                  }  else {
                    return item.is_active && (item.filter_student.includes(this.admission) || item.audience === 'ALL')
                  }

              });

            }
            else if (occupation === 'GRADUATED'){
              this.list = this.responseData.filter((item)=>{
                return item.is_active && item.audience === 'GRADUATED'
              })
            }
            /*
           //Probar sin filtro (regresa 4 cuestionarios)
           this.list = this.responseData;
            */
            console.log('Resultado del filtro:', this.list);

            const jsonData = JSON.stringify(this.nameValues);
            this.cookieService.set('nameValues', jsonData);






            //console.log('arrayfiltrado',this.list)
          },
          (error) => {
            // Lógica para manejar el error
            console.error(error);
          }
        );
        //console.log('Elementos después del filtro:', this.list);
      } else {
        //console.log('No se encontró el token de acceso');
      }
      }

      gotocuest0()
      {
        if (this.list && this.list.length > 0) {
          const item0 = this.list[0]; //Guarda todo el array 0 dentro de item
        this.router.navigateByUrl('/cuestionariox',{ state: { data0: item0 } }); //Al navegar a cuestx pasará la propiedad num0 por medio de data0
        }
      }

      gotocuest1()
      {
        if (this.list && this.list.length > 0) {
          const item0 = this.list[1]; //Guarda todo el array 0 dentro de item
        this.router.navigateByUrl('/cuestionariox',{ state: { data0: item0 } }); //Al navegar a cuestx pasará la propiedad num0 por medio de data0
        }
      }

      gotocuest2()
      {
        if (this.list && this.list.length > 0) {
          const item0 = this.list[2]; //Guarda todo el array 0 dentro de item
        this.router.navigateByUrl('/cuestionariox',{ state: { data0: item0 } }); //Al navegar a cuestx pasará la propiedad num0 por medio de data0
        }
      }

      gotocuest3()
      {
        if (this.list && this.list.length > 0) {
          const item0 = this.list[3]; //Guarda todo el array 0 dentro de item
        this.router.navigateByUrl('/cuestionariox',{ state: { data0: item0 } }); //Al navegar a cuestx pasará la propiedad num0 por medio de data0
        }
      }

  ngOnInit() {
  }



}
