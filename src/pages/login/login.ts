import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import {WelcomePage} from '../../pages/welcomepage/welcomepage'
import { LeftPanelDirective } from '../directives/leftpanel/leftpanel'

@Component({
    templateUrl: 'login.html'
})
export class Login {
    credentials: any = {};
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController, private toastController: ToastController) {

    }
    onLogin() {
        console.log(this.credentials);
        if (this.credentials.email == "agra@gmail.com" && this.credentials.password == 123) {
            this.navCtrl.push(WelcomePage);
        }
        else {
            let toastMsg = this.toastController.create({
                message: "Invalid credentials please check username and password",
                duration: 3000,
                 position: 'top'
            });
            toastMsg.present();
        }
    }
    onCancel() {
        console.log('oncancel');
    }
}
