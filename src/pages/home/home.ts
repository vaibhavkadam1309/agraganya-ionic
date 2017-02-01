import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {NewsPopUp} from '../../pages/newspopup/newspopup'
import {AuthService} from '../../providers/authservice/authservice';

@Component({
    templateUrl: 'home.html',
    providers:[AuthService]
})
export class Home {
    items:any;
    constructor(public navCtrl: NavController, public navParams: NavParams,private modalController:ModalController,private authService:AuthService) {
        console.log(this.authService)
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man',
            'Super Mario World',
            'Street Fighter II',
            'Half Life',
            'Final Fantasy VII',
            'Star Fox',
            'Tetris',
            'Donkey Kong III',
            'GoldenEye 007',
            'Doom',
            'Fallout',
            'GTA',
            'Halo'
        ];
    }
    newsSelected(){
        let modal = this.modalController.create(NewsPopUp);
        modal.present();
        
    }
}
