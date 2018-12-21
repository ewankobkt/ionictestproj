import { Component, OnInit } from '@angular/core';
import { DatanameService } from '../dataname.service';
import { Router } from '@angular/router';
import { NavController, Events } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.page.html',
  styleUrls: ['./update-name.page.scss'],
})
export class UpdateNamePage implements OnInit {
  data;
  name;
  id;

  constructor(
    private datanameService: DatanameService,
    private router: Router,
    private navctrl: NavController,
    private event: Events
  ) {
  }

  ngOnInit() {
    if (typeof this.datanameService.data === 'undefined') {
      window.location.href = '/tabs/(login:login)';
    }

    this.getData();
  }

  check() {
    if (typeof this.datanameService.data === 'undefined') {
      return this.navctrl.navigateForward('/tabs/(login:login)');
    }
  }

  getData() {
    this.id = this.datanameService.data.id;
    this.name = this.datanameService.data.name;
  }

  goBack() {
    return this.navctrl.navigateForward('/tabs/(login:login)');
  }

  updateName(formValue: any) {
    this.datanameService
      .postData('ajaxUpdate', formValue)
      .subscribe(data => {
        if (data['result']) {
          this.name = '';
          this.id = '';
          this.datanameService.eventCreator('data-change');
          return this.navctrl.navigateForward('/tabs/(login:login)');
        } else {
          alert(data['message']);
        }
      });
  }

}
