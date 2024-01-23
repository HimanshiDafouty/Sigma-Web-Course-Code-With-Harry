async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
(async function main() {
  let a = await sleep();
  console.log(a);

  let b = await sleep();
  console.log(b);

  let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
  console.log(x, y, rest);




  let arr=[1,4,6];
  console.log(sum(arr[0], arr[1], arr[2]));
  console.log(sum(...arr));
  // spread operator
  
})(); // IIFE : IMMEDIALTELY INVOKED FUNCTION EXPRESSION
//hoisting: declaration move on the top
//let or cont mein hoistig nahi hoti hai