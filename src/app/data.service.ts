import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  items: Array<any>;

  // getItemsMock() {
  //   return this.items;
  // }

  constructor(private _http: Http) {
    // this.items = [
    //   {
    //     'name': 'Schedule',
    //     'pod': 'podev',
    //     'status': 'warning',
    //     'timestamp': '1472116500942',
    //     'error_msg': 'error message schedule',
    //     'regions': [
    //       {
    //         'name': 'U.S',
    //         'status': 'warning'
    //       },
    //       {
    //         'name': 'Australia',
    //         'status': 'done'
    //       },
    //       {
    //         'name': 'Europe',
    //         'status': 'highlight_off'
    //       },
    //     ]
    //   }, {
    //     'name': 'Mobile',
    //     'pod': 'podev',
    //     'status': 'warning',
    //     'timestamp': '1472116500942',
    //     'error_msg': 'error message mobile',
    //     'regions': [
    //       {
    //         'name': 'U.S',
    //         'status': 'done'
    //       },
    //       {
    //         'name': 'Australia',
    //         'status': 'warning'
    //       },
    //       {
    //         'name': 'Europe',
    //         'status': 'done'
    //       },
    //     ]
    //   }, {
    //     'name': 'Integration',
    //     'pod': 'podev',
    //     'status': 'done',
    //     'timestamp': '1472116500942',
    //     'error_msg': 'error message integration',
    //     'regions': [
    //       {
    //         'name': 'U.S',
    //         'status': 'done'
    //       },
    //       {
    //         'name': 'Australia',
    //         'status': 'done'
    //       },
    //       {
    //         'name': 'Europe',
    //         'status': 'done'
    //       },
    //     ]
    //   }
    // ];
  }
  getItems() {
  return this._http.get("http://10.66.1.23:49160/api/pulse")
    .map(res => res.json());
  };

}
