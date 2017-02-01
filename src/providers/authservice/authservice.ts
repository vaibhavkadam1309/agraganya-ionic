import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Injectable()
export class AuthService {
data:any;
  constructor(private http: Http) {
    this.data ="vaibhav"
  }
}