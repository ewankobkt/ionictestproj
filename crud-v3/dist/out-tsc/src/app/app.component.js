var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import { DatahandlerService } from './libraries/datahandler.service';
import { AlertService } from './libraries/alert.service';
import { EventSubscribeService } from './libraries/event-subscribe.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(datahandler, alert, event, platform, splashScreen, statusBar, nav) {
        this.datahandler = datahandler;
        this.alert = alert;
        this.event = event;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.nav = nav;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Logout',
                url: '/logout',
                icon: 'exit'
            }
        ];
        // if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
        //     WebView.setWebContentsDebuggingEnabled(true);
        // }
        this.initializeApp();
        this.event.eventSubscribe();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.logout = function () {
        window.localStorage.removeItem('user.name');
        window.localStorage.removeItem('user.password');
        this.datahandler.eventCreator('login', 'logout');
        return this.nav.navigateForward('/login');
    };
    AppComponent.prototype.profile = function () {
        this.datahandler.getName();
        return this.nav.navigateForward('/profile');
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [DatahandlerService,
            AlertService,
            EventSubscribeService,
            Platform,
            SplashScreen,
            StatusBar,
            NavController])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map