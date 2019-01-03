import { Injectable, NgZone } from '@angular/core';
import { Events } from '@ionic/angular';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { AppRoutingPreloaderService } from './app-routing-preloader.service';

const WEB = environment.web;

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  name: any;
  data: any;
  update: any = [];

  constructor(
    private http: HttpClient,
    private event: Events,
    private zone: NgZone,
    private routingService: AppRoutingPreloaderService
  ) { }

  getData(url) {
  	return this.http.get(`${WEB}/${url}`);
  }

  postData(url, name) {
    let form = new FormData();

    if (typeof name.name != 'undefined') {
      form.append('name', name.name);
    }

    if (typeof name.id != 'undefined') {
      form.append('id', name.id);
    }

    if (typeof name.password != 'undefined') {
      form.append('password', name.password);
    }

    var header = new HttpHeaders();

    header.append('Access-Control-Allow-Origin' , '*');
    header.append('Accept', 'application/x-www-form-urlencoded');
    header.append('Content-type', 'application/x-www-form-urlencoded');

    return this.http.post(`${WEB}/${url}`, form, { headers: header });
  }

  async loadModule(page) {
    await this.routingService.preloadRoute(page);
  }

  eventCreator(page, eventType) {
    this.event.publish(page, eventType);
  }

  getName() {
    this.event.publish('profile');
  }
}
