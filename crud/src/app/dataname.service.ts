import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';

const WEB = environment.web;

@Injectable({
  providedIn: 'root'
})
export class DatanameService {

  name: any;
  data: any;
  data_html: any;

  constructor(private http: HttpClient) { }

  getData(url) {
  	return this.http.get(`${WEB}/${url}`);
  }

  postData(url, name) {
    let form = new FormData();
    form.append('name', name.name);

    if (name.id != 'undefined') {
      form.append('id', name.id);
    }

    var header = new HttpHeaders();

    header.append('Access-Control-Allow-Origin' , '*');
    header.append('Accept', 'application/x-www-form-urlencoded');
    header.append('Content-type', 'application/x-www-form-urlencoded');

    return this.http.post(`${WEB}/${url}`, form, { headers: header });
  }

  updateListAdd(data) {
    var str = '<ion-card>' + 
      '<ion-card-content>' +
      '<p>' + data['name'] + '</p>' +
      '<div padding>' +
      '<button ion-button color="primary" type="submit" (click)="updateName(name)">Update</button>' +
      '</div>' +
      '</ion-card-content>' +
      '</ion-card>';
    var list = document.getElementById('name-list');
    list.innerHTML = str + list.innerHTML;
  }
}
