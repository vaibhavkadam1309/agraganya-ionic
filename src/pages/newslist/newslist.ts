import { Component } from '@angular/core';

import { NavController, NavParams,ModalController } from 'ionic-angular';

import {NewsPopUp} from '../../pages/newspopup/newspopup'

@Component({
  templateUrl: 'newslist.html'
})
export class NewsList {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalController:ModalController) {
    // If we navigated to this page, we will have an item available as a nav param

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  openNews(obj) {
    console.log(obj);
    let modal = this.modalController.create(NewsPopUp);
    modal.present();
  }
  //   itemTapped(event, item) {
  //     this.navCtrl.push(ItemDetailsPage, {
  //       item: item
  //     });
  //   }
}
