import EventEmitter from "EventEmitter";

class Store extends EventEmitter {
  constructor() {
    super();
    this.waitingList = new Map();
    this.items = [];
  }

  addItem() {}

  removeItem() {}

  addToWaitingList() {}

  sendNotifications() {}
}
