import { EventEmitter } from "events";

class Store extends EventEmitter {
  constructor() {
    super();
    this.waitingList = new Set();
    this.storedItems = [];
  }

  addItem(item) {
    return this.storedItems.push(item);
  }

  removeItem(item) {
    const itemToRemove = this.storedItems.indexOf(item);
    return this.storedItems.splice(itemToRemove, 1);
  }

  addToWaitingList(customer) {
    return this.waitingList.add(customer);
  }

  sendNotifications() {
    this.waitingList.forEach((customer) => {
      this.emit(
        "newItem",
        `hello ${customer}  product you were waiting for is in the store`
      );
    });
  }
}

const store = new Store();

store.addItem("TTy");

store.addToWaitingList("nati");
store.addToWaitingList("leo");
store.on("newItem", (message) => {
  console.log(message);
});

store.sendNotifications();
