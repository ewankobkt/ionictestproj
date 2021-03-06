import { Component, OnInit, NgZone } from '@angular/core';
import { DatahandlerService } from '../../libraries/datahandler.service';
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
    private event: Events
  ) { }

  ngOnInit() {
    if ((window.localStorage.getItem('user.name') === null)
      && (window.localStorage.getItem('user.password') === null)) {
      this.datahandler.eventCreator('login', 'not logged');
      return this.nav.navigateForward('/login');
    }
  }
}
