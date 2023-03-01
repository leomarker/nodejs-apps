let id: number = 239847;
let name: string = "TS";
let age: number = 200;
let address: string = "Mars space colonization center";
const SSN: string = "67hm45it3u9a67eo98*";
let are_you_human: any = true;

are_you_human = false;

are_you_human =
  "am not sure i might be AI or an alien what i know is am not really sure";

let friends: string[] = ["Aliens on mars", "AI robots", "Elon Musk"];
let KnownAS: any[] = ["chatbot", { name: "npc" }, "007", 8];
let Items: [string, number, number][];

Items = [
  ["book", 1, 5],
  ["books", 1, 5],
  ["lots of book", 1, 5],
  ["no a lots of book", 1, 5],
];

let productID: string | number;

productID = "book";
productID = 10;

enum Directions {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

type User = {
  id: string;
  name: string;
  age: number;
  address: string;
};

let user: User = {
  id: "asdfsadf",
  name: "AI",
  age: 200,
  address: "mars",
};

interface Maths {
  (x: number, y: number): number;
}
let sum: Maths = (x: number, y: number): number => x + y;

interface ItemsInterface {
  id: number;
  name: string;
  quantity: string;
  register(): string;
}

class ItemsForSale implements ItemsInterface {
  id: number;
  name: string;
  quantity: string;

  constructor(id: number, name: string, quantity: string) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  register(): string {
    return `${this.name} is registered`;
  }
}

class Shipment extends ItemsForSale {
  Address: string;

  constructor(Address: string, id: number, name: string, quantity: string) {
    super(id, name, quantity);
    this.Address = Address;
  }
}
