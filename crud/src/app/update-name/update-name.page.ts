import { Component, OnInit } from '@angular/core';
import { DatanameService } from '../dataname.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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

  constructor(private datanameService: DatanameService, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.id = this.datanameService.data.id;
    this.name = this.datanameService.data.name;
  }

  updateName(formValue: any) {
    this.datanameService
      .postData('ajaxUpdate', formValue)
      .subscribe(data => {
        if (data['result']) {
          this.name = '';
          this.id = '';
          this.datanameService.eventCreator('data-change');
          return this.navCtrl.navigateRoot('');
        } else {
          alert(data['message']);
        }
      });
  }

}
