const res = await fetch('https://dummyjson.com/products')
let data = await res.json()
data = data.products;
for(let i=0;i<data.length;i++)
console.log(data[i].categories);

//const phone = data.filter(item => item.category.toLowerCase().includes('phone')
//console.log(phone)