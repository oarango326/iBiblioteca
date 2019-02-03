import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AutorPage} from "../pages/autor/autor";
import {CurriculumPage} from "../pages/curriculum/curriculum";
import {BibliotecaPage} from "../pages/biblioteca/biblioteca";
import {DetallePage} from "../pages/detalle/detalle";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutorPage,
    CurriculumPage,
    BibliotecaPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  AutorPage,
  CurriculumPage,
  BibliotecaPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
