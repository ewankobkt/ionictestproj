import { Component, OnInit, NgZone, Injectable, ViewChild, forwardRef } from '@angular/core';
import { DatanameService } from '../dataname.service';
import { Router } from '@angular/router';
import { Content, Refresher, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any;

  constructor(
    private datanameService: DatanameService,
    private router: Router,
    private zone: NgZone,
    private loadctrl: LoadingController,
    private navctrl: NavController) { }

  ngOnInit() {
    this.getData();
  }

  async presentLoading() {
    const loading = await this.loadctrl.create({
      message: 'Getting Data',
      duration: 2000
    });

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
    this.router.navigate(['/update-name']);
  }
}
