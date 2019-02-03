import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BibliotecaPage} from "../biblioteca/biblioteca";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navegar(){
    this.navCtrl.push(BibliotecaPage)
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
