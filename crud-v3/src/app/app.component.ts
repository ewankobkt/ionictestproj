import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, Events } from '@ionic/angular';

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
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
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
    private nav: NavController
  ) {
    this.initializeApp();
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
}
