/* 
1. Observable (subject) that is observed by other objects which will notify the observers that the state of the observable (subject) has changes 
2. Observers this are objects that wait for a state with the observer to change and act on the new event(state change)

*/

class NewsLetter {
  constructor() {
    this.subscribers = [];
    this.newsLetter = {};
  }

  addSubscriber(subscriber) {
    const hasAlreadySubscribed = this.subscribers.includes(subscriber);

    if (hasAlreadySubscribed) {
      return console.log("has already subscribed to this NewsLetter");
    }
    console.log(
      `Dear ${subscriber.name} have been added to the NewsLetter Subscription`
    );
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber) {
    const newsLetterSubscriber = this.subscribers.indexOf(subscriber);

    if (newsLetterSubscriber === -1) {
      return console.log(
        "Hmmmm it dons't look like you are subscribe to this NewsLetter"
      );
    }

    this.subscribers.splice(newsLetterSubscriber, 1);
    console.log("ooh! we are sorry to see you go!!");
  }

  notify() {
    for (const subscriber of this.subscribers) {
      subscriber.update(this.newsLetter);
    }
  }

  composeNewLetter(date, title, body) {
    this.newsLetter = {
      date: date,
      title: title,
      body: body,
    };

    console.log("New letter is ready to go out");
    this.notify();
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(newsLetter) {
    console.log(
      `hey i am ${this.name} and i  have received the new news letter ${newsLetter} `
    );
  }
}
