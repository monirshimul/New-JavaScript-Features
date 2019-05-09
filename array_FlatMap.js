

const duplicate = x => [x, x];

// function dupli(x) {
//     return [x, x];
// }

let arr = [4, 2, 8];
let justMap = arr.map(duplicate);
console.log(justMap);
let justMapflat = justMap.flat();
console.log(justMapflat);
//let copy = arr.flatMap(dupli);
//console.log(copy);