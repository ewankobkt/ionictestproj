import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';
import { Router } from '@angular/router';
import { NavController, Events, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name: any;
  password: any;

  constructor(
    private datahandler: DatahandlerService,
    private router: Router,
    private alert: AlertController,
    private nav: NavController
  ) { }

  ngOnInit() {
    if ((window.localStorage.getItem('user.name') === null)
      && (window.localStorage.getItem('user.password') === null)) {
      this.nav.navigateForward('/login');
      return this.datahandler.eventCreator('login', 'not logged');
    }

    // if (this.datahandler.page !== 'undefined' && this.datahandler.page == 'profile') {
    //   this.datahandler.eventCreator(this.datahandler.page, this.datahandler.eventType);
    // }

    this.name = window.localStorage.getItem('user.name');
    this.password = window.localStorage.getItem('user.password');
  }

  updateProfile(formValue: any) {
    this.datahandler
      .postData('ajaxUpdate', formValue)
      .subscribe(data => {
        if (data['result']) {
          window.localStorage.setItem('user.name', formValue.name);
          window.localStorage.setItem('user.password', formValue.password);
          this.datahandler.eventCreator('home', 'update profile');
          return this.nav.navigateForward('/home');
        } else {
          alert(data['message']);
        }
      });
  }

  async updateFail() {
    const updateFail = await this.alert.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Update failed.',
      buttons: ['OK']
    });

    await updateFail.present();
  }
}
