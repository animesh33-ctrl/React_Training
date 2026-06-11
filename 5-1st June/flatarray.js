const arr=[1,2,3,4,[5,6],[7,8]];

console.log(arr.flat());

const arr2=[1,2,3,4,[[5,6],[7,8]]];
console.log(arr2.flat(2));


const arr3=[1,2,[3,[4,[[5,6]],[7,8]]]];
console.log(arr3.flat(Infinity));

