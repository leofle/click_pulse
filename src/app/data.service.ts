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
}
