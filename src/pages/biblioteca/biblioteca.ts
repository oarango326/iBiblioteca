import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetallePage} from "../detalle/detalle";

/**
 * Generated class for the BibliotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biblioteca',
  templateUrl: 'biblioteca.html',
})
export class BibliotecaPage {
  libro: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.libro = navParams.get('libro');

  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter BibliotecaPage');
  }
  ionViewDidLoad() {
    console.log(this.libro)
    console.log('ionViewDidLoad BibliotecaPage');
  }

  verPaginaDetalle(libro):void {
    this.navCtrl.push(DetallePage, {libro: libro});
  }

}
