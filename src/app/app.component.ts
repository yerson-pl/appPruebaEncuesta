import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { SesionPage } from './../pages/sesion/sesion';

import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =LoginPage;
  homepage = LoginPage;
  iniciarSesion = SesionPage
  @ViewChild('contenido') nav:NavController

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
      // Inicializando firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAFM0L1oXtYmTVM3M9lVF0m21e2ed4qpxY",
      authDomain: "encuestas-a13b4.firebaseapp.com"
    });
  }

  openPage(pagina){
    this.nav.setRoot(pagina);
    this.menuCtrl.close();
  }

  closeSesion(){

  }
}

