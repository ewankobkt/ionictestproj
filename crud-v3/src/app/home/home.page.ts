import { Component, OnInit, NgZone } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';
import { AppRoutingPreloaderService } from '../app-routing-preloader.service';
import { Router } from '@angular/router';
import { AlertController, NavController, Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data;
  name;
  id;

  constructor(
    private datahandler: DatahandlerService,
    private alert: AlertController,
    private nav: NavController,
    private zone: NgZone,
    private event: Events,
    private routingService: AppRoutingPreloaderService
  ) {
    this.event.subscribe('home', (type) => {
      console.log(type);
      // if (type == 'login success') {
      //   this.login();
      // } else if (type == 'already login') {
      //   this.alreadyLogged();
      // } else {
      //   this.updated();
      // }
    });
  }

  ngOnInit() {
    if ((window.localStorage.getItem('user.name') === null)
      && (window.localStorage.getItem('user.password') === null)) {
      // this.datahandler.page = 'login';
      // this.datahandler.eventType = 'not logged';
      this.datahandler.eventCreator('login', 'not logged');
      return this.nav.navigateForward('/login');
    }
  }

  async ionViewDidEnter() {
    await this.routingService.preloadRoute('profile');
    await this.routingService.preloadRoute('login');
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
