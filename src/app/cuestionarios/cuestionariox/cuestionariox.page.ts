import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonContent } from '@ionic/angular';


@Component({
  selector: 'app-cuestionariox',
  templateUrl: './cuestionariox.page.html',
  styleUrls: ['./cuestionariox.page.scss'],
})
export class CuestionarioxPage implements OnInit {
  list: any[] = [];
  text: any[] = [];
  data0: any;
  randomIndex!: number;
  acceptTerms: boolean = false;
  questionArrays: { [id: string]: any[] } = {};
  nuevoArrayRespuestas: { [id: string]: any } = {};
  id!: any;
  admission!: any;
  poll: any;
  is_active: boolean = false;

  constructor(private router: Router, private http:HttpClient, private cookieService: CookieService, private route: ActivatedRoute, private alertController: AlertController) {

    // Inicializamos los arrays de preguntas vacíos
    this.list.forEach(question => {
      this.questionArrays[question.id] = [];
    });

  }
  ionViewDidEnter() {
    this.obtcoockie();
    this.presentAlert();

  }





  obtcoockie() {

  }

  ngOnInit(): void{
    // Obtener el estado actual de la ruta
    const currentState = this.router.getCurrentNavigation()?.extras.state;
    if (currentState && currentState['data0']) {
      // Acceder a la variable "data0" enviada desde gotocuest0()
      this.data0 = currentState['data0'];
      //Deberia desplegar el array 0
      console.log('Datos recibidos:', this.data0);
      //Guardo solo el array en la posición 0
      this.list = this.data0.sections[0].questions;
      this.poll = this.data0.sections[0].poll;
      this.is_active = this.data0.is_active;
        console.log('PreguntasOriginal:', this.list);
        console.log('poll:', this.poll);
        console.log('is_active:', this.is_active);

        const totalQuestions = this.list.length;
      const randomIndices = this.generateRandomIndices(totalQuestions);

      const shuffledQuestions: any[] = [];

      // Copiar las preguntas en el nuevo arreglo temporal siguiendo el orden aleatorio
      for (let i = 0; i < totalQuestions; i++) {
        const index = randomIndices[i];
        const question = this.list[index];

        // Formato para mostrar el número incrementando hasta 81
        const questionNumber = i + 1;

        // Agregar la pregunta al arreglo temporal con el número incrementado
        shuffledQuestions.push({
          ...question,
          questionNumber: questionNumber
        });
      }
      this.list = shuffledQuestions;
      console.log('PreguntasShuffle:', this.list);

    } else {
      console.log('No se recibieron datos válidos.');
    }
  }

  // Función para generar un arreglo de índices aleatorios sin repeticiones
  private generateRandomIndices(total: number): number[] {
    const indices = Array.from({ length: total }, (_, i) => i);
    for (let i = total - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }




//Para poder seleccionar solo 1 casilla de checkbox a la vez
  onCheckboxChange(event: any, questionId: string, option: any) {
    const checkbox = event.target as HTMLIonCheckboxElement;
    const isChecked = checkbox.checked;
    const groupId = checkbox.getAttribute('id')?.split('-')[1]; // Obtener el índice de la pregunta

    if (isChecked) {
      // Desmarcar las demás opciones del mismo grupo
      const checkboxes = document.querySelectorAll(`ion-checkbox[id^="option-${groupId}"]`);
      checkboxes.forEach((cb: any) => {
        if (cb !== checkbox) {
          cb.checked = false;
        }
      });

      // Actualizar el objeto questionArrays con la opción seleccionada
      this.questionArrays = {
        ...this.questionArrays,
        [questionId]: option
      };
    } else {
      // Si se deselecciona la opción, eliminarla del objeto questionArrays
      delete this.questionArrays[questionId];
    }
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header:  this.data0.description,
      message: 'Al seleccionar la opción de "Continuar" aceptas nuestra política de privacidad y otorgas tu consentimiento informado.',
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.acceptTerms = true; // Se establece en true al presionar "Continuar"
            console.log('acceptTerms',this.acceptTerms)
          }
        }
      ]
    });

    await alert.present();
  }

  mostrarRespuestas() {
    console.log('Respuestas seleccionadas:');
    for (const questionId in this.questionArrays) {
      if (this.questionArrays.hasOwnProperty(questionId)) {
        const selectedOptions = this.questionArrays[questionId];
        console.log(`Pregunta ID: ${questionId}, Respuestas seleccionadas: ${selectedOptions}`);
      }
    }
  }
///Compara el this.nuevoArrayRespuestas con las question.text desplegadas, si son igual en numero
//Quiere decir que todas las ion-checkbox estan contestadas y deja enviar, si no despliega un ion-alert
  guardarRespuestasEnArray() {
    const nuevoArrayRespuestas: { [id: string]: any } = {};
    for (const questionId in this.questionArrays) {
      if (this.questionArrays.hasOwnProperty(questionId)) {
        const selectedOptions = this.questionArrays[questionId];
        const nuevaClave = "Q" + questionId;
        nuevoArrayRespuestas[nuevaClave] = selectedOptions;
      }
    }

    // Asignamos el objeto nuevoArrayRespuestas a la propiedad nuevoArrayRespuestas de la clase
    this.nuevoArrayRespuestas = nuevoArrayRespuestas;

    // Mostramos por consola el objeto nuevoArrayRespuestas
    console.log('RespuestasC2:', this.nuevoArrayRespuestas);

    // Obtener el número de preguntas desplegadas en pantalla
    const numeroPreguntasDesplegadas = this.list.length;

    // Obtener el número de claves almacenadas en nuevoArrayRespuestas
    const numeroRespuestas = Object.keys(this.nuevoArrayRespuestas).length;

    // Comprobar si todas las preguntas tienen respuestas
    if (numeroRespuestas === numeroPreguntasDesplegadas) {
      // Mostrar el ion-alert de envío cuando todas las preguntas están respondidas
      this.presentAlert1();
    } else {
      // Mostrar otro ion-alert indicando que debe responder todas las preguntas antes de enviar
      this.presentAlert2();
    }
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Respuestas incompletas',
      message: 'Debe responder todas las preguntas antes de enviar el cuestionario.',
      buttons: ['OK']
    });

    await alert.present();
  }

  enviaresp(){

    const id = this.cookieService.get('user_id');
    this.admission = this.cookieService.get('Ingreso');
    const url = `https://platform-api.aaaimx.org/api/v1/polls/answers/`;
    const accessToken = localStorage.getItem('access_token');
    console.log('Valor de accessToken:', accessToken);
    console.log('user_id', id);
    if (accessToken) {
      // Define los encabezados de la solicitud
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      });

      const body = {
          audio_file : null ,
          created_at : null,
          data : this.nuevoArrayRespuestas,
          id: null ,
          is_active:  this.is_active,
          poll : this.poll ,
          semestre : this.admission,
          updated_at :  null,
          user : id,


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

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Enviar cuestionario',
      message: '¿Estás seguro de enviar el cuestionario? No podrás cambiar tus respuestas',
      buttons: [
        {
          text: 'Continuar respondiendo',
          role: 'cancel',
          handler: () => {
            // Lógica adicional al hacer clic en el botón "Continuar respondiendo" (opcional)
            //console.log('Se ha cerrado el alert.');
          }
        },
        {
          text: 'Sí, enviar',
          handler: () => {
            // Lógica para ejecutar el método enviaresp() cuando se hace clic en el botón "Sí, enviar"
            this.enviaresp();
          }
        }
      ]
    });

    await alert.present();
  }





}
