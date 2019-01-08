var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { DatahandlerService } from '../../libraries/datahandler.service';
import { Router } from '@angular/router';
import { NavController, Events, AlertController } from '@ionic/angular';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(datahandler, router, alert, nav, event) {
        var _this = this;
        this.datahandler = datahandler;
        this.router = router;
        this.alert = alert;
        this.nav = nav;
        this.event = event;
        this.event.subscribe('profile', function () {
            _this.name = window.localStorage.getItem('user.name');
            _this.password = window.localStorage.getItem('user.password');
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
        if ((window.localStorage.getItem('user.name') === null)
            && (window.localStorage.getItem('user.password') === null)) {
            this.datahandler.eventCreator('login', 'not logged');
            return this.nav.navigateForward('/login');
        }
        else {
            this.datahandler.getName();
        }
    };
    ProfilePage.prototype.updateProfile = function (formValue) {
        var _this = this;
        this.datahandler
            .postData('ajaxUpdate', formValue)
            .subscribe(function (data) {
            if (data['result']) {
                window.localStorage.setItem('user.name', formValue.name);
                window.localStorage.setItem('user.password', formValue.password);
                _this.datahandler.eventCreator('home', 'update profile');
                return _this.nav.navigateForward('/home');
            }
            else {
                alert(data['message']);
            }
        });
    };
    ProfilePage.prototype.updateFail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updateFail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Alert',
                            // subHeader: 'Subtitle',
                            message: 'Update failed.',
                            buttons: ['OK']
                        })];
                    case 1:
                        updateFail = _a.sent();
                        return [4 /*yield*/, updateFail.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        __metadata("design:paramtypes", [DatahandlerService,
            Router,
            AlertController,
            NavController,
            Events])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map