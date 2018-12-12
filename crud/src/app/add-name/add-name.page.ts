import { Component, OnInit } from '@angular/core';
import { DatanameService } from '../dataname.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.page.html',
  styleUrls: ['./add-name.page.scss'],
})
export class AddNamePage implements OnInit {
  name: any;
  data: any;

  constructor(private datanameService: DatanameService, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  addName(formValue: any) {
    this.datanameService
      .postData('ajaxAdd', formValue)
      .subscribe(data => {
        if (data.result) {
          return this.navCtrl.navigateRoot('').then(window.location.reload);
          // .then(data=>{this.updateView()});
        } else {
          alert(data.message);
        }
      });
  }
}
