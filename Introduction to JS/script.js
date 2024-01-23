alert("hello world");
console.log("HII"); // it lets us know , till where the execution happend
document.title="JS"
document.body.style.backgroundColor="aqua";

var isTrue=confirm("Are you sure you want to add two numbers")
if(isTrue)
{
    var a= prompt("enter first number:");
    var b=prompt("enter second number:");
    var c=a+b;
    alert("Sum is "+ c);
    console.log("exection finsihed");
}
else{
    alert("Sum will not be calculated");
}