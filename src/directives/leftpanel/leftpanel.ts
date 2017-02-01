import { Component, Input } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AlertController, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';



@Component({

    templateUrl: 'leftpanel.html',
    selector: 'leftPanel',
    inputs: ['navCtrl'],

})

export class LeftPanelDirective {
    // @Input() navCtrl: any;
    items: any;
    constructor(private menu: MenuController, private platform: Platform) {
        this.initializeApp();
        this.items = [
            'चालू घडामोडी ',
            'संपादकीय',
            'राजकीय घडामोडी',
            'बिसनेस न्यूज',
            'रुपेरी दुनिया',
            'पाककला',
            'व्यक्ती विशेष',
            'आरोग्य मंत्र',
            'बोधकथा',
            'शेती-शेतकरी',
            'शब्दकोडे',
            'हास्य विनोद',
            'सुविचार',
            'वेध भविष्याचा',
            'सोशल मिडिया कॉर्नर',
            'आणि महत्वाचे'
        ];

    }

    // ngAfterViewInit() {
    //     console.log(this.navCtrl);
    //     if (this.navCtrl) {
    //         this.nav = this.navCtrl;
    //     }
    // }
    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            this.menu.close();
        });
    }

}

