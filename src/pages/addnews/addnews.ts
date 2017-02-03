import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice/authservice';
import { LeftPanelDirective } from '../directives/leftpanel/leftpanel'
import {NewsList} from '../../pages/newslist/newslist'

@Component({
    templateUrl: 'addnews.html',
    //providers: [AuthService]
})
export class AddNews {
    addnews: any = {};
    result:any;
    constructor(private authService: AuthService,private navCtrl:NavController, private toastController: ToastController) {
        this.addnews.news_type_id = 0;
    }
    onChange(evt) {

    }
    onAddNews() {
        console.log(this.addnews);
        this.authService.addNews(this.addnews).then(res => {
            this.result =res
            console.log(res)
            if (this.result.status == true) {
                let alertMsg = this.toastController.create({
                    message: this.result.data.message,
                    duration: 3000,
                    position: 'top'
                });
                alertMsg.present();
                  this.navCtrl.push(NewsList);
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
    onCancel() {
        console.log('oncancel');
    }
}
