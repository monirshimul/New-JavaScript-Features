// Object.from Entries


console.log('===================================================')

const objOne = {
    x: 45,
    y: 89
}

const entryvalue = Object.entries(objOne);
console.log(entryvalue);
const result = Object.fromEntries(entryvalue);
console.log(result);


for (const [m, o] of entryvalue) {
    console.log(`the value of ${m} is ${o}`);
}

console.log('===================================================')

const objTwo = {
    x: 45,
    y: 89,
    abc: 1001
}

const res = Object.fromEntries(
    Object.entries(objTwo)
        .filter(([key, value]) => key.length === 1)
        .map(([key, value]) => [key, value * 2])

);
console.log(res);


console.log('===================================================')

// Converting object into a map and reverse=========

const objThree = {
    lang: 'javaScript',
    rating: 89
}

const convertintoMap = new Map(Object.entries(objThree));
console.log(convertintoMap);
const reverseConvert = Object.fromEntries(convertintoMap);
console.log(reverseConvert);