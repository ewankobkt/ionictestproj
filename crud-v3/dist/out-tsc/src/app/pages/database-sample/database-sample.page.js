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
import { SQLite } from '@ionic-native/sqlite/ngx';
var DatabaseSamplePage = /** @class */ (function () {
    function DatabaseSamplePage(sqlite) {
        this.sqlite = sqlite;
    }
    DatabaseSamplePage.prototype.ngOnInit = function () {
        // let del = this.removeDatabase();
        // if (del) {
        //   this.createDatabase();
        // }
        this.createTable();
        // this.showTables();
    };
    DatabaseSamplePage.prototype.removeDatabase = function () {
        var dbOpen = this.sqlite.create({
            name: 'citestproj.db',
            location: 'default'
        });
        if (dbOpen != null) {
            this.sqlite.deleteDatabase({
                name: 'citestproj.db',
                location: 'default'
            });
            return true;
        }
        return false;
    };
    DatabaseSamplePage.prototype.createDatabase = function () {
        var dbCreate = this.sqlite.create({
            name: 'citestproj.db',
            location: 'default'
        });
    };
    DatabaseSamplePage.prototype.createTable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, dbOpen, tests, tables, tables;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        dbOpen = this.sqlite.create({
                            name: 'citestproj.db',
                            location: 'default'
                        });
                        tests = [];
                        tables = [];
                        tables = [];
                        if (!(dbOpen != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, dbOpen.then(function (db) {
                                db.executeSql('select * from sqlite_master WHERE type=\'table\'', [])
                                    .then(function (data) {
                                    console.log('Executed SQL! Show table!');
                                    for (var i = 0; i < data.rows.length; i++) {
                                        tables.push(data.rows.item(i));
                                    }
                                })
                                    .catch(function (e) { return console.log(e); });
                                var createSql = "CREATE TABLE `tests` (" +
                                    "`id` INTEGER PRIMARY KEY AUTOINCREMENT, " +
                                    "`name` varchar(255) DEFAULT NULL, " +
                                    "`salt` varchar(64) DEFAULT NULL, " +
                                    "`password` varchar(64) DEFAULT NULL, " +
                                    "`status` int(1) DEFAULT '1', " +
                                    "`created_at` datetime DEFAULT NULL, " +
                                    "`updated_at` datetime DEFAULT NULL)";
                                db.executeSql(createSql, [])
                                    .then(function () {
                                    console.log('Executed SQL! Created table `tests`!');
                                })
                                    .catch(function (e) { return console.log(e); });
                                var insertSql = "insert into `tests`(`id`,`name`,`salt`,`password`,`status`,`created_at`,`updated_at`) " +
                                    "values (?, ?, ?, ?, ?, ?, ?)";
                                var values = [
                                    1,
                                    'angelo',
                                    '60QmjnaqYyb6nrai',
                                    '3b06d649a689e45907c66164c41ee34614c3a010',
                                    1,
                                    '2018-12-20 12:21:43',
                                    '2019-01-04 02:57:01'
                                ];
                                db.executeSql(insertSql, values)
                                    .then(function () {
                                    console.log('Executed SQL! Inserted values on `tests!`');
                                })
                                    .catch(function (e) { return console.log(e); });
                                db.executeSql('select * from tests', [])
                                    .then(function (data) {
                                    console.log('Executed SQL! Select table `tests`!');
                                    for (var i = 0; i < data.rows.length; i++) {
                                        tests.push(data.rows.item(i));
                                    }
                                })
                                    .catch(function (e) { return console.log(e); });
                            })
                                .catch(function (e) { return console.log(e); })];
                    case 1:
                        _a.sent();
                        console.log(tests);
                        console.log(tables);
                        return [3 /*break*/, 3];
                    case 2:
                        console.log('Failed to create/open database');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseSamplePage.prototype.importData = function () {
        // if (dbCreate != null) {
        //   dbCreate.then((db: SQLiteObject) => {
        //     db.executeSql('create table name (name VARCHAR(32))', [])
        //       .then(() =>
        //         console.log('Executed SQL')
        //       )
        //       .catch(e => console.log(e));
        //   })
        //   .catch(e => console.log(e));
        // } else {
        //   console.log('Failed to create database');
        // }
    };
    DatabaseSamplePage.prototype.portDatabase = function () {
        // 
    };
    DatabaseSamplePage = __decorate([
        Component({
            selector: 'app-database-sample',
            templateUrl: './database-sample.page.html',
            styleUrls: ['./database-sample.page.scss'],
        }),
        __metadata("design:paramtypes", [SQLite])
    ], DatabaseSamplePage);
    return DatabaseSamplePage;
}());
export { DatabaseSamplePage };
//# sourceMappingURL=database-sample.page.js.map