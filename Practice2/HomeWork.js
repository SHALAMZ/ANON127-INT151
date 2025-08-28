let Box1 = {
    name: "Apple",
    amount: 10,
    price: 100
}
let Box2 = {
    name: "Banana",
    amount: 10,
    price: 50
}
let Box3 = {
    name: "Watermelon",
    amount: 15,
    price: 150
}
let Box4 = {
    name: "Apple",
    amount: 5,
    price: 50
}
let Box5 = {
    name: "Apple",
    amount: 10,
    price: 100
}

function ChecksomethingEqual(object1, object2) {
    const matchingKeys = [];

    for (let key in object1) {
        if (object1.hasOwnProperty(key) && object1[key] === object2[key]) {
            matchingKeys.push(key);
        }
    }

    if (matchingKeys.length === 0) {
        return "There are no matching keys in both Box.";
    } else {
        return `Matching keys: [${matchingKeys}] are equal in both Box.`;
    }
}

console.log(ChecksomethingEqual(Box1, Box2));
console.log(ChecksomethingEqual(Box1, Box3));
console.log(ChecksomethingEqual(Box1, Box4));
console.log(ChecksomethingEqual(Box1, Box5));