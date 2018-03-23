import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
/**
 * Generated class for the Page5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html',
})
export class Page5Page {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pushPage(){
  	this.navCtrl.push(Page1Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page5Page');
  }

}
