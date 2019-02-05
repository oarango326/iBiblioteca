import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',

})

export class DetallePage {
  public libro:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.libro = navParams.get('libro');
    (console.log(this.libro));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
