// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

console.log(cats);

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

// const copyCats = [...cats];

function appendCat(name) {
   var newArray = [...cats];
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    var newArray = [...cats];
    newArray.unshift(name);
    return newArray;
}

function removeLastCat(name) {
    var newArray = [...cats];
    newArray.pop(name);
    return newArray;
}

function removeFirstCat(name) {
    var newArray = [...cats];
    newArray.shift(name);
    return newArray;
}