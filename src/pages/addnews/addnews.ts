import { Component } from '@angular/core';


import {LeftPanelDirective} from '../directives/leftpanel/leftpanel'

@Component({
    templateUrl: 'addnews.html'
})
export class AddNews {
    addnews:any ={};
    constructor() {
       
    }
    onAddNews(){
        console.log('vaibhav');
        console.log(this.addnews);
    }
    onCancel(){
        console.log('oncancel');
    }
}
