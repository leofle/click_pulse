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
        "timestamp":"1472116500942",
        "error_msg":"error message schedule"
      },{
        "name":"Mobile",
        "pod":"podev",
        "status":"highlight_off",
        "timestamp":"1472116500942",
        "error_msg":"error message mobile"
      },{
        "name":"Integration",
        "pod":"podev",
        "status":"done",
        "timestamp":"1472116500942",
        "error_msg":"error message integration"
      }
    ];
  }
  // getItems() {
  // return this._http.get("http://Yoavs-MacBook.local:8080/api/pulse")
  //   .map(res => res.json());
  // };

}
