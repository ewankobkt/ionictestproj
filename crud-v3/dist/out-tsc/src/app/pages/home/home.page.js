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
import { AlertController, NavController, Events } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(datahandler, alert, nav, zone, event) {
        this.datahandler = datahandler;
        this.alert = alert;
        this.nav = nav;
        this.zone = zone;
        this.event = event;
        this.msubscribe = false;
    }
    HomePage.prototype.ngOnInit = function () {
        if ((window.localStorage.getItem('user.name') === null)
            && (window.localStorage.getItem('user.password') === null)) {
            this.datahandler.eventCreator('login', 'not logged');
            return this.nav.navigateForward('/login');
        }
    };
    HomePage = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        __metadata("design:paramtypes", [DatahandlerService,
            AlertController,
            NavController,
            NgZone,
            Events])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map