import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(
    public http: HttpClient,
    public sqlite: SQLite
  ) {
    if(!this.isOpen){ // config. para crear la base de datos y la tabla user
      this.sqlite = new SQLite();
      this.sqlite.create({name: "data.db", location:"default"}).then((db: SQLiteObject) =>{
        this.db = db;
        db.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, lastname, user TEXT, password TEXT, email TEXT, type TEXT  )", []);
        this.isOpen = true;
      }).catch((error) =>{
        console.log(error);
      })
    }
  }
// crando  users
  CreateUser(name: string, lastname:string, user:string, password:string, email:string, type:string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO users (name, lastname, user, password, email, type) VALUES (?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, [name, lastname, user, password, email, type, ]).then((data) =>{
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }
// lista de users
  GetAllUsers(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM users", []).then((data) => {
        let arrayUsers = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              id: data.rows.item(i).id,
              name: data.rows.item(i).name,
              lastname: data.rows.item(i).lastname,
              user: data.rows.item(i).user,
              password: data.rows.item(i).password,
              email: data.rows.item(i).email,
              type: data.rows.item(i).type
            });
          }
        }
        resolve(arrayUsers);
      }, (error) => {
        reject(error);
      })
    })
  }

}
