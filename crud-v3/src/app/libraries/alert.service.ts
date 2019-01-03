import { Injectable } from '@angular/core';
import { Events, LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alert: AlertController,
    private load: LoadingController,
    private event: Events
  ) { }

  async logoutLoad() {
    const logoutLoad = await this.load.create({
      message: 'Logging out',
      duration: 2000
    });

    await logoutLoad.present();

    var self = this;

    window.setTimeout(function () {
      return self.alertLogout();
    }, 2000);
  }

  async notLogged() {
    const notLogged = await this.alert.create({
      header: 'Message',
      // subHeader: 'Subtitle',
      message: 'You are not logged in.',
      buttons: ['OK']
    });

    await notLogged.present();
  }

  async alertLogout() {
    const logout = await this.alert.create({
      header: 'Message',
      // subHeader: 'Subtitle',
      message: 'You logged out successfully.',
      buttons: ['OK']
    });

    await logout.present();
  }

  async loginFail() {
    const loginFail = await this.alert.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Invalid name and/or password.',
      buttons: ['OK']
    });

    await loginFail.present();
  }

  async login() {
    const alert = await this.alert.create({
      header: 'Message',
      // subHeader: 'Subtitle',
      message: 'You are now logged in.',
      buttons: ['OK']
    });

    return alert.present();
  }

  async alreadyLogged() {
    const loggedin = await this.alert.create({
      header: 'Message',
      // subHeader: 'Subtitle',
      message: 'You are already logged in.',
      buttons: ['OK']
    });

    return loggedin.present();
  }

  async updated() {
    const updated = await this.alert.create({
      header: 'Message',
      // subHeader: 'Subtitle',
      message: 'Profile updated successfully.',
      buttons: ['OK']
    });

    return updated.present();
  }
}
