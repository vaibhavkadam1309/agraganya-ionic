import { Component, Input } from '@angular/core';
import {ToastController} from 'ionic-angular';
import { AlertController, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';

import {Login} from '../../pages/login/login'


@Component({

    templateUrl: 'headerpanel.html',
    selector: 'headerPanel',
    inputs: ['navCtrl'],

})

export class HeaderPanelDirective {
   // @Input() navCtrl: any;
    items:any;
    constructor(private menu: MenuController, private platform: Platform,private nav: NavController) {
    
    }
    goPage(){
        this.nav.push(Login);

    }
}

