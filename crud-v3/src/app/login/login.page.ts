import { Component, OnInit, NgZone } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';
import { Router } from '@angular/router';
import { NavController, LoadingController, Events, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name: any;
  password: any;
  data: any;

  constructor(
    private datahandler: DatahandlerService,
    private alert: AlertController,
    private nav: NavController,
    private load: LoadingController,
    private zone: NgZone,
    private event: Events
  ) {
    this.event.subscribe('login', (type) => {
      console.log(type);
      // if (type == 'not logged') {
      //   this.notLogged();
      // } else if (type == 'logout') {
      //   this.logoutLoad();
      // } else {
      //   this.loginFail();
      // }
    });
  }

  ngOnInit() {
    if ((window.localStorage.getItem('user.name') !== null)
      && (window.localStorage.getItem('user.password') !== null)) {
      this.nav.navigateForward('/home');
      this.datahandler.eventCreator('home', 'already login');
    }
  }

  login(form: any) {
    if ((form.name == null || form.name == '') || (form.password == null || form.password == '')) {
      return this.datahandler.eventCreator('login', 'login failed');
    }

    this.datahandler
      .postData('ajaxLogin', form)
      .subscribe(data => {
        if (data['result']) {
          window.localStorage.setItem('user.name', form.name);
          window.localStorage.setItem('user.password', form.password);
          this.name = '';
          this.password = '';
          this.datahandler.data = form;
          this.zone.run(() => {
            this.datahandler.eventCreator('home', 'login success');
            return this.nav.navigateForward('/home');
          });
        } else {
          return this.loginFail();
        }
      });
  }

  async logoutLoad() {
    const logoutLoad = await this.load.create({
      message: 'Logging out',
      duration: 2000
    });

    await logoutLoad.present();

    var self = this;

    window.setTimeout(function () {
      return self.logout();
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

  async logout() {
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
}
