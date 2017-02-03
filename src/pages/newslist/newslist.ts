import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/authservice/authservice';
import { NewsPopUp } from '../../pages/newspopup/newspopup'

@Component({
  templateUrl: 'newslist.html'
})
export class NewsList {
  result: any;
  newsList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalController: ModalController, private toastController: ToastController, private authService: AuthService) {
    this.init();
  }
  openNews(obj) {
    console.log(obj);
    let modal = this.modalController.create(NewsPopUp,{newsObject:obj});
    modal.present();
  }
  init() {
    this.authService.fetchNews().then(res => {
      this.result = res
      console.log(res)
      if (this.result.status == true) {
        this.newsList = this.result.data.news
        // let alertMsg = this.toastController.create({
        //   message: this.result.data.message,
        //   duration: 3000,
        //   position: 'top'
        // });
        // alertMsg.present();
      }
      else {
        let alertMsg = this.toastController.create({
          message: this.result.error.message,
          duration: 3000,
          position: 'top'
        });
        alertMsg.present();
      }
    })
  }
}
