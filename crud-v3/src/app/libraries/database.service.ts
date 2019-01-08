import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private sqlite: SQLite
  ) { }

  checkDatabase() {
    let check = false;
    const dbOpen = this.sqlite.create({
      name: 'citestproj.db',
      location: 'default'
    });

    dbOpen.then((db:SQLiteObject) => {
      db.executeSql('select * from sqlite_master WHERE type=\'table\'', [])
        .then((data) => {
          console.log('Executed SQL! Show table!');

          if (data.rows.length != 0) {
            check = true;
          }
        })
        .catch(e => console.log(e));
    });

    return check;
  }

  createDatabase() {
    const dbCreate = this.sqlite.create({
      name: 'citestproj.db',
      location: 'default'
    });

    return dbCreate;
  }

  createTable(table, column_name, column_type, values) {
    let self = this;
    const dbOpen = this.sqlite.create({
      name: 'citestproj.db',
      location: 'default'
    });

    let tables: any = [];
    let existTable: any = false;

    if (dbOpen != null) {
      dbOpen.then((db: SQLiteObject) => {
        db.executeSql('select * from sqlite_master WHERE type=\'table\'', [])
          .then((data) => {
            console.log('Executed SQL! Show table!');

            if (data.rows.length != 0) {
              for (var i = 0; i < data.rows.length; i++) {
                if (data.rows.item(i)['name'] == table) {
                  existTable = true;
                }
              }
            }
          })
          .catch(e => console.log(e));

        if (!existTable) {
          let createSql = "CREATE TABLE `" + table + "` (";

          if (column_name.length != column_type.length) {
            return false;
          }

          for (var i = 0; i < column_name.length; i++) {
            createSql += "`" + column_name[i] + "` " + column_type[i];
            if (i+1 != column_name.length) {
              createSql += ", ";
            }
          }

          createSql += ")";

          db.executeSql(createSql, [])
            .then(() => {
              console.log('Executed SQL! Created table '+ table + '!');
            })
            .catch(e => console.log(e));

          if (values.length > 0) {
            let insertSql = "insert into `" + table + "` (";

            for (var i = 0; i < column_name.length; i++) {
              insertSql += "`" + column_name[i] + "`";
              if (i+1 != column_name.length) {
                insertSql += ", ";
              }
            }

            insertSql += ") values (?, ?, ?, ?, ?, ?, ?)";

            db.executeSql(insertSql, values)
              .then(() => {
                console.log('Executed SQL! Inserted values on ' + table + '!');
              })
              .catch(e => console.log(e));
          }
        } else {
          console.log('Table already existed!');
        }
      })
      .catch(e => console.log(e));
    } else {
      console.log('Failed to create/open database');
    }
  }

  async login(name, password) {
    // console.log
  }
}
