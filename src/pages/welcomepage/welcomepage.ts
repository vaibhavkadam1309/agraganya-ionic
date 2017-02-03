import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { AddNews } from '../../pages/addnews/addnews'
import { LeftPanelDirective } from '../directives/leftpanel/leftpanel'

@Component({
    templateUrl: 'welcomepage.html'
})
export class WelcomePage {
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewController: ViewController, private toastController: ToastController) {

    }

    gotoPage(obj) {
        console.log(obj);
        switch (obj) {
            case 'news':
                this.navCtrl.push(AddNews);
                break;
            case 'advt':
                this.navCtrl.push(AddNews);
                break;
        }
    }
}
