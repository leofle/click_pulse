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
        "status":"good"
      },{
        "name":"Mobile",
        "status":"bad"
      },{
        "name":"Integration",
        "status":"good"
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
