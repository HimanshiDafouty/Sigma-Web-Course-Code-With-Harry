async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3000);
  });
}
async function getInfo()
{
  let x= await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let info= await x.text;
 console.log(x);
 return 455;

 //fetch api ko do bar await karke pass karna hota hai , sabse pehle ek promise return karta hai , phir usko hum parse karte hai vo bhi ek promise return karta hai, ek data lane ki promise aur ek data parse karne ki promise 
}



// promise ke settle hone ke intezar karne ke liye await ka use karte hai
// settle ka mtlb resolve ya reject 
// resolve ka mtlb hai ki promise successfully settle ho gayi hai 
// reject ka mtlb hai ek settle nahi ho payi hai successfully


async function main(){
// console.log("Loading modules");
// console.log("do");
// console.log("load data");
// let data = await getData();
// console.log(data);
// console.log("process data");
// console.log("task 2");
let info=await getInfo();
console.log(info);

}
main()

// data.then(() => {
//   console.log(data);
//   console.log("process data");
//   console.log("task 2");
// });       //callback approach


