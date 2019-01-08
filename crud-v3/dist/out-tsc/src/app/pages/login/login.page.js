var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { DatahandlerService } from '../../libraries/datahandler.service';
import { NavController, LoadingController, Events, AlertController } from '@ionic/angular';
var LoginPage = /** @class */ (function () {
    function LoginPage(datahandler, alert, nav, load, zone, event) {
        this.datahandler = datahandler;
        this.alert = alert;
        this.nav = nav;
        this.load = load;
        this.zone = zone;
        this.event = event;
        this.msubscribe = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        if ((window.localStorage.getItem('user.name') !== null)
            && (window.localStorage.getItem('user.password') !== null)) {
            this.nav.navigateForward('/home');
            this.datahandler.eventCreator('home', 'already login');
        }
    };
    LoginPage.prototype.eventUnsubscribe = function () {
        console.log('unsub login');
        this.event.unsubscribe('login');
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        if ((form.name == null || form.name == '') || (form.password == null || form.password == '')) {
            return this.datahandler.eventCreator('login', 'login failed');
        }
        this.datahandler
            .postData('ajaxLogin', form)
            .subscribe(function (data) {
            if (data['result']) {
                window.localStorage.setItem('user.name', form.name);
                window.localStorage.setItem('user.password', form.password);
                _this.name = '';
                _this.password = '';
                _this.datahandler.data = form;
                _this.datahandler.eventCreator('home', 'login success');
                return _this.nav.navigateForward('/home');
            }
            else {
                return _this.datahandler.eventCreator('login', 'login failed');
            }
        });
    };
    LoginPage = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __metadata("design:paramtypes", [DatahandlerService,
            AlertController,
            NavController,
            LoadingController,
            NgZone,
            Events])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map