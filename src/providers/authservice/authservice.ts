import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {AppConstants} from '../../providers/common/common'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  leftPanelData: any;
  constructor(private http: Http) {
    this.leftPanelData = [
      'चालू घडामोडी',
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
  //available user logged in
  addNews(newsObject) {
    console.log("AuthService: in Login");
    return new Promise(resolve => {
      this.http.post(AppConstants.API_ENDPOINT + 'addNews', newsObject)
        .map(res => res.json())
        .subscribe(result => {
          console.log(result)
          let data = result;
          resolve(data);
        },
        err => { throw new Error("Database connection not available please contact to Administrator !!!!!") },
        () => console.log('service successfully execute'));
    });
  }
  fetchNews() {
    console.log("AuthService: in Login");
    return new Promise(resolve => {
      this.http.get(AppConstants.API_ENDPOINT + 'addNews')
        .map(res => res.json())
        .subscribe(result => {
          console.log(result)
          let data = result;
          resolve(data);
        },
        err => { throw new Error("Database connection not available please contact to Administrator !!!!!") },
        () => console.log('service successfully execute'));
    });
  }
}