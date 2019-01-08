import { Component, OnInit, NgZone } from '@angular/core';
import { DatahandlerService } from '../../libraries/datahandler.service';
import { DatabaseService } from '../../libraries/database.service';
import { Router } from '@angular/router';
import { NavController, LoadingController, Events, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name: any;
  password: any;
  data: any;
  msubscribe: any = false;

  constructor(
    private datahandler: DatahandlerService,
    private db: DatabaseService,
    private alert: AlertController,
    private nav: NavController,
    private load: LoadingController,
    private zone: NgZone,
    private event: Events
  ) { }

  ngOnInit() {
    if (!this.db.checkDatabase()) {
      window.localStorage.removeItem('user.name');
      window.localStorage.removeItem('user.password');
      this.db.createDatabase();

      let table = 'tests';
      let column_name = ['id', 'name', 'salt', 'password', 'status', 'created_at', 'updated_at'];
      let column_type = [
        'INTEGER PRIMARY KEY AUTOINCREMENT',
        'varchar(255) DEFAULT NULL',
        'varchar(64) DEFAULT NULL',
        'varchar(64) DEFAULT NULL',
        'int(1) DEFAULT \'1\'',
        'datetime DEFAULT NULL',
        'datetime DEFAULT NULL'
      ];
      let values = [
        1,
        'angelo',
        '60QmjnaqYyb6nrai',
        '3b06d649a689e45907c66164c41ee34614c3a010',
        1,
        '2018-12-20 12:21:43',
        '2019-01-04 02:57:01'
      ];

      this.db.createTable(table, column_name, column_type, values);
    }

    if ((window.localStorage.getItem('user.name') !== null)
      && (window.localStorage.getItem('user.password') !== null)) {
      this.nav.navigateForward('/home');
      this.datahandler.eventCreator('home', 'already login');
    }
  }

  login(form: any) {
    if ((form.name == null || form.name == '') || (form.password == null || form.password == '')) {
      return this.datahandler.eventCreator('login', 'login failed');
    }

    // login in PHP
    this.datahandler
      .postData('ajaxLogin', form)
      .subscribe(data => {
        if (data['result']) {
          window.localStorage.setItem('user.name', form.name);
          window.localStorage.setItem('user.password', form.password);
          this.name = '';
          this.password = '';
          this.datahandler.data = form;
          this.datahandler.eventCreator('home', 'login success');
          return this.nav.navigateForward('/home');
        } else {
          return this.datahandler.eventCreator('login', 'login failed');
        }
      });
  }
}
