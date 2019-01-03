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
  msubscribe: any = false;

  constructor(
    private datahandler: DatahandlerService,
    private alert: AlertController,
    private nav: NavController,
    private zone: NgZone,
    private event: Events,
    private routingService: AppRoutingPreloaderService
  ) {
    // this.eventSubscribe();
    
    // if (this.datahandler.eventCaller !== undefined) {
    //   this.datahandler.eventCreator(this.datahandler.eventCaller[0], this.datahandler.eventCaller[1]);
    // }

    // if (this.datahandler.eventCtr == 0 && this.datahandler.eventCaller !== undefined) {
    //   this.datahandler.eventCreator('home', 'login success');
    // }
  }

  ngOnInit() {
    if ((window.localStorage.getItem('user.name') === null)
      && (window.localStorage.getItem('user.password') === null)) {
      // this.datahandler.eventCaller = ['login', 'not logged'];
      this.datahandler.eventCreator('login', 'not logged');
      return this.nav.navigateForward('/login');
    }
  }

  ngOnDestroy() {
    console.log('destroy home');
  }

  // eventSubscribe() {
  //   this.event.subscribe('home', (type) => {
  //     console.log('sub home');
  //     if (type == 'login success') {
  //       this.login();
  //     } else if (type == 'already login') {
  //       this.alreadyLogged();
  //     } else {
  //       this.updated();
  //     }
  //   });
  // }

  // eventUnsubscribe() {
  //   console.log('unsub home');
  //   this.event.unsubscribe('home');
  // }

  // async login() {
  //   const alert = await this.alert.create({
  //     header: 'Message',
  //     // subHeader: 'Subtitle',
  //     message: 'You are now logged in.',
  //     buttons: ['OK']
  //   });

  //   return alert.present();
  // }

  // async alreadyLogged() {
  //   const loggedin = await this.alert.create({
  //     header: 'Message',
  //     // subHeader: 'Subtitle',
  //     message: 'You are already logged in.',
  //     buttons: ['OK']
  //   });

  //   return loggedin.present();
  // }

  // async updated() {
  //   const updated = await this.alert.create({
  //     header: 'Message',
  //     // subHeader: 'Subtitle',
  //     message: 'Profile updated successfully.',
  //     buttons: ['OK']
  //   });

  //   return updated.present();
  // }
}
