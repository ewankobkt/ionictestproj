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

  constructor(private http: HttpClient) { }

  getData(url) {
  	return this.http.get(`${WEB}/${url}`);
  }

  postData(url, name) {
    let form = new FormData();
    form.append('name', name.name);

    var header = new HttpHeaders();

    header.append('Access-Control-Allow-Origin' , '*');
    header.append('Accept', 'application/x-www-form-urlencoded');
    header.append('Content-type', 'application/x-www-form-urlencoded');

    return this.http.post(`${WEB}/${url}`, form, { headers: header });
  }
}
