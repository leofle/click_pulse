import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  items:Array<any>;

  constructor() {
    this.items = [
      {
        "name":"Schedule",
        "status":"done"
      },{
        "name":"Mobile",
        "status":"highlight_off"
      },{
        "name":"Integration",
        "status":"done"
      }
    ];
  }

  getItems() {
    return this.items;
  }

  // constructor(private _http: Http) { }
  // getItems() {
  // return this._http.get("http://jsonplaceholder.typicode.com/users/1")
  //   .map(res => res.json());
  // };

}