import { Component, Input } from '@angular/core';
import {ToastController} from 'ionic-angular';
import { AlertController, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';



@Component({

    templateUrl: 'headerpanel.html',
    selector: 'headerPanel',
    inputs: ['navCtrl'],

})

export class HeaderPanelDirective {
   // @Input() navCtrl: any;
    items:any;
    constructor(private menu: MenuController, private platform: Platform) {
    
    }
}

