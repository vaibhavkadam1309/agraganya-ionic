import { Component } from '@angular/core';

import { NavController, NavParams,ViewController } from 'ionic-angular';
import {LeftPanelDirective} from '../directives/leftpanel/leftpanel'

@Component({
    templateUrl: 'login.html'
})
export class Login {
    credentials:any ={};
    constructor(public navCtrl: NavController, public navParams: NavParams,private viewController:ViewController) {
       
    }
    onAddNews(){
        console.log('vaibhav');
    }
    onCancel(){
        console.log('oncancel');
    }
}
