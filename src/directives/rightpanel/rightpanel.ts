import { Component, Input } from '@angular/core';
import {ToastController} from 'ionic-angular';
import { AlertController, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';



@Component({

    templateUrl: 'rightpanel.html',
    selector: 'rightPanel',
    inputs: ['navCtrl'],

})

export class RightPanelDirective {
   // @Input() navCtrl: any;
    items:any;
    constructor(private menu: MenuController, private platform: Platform) {
    this.items = [
            'Advertisement 1',
            'Advertisement 2',
            'Advertisement 3',
            'Advertisement 4',
            'Advertisement 5',
            'Advertisement 6',
            'Advertisement 7',
            'Advertisement 8',
            'Advertisement 9',
            'Advertisement 10',
            
        ];
    }
}

