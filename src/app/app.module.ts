import { NgModule, ErrorHandler, } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LeftPanelDirective } from '../directives/leftpanel/leftpanel'
import { FooterPanelDirective } from '../directives/footerpanel/footerpanel'
import { HeaderPanelDirective } from '../directives/headerpanel/headerpanel'
import { RightPanelDirective } from '../directives/rightpanel/rightpanel'
import { Home } from '../pages/home/home';
import { AddNews } from '../pages/addnews/addnews';
import { Demo } from '../pages/demo/demo'
import { NewsPopUp } from '../pages/newspopup/newspopup'
import { Login } from '../pages/login/login'
import { NewsList } from '../pages/newslist/newslist'
import { Routes,RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MyApp,
    Home,
    LeftPanelDirective,
    FooterPanelDirective,
    HeaderPanelDirective,
    RightPanelDirective,
    AddNews, Demo,
    NewsPopUp,
    Login,
    NewsList
  ],
  imports: [ 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    LeftPanelDirective,
    FooterPanelDirective,
    HeaderPanelDirective,
    RightPanelDirective,
    AddNews, Demo,
    NewsPopUp,
    Login,
    NewsList

  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
