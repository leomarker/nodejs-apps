"use strict";
let id = 239847;
let name = "TS";
let age = 200;
let address = "Mars space colonization center";
const SSN = "67hm45it3u9a67eo98*";
let are_you_human = true;
are_you_human = false;
are_you_human =
    "am not sure i might be AI or an alien what i know is am not really sure";
let friends = ["Aliens on mars", "AI robots", "Elon Musk"];
let KnownAS = ["chatbot", { name: "npc" }, "007", 8];
let Items;
Items = [
    ["book", 1, 5],
    ["books", 1, 5],
    ["lots of book", 1, 5],
    ["no a lots of book", 1, 5],
];
let productID;
productID = "book";
productID = 10;
var Directions;
(function (Directions) {
    Directions["North"] = "North";
    Directions["East"] = "East";
    Directions["South"] = "South";
    Directions["West"] = "West";
})(Directions || (Directions = {}));
let user = {
    id: "asdfsadf",
    name: "AI",
    age: 200,
    address: "mars",
};
let sum = (x, y) => x + y;
class ItemsForSale {
    constructor(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }
    register() {
        return `${this.name} is registered`;
    }
}
class Shipment extends ItemsForSale {
    constructor(Address, id, name, quantity) {
        super(id, name, quantity);
        this.Address = Address;
    }
}
