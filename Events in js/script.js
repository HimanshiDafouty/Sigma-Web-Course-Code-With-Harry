console.log("Event tutorial");
let b1= document.getElementById("btn");
b1.addEventListener("click" , ()=>
{
    document.querySelector(".box").innerHTML="Iam Changed";
})