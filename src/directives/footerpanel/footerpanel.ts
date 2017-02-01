import { Component, Input } from '@angular/core';
import {ToastController} from 'ionic-angular';
import { AlertController, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';



@Component({

    templateUrl: 'footerpanel.html',
    selector: 'footerPanel',
    inputs: ['navCtrl'],

})

export class FooterPanelDirective {
   // @Input() navCtrl: any;
    items:any;
    constructor(private menu: MenuController, private platform: Platform) {
    
    }
}

