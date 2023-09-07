import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

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
