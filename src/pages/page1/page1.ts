import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { Page5Page } from '../page5/page5';


@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {
	mealValue: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pushPage(){
  	this.navCtrl.push(Page2Page);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
