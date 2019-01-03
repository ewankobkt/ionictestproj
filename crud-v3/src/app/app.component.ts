import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, Events, LoadingController, AlertController } from '@ionic/angular';

import { DatahandlerService } from './libraries/datahandler.service';
import { AlertService } from './libraries/alert.service';
import { EventSubscribeService } from './libraries/event-subscribe.service';

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
    private alert: AlertService,
    private event: EventSubscribeService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav: NavController
  ) {
    this.initializeApp();
    this.event.eventSubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
}
