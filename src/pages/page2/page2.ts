import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page3Page } from '../page3/page3';
import { Page5Page } from '../page5/page5';
@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pushPage(){
  	this.navCtrl.push(Page3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
