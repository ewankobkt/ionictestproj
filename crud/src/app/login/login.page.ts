import { Component, OnInit, NgZone, Injectable, ViewChild, forwardRef } from '@angular/core';
import { DatanameService } from '../dataname.service';
import { Router } from '@angular/router';
import { Content, Refresher, LoadingController, NavController, Events } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class LoginPage implements OnInit {
  data: any;
  task: any;

  constructor(
    private datanameService: DatanameService,
    private router: Router,
    private zone: NgZone,
    private loadctrl: LoadingController,
    private navctrl: NavController,
    private event: Events
  ) {
    event.subscribe('data-change', () => {
      this.presentLoading();
    });
  }

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadctrl.create({
      message: 'Getting Data',
      duration: 2000
    });

    this.getData();

    return await loading.present();
  }

  async getData() {
    return await this.datanameService
      .getData('ajaxRead')
      .subscribe(data => {
        this.zone.run(() => {
          this.data = data;
        });
      });
  }

  async doRefresh(refresher) {
    setTimeout(() => {
      this.getData();

      refresher.target.complete();
    }, 2000);
  }

  updateName(name) {
    this.datanameService.data = name;
    return this.navctrl.navigateForward('/update-name');
  }

  deleteName(formValue: any) {
    var del = confirm('Are you sure you want to delete this?');

    if (del) {
      this.datanameService
      .postData('ajaxDelete', formValue)
      .subscribe(data => {
        if (data['result']) {
          this.datanameService.eventCreator('data-change');
        } else {
          alert(data['message']);
        }
      });
    }
  }
}
