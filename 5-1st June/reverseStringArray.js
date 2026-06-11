const arr = ["Institute","of","Engineering","and","Management"];
console.log(arr.reverse());

const array = [1,2,3,4,5,6,7,8,9,10,11];
let i=0,j=array.length-1;
while(i<j){
    [array[i],array[j]] = [array[j],array[i]]; // array destructuring it is
    console.log("i = ",i," j= ",j);
    i++;
    j--;
}
console.log(array)
