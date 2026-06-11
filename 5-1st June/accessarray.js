const arr = [1,2,3,4,5,6,7,8,9];
arr.forEach(item => console.log(item));

const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
array.forEach(item => {
    console.log(item.join(" "));
});