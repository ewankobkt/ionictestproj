import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Component({
  selector: 'app-database-sample',
  templateUrl: './database-sample.page.html',
  styleUrls: ['./database-sample.page.scss'],
})
export class DatabaseSamplePage implements OnInit {

  constructor(
    private sqlite: SQLite
  ) { }

  tables: any;

  ngOnInit() {
    // let del = this.removeDatabase();

    // if (del) {
    //   this.createDatabase();
    // }

    this.createTable();
    // this.showTables();
  }

  removeDatabase() {
    const dbOpen = this.sqlite.create({
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
  }

  createDatabase() {
    const dbCreate = this.sqlite.create({
      name: 'citestproj.db',
      location: 'default'
    });
  }

  async createTable() {
    let self = this;
    const dbOpen = this.sqlite.create({
      name: 'citestproj.db',
      location: 'default'
    });

    let tests: any = [];
    let tables: any = [];
    let existTable: any = false;

    if (dbOpen != null) {
      await dbOpen.then((db: SQLiteObject) => {
        db.executeSql('select * from sqlite_master WHERE type=\'table\'', [])
          .then((data) => {
            console.log('Executed SQL! Show table!');

            if (data.rows.length != 0) {
              for (var i = 0; i < data.rows.length; i++) {
                tables.push(data.rows.item(i));
              }

              existTable = true;
            }
          })
          .catch(e => console.log(e));

        if (!existTable) {
          let createSql = "CREATE TABLE `tests` (" +
            "`id` INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "`name` varchar(255) DEFAULT NULL, " +
            "`salt` varchar(64) DEFAULT NULL, " +
            "`password` varchar(64) DEFAULT NULL, " +
            "`status` int(1) DEFAULT '1', " +
            "`created_at` datetime DEFAULT NULL, " +
            "`updated_at` datetime DEFAULT NULL)";

          db.executeSql(createSql, [])
            .then(() => {
              console.log('Executed SQL! Created table `tests`!');
            })
            .catch(e => console.log(e));

          let insertSql = "insert into `tests`(`id`,`name`,`salt`,`password`,`status`,`created_at`,`updated_at`) " + 
            "values (?, ?, ?, ?, ?, ?, ?)";

          let values = [
            1,
            'angelo',
            '60QmjnaqYyb6nrai',
            '3b06d649a689e45907c66164c41ee34614c3a010',
            1,
            '2018-12-20 12:21:43',
            '2019-01-04 02:57:01'
          ];

          db.executeSql(insertSql, values)
            .then(() => {
              console.log('Executed SQL! Inserted values on `tests!`')

            })
            .catch(e => console.log(e));

          db.executeSql('select * from tests', [])
            .then((data) => {
              console.log('Executed SQL! Select table `tests`!');

              for (var i = 0; i < data.rows.length; i++) {
                tests.push(data.rows.item(i));
              }
            })
            .catch(e => console.log(e));

          console.log(tables);
          console.log(tests);
        } else {
          console.log('Table already existed!');
        }
      })
      .catch(e => console.log(e));

      // setTimeout(function() {
      //   console.log('timeout');
      //   self.showTables();
      // }, 5000);
    } else {
      console.log('Failed to create/open database');
    }
  }

  importData() {
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
  }

  portDatabase() {
    // 
  }

}
