import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class EventSubscribeService {

  constructor(
    private event: Events,
    private alert: AlertService
  ) { }

  eventSubscribe() {
    this.event.subscribe('login', (type) => {
      if (type == 'not logged') {
        this.alert.notLogged();
      } else if (type == 'logout') {
        this.alert.logoutLoad();
      } else {
        this.alert.loginFail();
      }
    });

    this.event.subscribe('home', (type) => {
      if (type == 'login success') {
        this.alert.login();
      } else if (type == 'already login') {
        this.alert.alreadyLogged();
      } else {
        this.alert.updated();
      }
    });
  }
}
