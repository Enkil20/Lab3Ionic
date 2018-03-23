import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page5Page } from '../page5/page5';
@IonicPage()
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',
})
export class Page4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pushPage(){
  	this.navCtrl.push(Page5Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page4Page');
  }

}
