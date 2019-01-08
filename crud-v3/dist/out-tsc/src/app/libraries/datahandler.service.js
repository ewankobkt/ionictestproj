var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from '@angular/core';
import { Events } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var WEB = environment.web;
var DatahandlerService = /** @class */ (function () {
    function DatahandlerService(http, event, zone) {
        this.http = http;
        this.event = event;
        this.zone = zone;
        this.update = [];
    }
    DatahandlerService.prototype.getData = function (url) {
        return this.http.get(WEB + "/" + url);
    };
    DatahandlerService.prototype.postData = function (url, name) {
        var form = new FormData();
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
        header.append('Access-Control-Allow-Origin', '*');
        header.append('Accept', 'application/x-www-form-urlencoded');
        header.append('Content-type', 'application/x-www-form-urlencoded');
        return this.http.post(WEB + "/" + url, form, { headers: header });
    };
    DatahandlerService.prototype.eventCreator = function (page, eventType) {
        this.event.publish(page, eventType);
    };
    DatahandlerService.prototype.getName = function () {
        this.event.publish('profile');
    };
    DatahandlerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            Events,
            NgZone])
    ], DatahandlerService);
    return DatahandlerService;
}());
export { DatahandlerService };
//# sourceMappingURL=datahandler.service.js.map