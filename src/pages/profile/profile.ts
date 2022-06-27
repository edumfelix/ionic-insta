import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  usuario = '';
  senha = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  salvar() {
    console.log('Usuario:', this.usuario);
    console.log('Senha:', this.senha);

  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Lembrar dados para próximo acesso?',
      message: 'Você deseja salvar os dados para login automático?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}

