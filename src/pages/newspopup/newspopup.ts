import { Component } from '@angular/core';

import { NavController, NavParams,ViewController } from 'ionic-angular';
import {LeftPanelDirective} from '../directives/leftpanel/leftpanel'

@Component({
    templateUrl: 'newspopup.html'
})
export class NewsPopUp {
    addnews:any ={};
    newsData:{};
    constructor(public navCtrl: NavController, public navParams: NavParams,private viewController:ViewController) {
        this.newsData = navParams.get('newsObject');
    }
    onAddNews(){
        console.log('vaibhav');
    }
    onCancel(){
        console.log('oncancel');
    }
}
