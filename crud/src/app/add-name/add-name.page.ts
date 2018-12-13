import { Component, OnInit, ViewChild, Injectable, NgZone } from '@angular/core';
import { DatanameService } from '../dataname.service';
import { Router } from '@angular/router';
import { NavController, Events } from '@ionic/angular';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.page.html',
  styleUrls: ['./add-name.page.scss'],
})
export class AddNamePage implements OnInit {
  name: any;
  data: any;

  constructor(
    private datanameService: DatanameService,
    private router: Router,
    private navCtrl: NavController,
    private event: Events
  ) { }

  ngOnInit() {
  }

  addName(formValue: any) {
    this.datanameService
      .postData('ajaxAdd', formValue)
      .subscribe(data => {
        if (data['result']) {
          this.name = '';
          this.datanameService.eventCreator('data-change');
          return this.navCtrl.navigateRoot('');
        } else {
          alert(data['message']);
        }
      });
  }
}
