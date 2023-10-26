/* 
1. Observable (subject) that is observed by other objects which will notify the observers that the state of the observable (subject) has changes 
2. Observers this are objects that wait for a state with the observer to change and act on the new event(state change)

*/

class NewsLatter {
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(subscriber) {}

  removeSubscriber(subscriber) {}

  notify() {}

  newNewsLatter() {}
}

class Subscriber {
  constructor() {}

  update() {}
}
