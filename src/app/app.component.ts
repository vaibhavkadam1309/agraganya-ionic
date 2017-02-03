import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';


import { Home } from '../pages/home/home'
import { AddNews } from '../pages/addnews/addnews'
import { LeftPanelDirective } from '../directives/leftpanel/leftpanel'
import { FooterPanelDirective } from '../directives/footerpanel/footerpanel'
import { AuthService } from '../providers/authservice/authservice';

import { Demo } from '../pages/demo/demo'
import {Login} from '../pages/login/login'
import {NewsList} from '../pages/newslist/newslist'

@Component({
  templateUrl: 'app.html',
  providers: [AuthService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = NewsList;
  items:any;
  constructor(public platform: Platform,public menu: MenuController, private authService: AuthService) {
    this.initializeApp();
      

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
  //  this.nav.setRoot(page.component);
  }
}
