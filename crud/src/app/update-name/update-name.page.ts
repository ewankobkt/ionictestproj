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
        // data = JSON.parse(data);
        if (data['result']) {
          return this.navCtrl.navigateRoot('').then(window.location.reload);
          // .then(data=>{this.updateView()});
        } else {
          alert(data['message']);
        }
      });
  }

}
