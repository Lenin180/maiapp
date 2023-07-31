import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
  constructor(private router: Router, private http:HttpClient, private cookieService: CookieService, private route: ActivatedRoute, private alertController: AlertController) {


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
        console.log('PreguntasOriginal:', this.list);

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
  onCheckboxChange(event: any) {
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






}
