import { Component, OnInit, NgZone } from '@angular/core';
import { DatanameService } from '../dataname.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any;

  constructor(private datanameService: DatanameService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.datanameService
      .getData('ajaxRead')
      .subscribe(data => {
        this.data = data;
      });
    
    // this.zone.run(() => {this.updateView()});
  }

  updateView() {
    console.log('asd');
    this.datanameService
      .getData('ajaxRead')
      .subscribe(data => {
        this.data = data;
      });
  }

  updateName(id, name) {
  }
}
