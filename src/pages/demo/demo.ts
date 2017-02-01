import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {LeftPanelDirective} from '../directives/leftpanel/leftpanel'

@Component({
    templateUrl: 'demo.html'
})
export class Demo {
    result:any
    constructor(public navCtrl: NavController, public navParams: NavParams) {
       this.result = 2+3;
    }
  
}
