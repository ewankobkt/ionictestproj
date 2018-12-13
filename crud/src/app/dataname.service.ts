import { Injectable, Component } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { Events } from '@ionic/angular';

const WEB = environment.web;

@Injectable({
  providedIn: 'root'
})

export class DatanameService {
  id: any;
  name: any;
  data: any;
  data_html: any;

  constructor(
    private http: HttpClient,
    private event: Events
  ) { }

  getData(url) {
  	return this.http.get(`${WEB}/${url}`);
  }

  postData(url, name) {
    let form = new FormData();

    if (name.name != 'undefined') {
      form.append('name', name.name);
    }

    if (name.id != 'undefined') {
      form.append('id', name.id);
    }

    var header = new HttpHeaders();

    header.append('Access-Control-Allow-Origin' , '*');
    header.append('Accept', 'application/x-www-form-urlencoded');
    header.append('Content-type', 'application/x-www-form-urlencoded');

    return this.http.post(`${WEB}/${url}`, form, { headers: header });
  }

  eventCreator(eventType) {
    this.event.publish(eventType);
  }
}
