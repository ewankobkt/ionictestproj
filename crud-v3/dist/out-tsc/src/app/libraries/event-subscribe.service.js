var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { AlertService } from './alert.service';
var EventSubscribeService = /** @class */ (function () {
    function EventSubscribeService(event, alert) {
        this.event = event;
        this.alert = alert;
    }
    EventSubscribeService.prototype.eventSubscribe = function () {
        var _this = this;
        this.event.subscribe('login', function (type) {
            if (type == 'not logged') {
                _this.alert.notLogged();
            }
            else if (type == 'logout') {
                _this.alert.logoutLoad();
            }
            else {
                _this.alert.loginFail();
            }
        });
        this.event.subscribe('home', function (type) {
            if (type == 'login success') {
                _this.alert.login();
            }
            else if (type == 'already login') {
                _this.alert.alreadyLogged();
            }
            else {
                _this.alert.updated();
            }
        });
    };
    EventSubscribeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Events,
            AlertService])
    ], EventSubscribeService);
    return EventSubscribeService;
}());
export { EventSubscribeService };
//# sourceMappingURL=event-subscribe.service.js.map