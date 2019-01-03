import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, Events, LoadingController, AlertController } from '@ionic/angular';

import { DatahandlerService } from './datahandler.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'exit'
    }
  ];

  constructor(
    private datahandler: DatahandlerService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav: NavController,
    private alert: AlertController,
    private load: LoadingController,
    private event: Events
  ) {
    this.initializeApp();
    this.eventSubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  eventSubscribe() {
    this.event.subscribe('login', (type) => {
      console.log('sub login');
      if (type == 'not logged') {
        this.notLogged();
      } else if (type == 'logout') {
        this.logoutLoad();
      } else {
        this.loginFail();
      }
    });

    this.event.subscribe('home', (type) => {
      console.log('sub home');
      if (type == 'login success') {
        this.login();
      } else if (type == 'already login') {
        this.alreadyLogged();
      } else {
        this.updated();
      }
    });
  }

  logout() {
    window.localStorage.removeItem('user.name');
    window.localStorage.removeItem('user.password');
    this.datahandler.eventCreator('login', 'logout');
    return this.nav.navigateForward('/login');
  }

  profile() {
    this.datahandler.getName();
    return this.nav.navigateForward('/profile');
  }

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
