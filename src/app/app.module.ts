import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SesionPage } from '../pages/sesion/sesion';
import { RegisterPage } from '../pages/register/register';
import { DatabaseProvider } from '../providers/database/database';
import { UserPage } from '../pages/user/user';

import { SQLite } from '@ionic-native/sqlite';

import { HttpClientModule } from '@angular/common/http';
import { TodosProvider } from '../providers/todos/todos';
import { EmployeeProvider } from '../providers/employee/employee';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    SesionPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    SesionPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    TodosProvider,
    EmployeeProvider
  ]
})
export class AppModule {}
