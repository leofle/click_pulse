import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  items:Array<any>;

  getItemsMock() {
    return this.items;
  }

  constructor(private _http: Http) {
    this.items = [
      {
        "name":"Schedule",
        "pod":"podev",
        "status":"highlight_off",
        "timestamp":"1472116500942"
      },{
        "name":"Mobile",
        "pod":"podev",
        "status":"highlight_off",
        "timestamp":"1472116500942"
      },{
        "name":"Integration",
        "pod":"podev",
        "status":"done",
        "timestamp":"1472116500942"
      }
    ];
  }
  // getItems() {
  // return this._http.get("http://Yoavs-MacBook.local:8080/api/pulse")
  //   .map(res => res.json());
  // };

}
