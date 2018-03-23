import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page4Page } from '../page4/page4';
import { Page5Page } from '../page5/page5';
@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pushPage(){
  	this.navCtrl.push(Page4Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
