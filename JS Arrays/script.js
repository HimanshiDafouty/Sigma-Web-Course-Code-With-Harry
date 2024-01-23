let arr=[1,2,3,4];
console.log(arr);
console.log(arr.length);
arr[0]=566;  // arrays are a mutable
console.log(typeof arr);
console.log(arr.toString);
console.log(arr.join('and'));
console.log(arr.pop())
console.log(arr.shift());
console.log(arr.push('new'));
console.log(arr.unshift('new'));
console.log(arr)

//shift pop
//unshift push

let b=[2,3,4,5];
for (let index = 0; index <b.length; index++) {
    const element =b[index];
    console.log(element);
    
}
let newArr= b.map((e)=>
{
    return e**2;
})
console.log(newArr);
const seven=(e)=>
{
    if(e==7)
    return true;
}

newArr.filter(seven)
//Array.from("RRR")

