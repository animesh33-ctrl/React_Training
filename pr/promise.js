// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task executed");
//         resolve()
//         reject()
//     },2000)
// })

// myPromise.then(()=>{
//     console.log("Promise Successfully Executed!!!")
// }).catch(()=>{
//     console.log("Error Successfully Handled")
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async 2")
//         resolve({username:"Animesh Palui",email:"paluianimesh31@gmail.com"})
//     },2000)
// }).then((user)=>{
//     console.log(user);
// })

// new Promise((resolve,reject)=>{
//     let error = false
//     if(error){
//         reject("ERROR: Something went wrong")
//     }
//     else{
//         resolve({username:"Animesh Palui",email:"paluianimesh31@gmail.com"})
//     }
// })
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username)
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(()=> console.log("Promise is finally resolved or rejected!!!!"))

// const promiseSecond = new Promise((resolve,reject)=>{
//     let error = true
//     if(error){
//         reject({message:"Rejected",statusCode:404})
//     }
//     else{
//         resolve({username:"Animesh Palui",email:"paluianimesh31@gmail.com"})
//     }
// })

// const consumePromise = async () => {
//     try {
//         const response = await promiseSecond
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromise()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch(error => console.log(error))