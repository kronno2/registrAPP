import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

   //alerta que muestra un mensaje
   async Saludar() {
    const alert = await this.alertController.create({
      header: 'Se ha registrado con exito',
      subHeader: '',
      message: 'Que tengas un gran día!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  

}
