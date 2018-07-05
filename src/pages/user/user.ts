import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { DatabaseProvider } from './../../providers/database/database';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public database: DatabaseProvider) {
  }

    createUser(){
      this.database.CreateUser("joaquin", "pariapaza larico", "yerson.pl", "123456", "yerson.pl@gmail.com", "emprendedor").then((data) => {
        console.log(data);
      }, (error) =>{
        console.log(error);
      })
    }

    getAllUsers(){
      this.database.GetAllUsers().then((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
