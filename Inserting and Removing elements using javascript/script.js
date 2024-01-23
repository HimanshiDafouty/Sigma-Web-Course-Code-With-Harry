console.log("HIII");
// console.log(document.querySelector(".box"));
// console.log(document.querySelector(".box").innerHTML);
// console.log(document.querySelector(".box").outerHTML);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".box").innerHTML="HII");
console.log(document.querySelector(".box").tagName);
console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".box").hidden);
// console.log(document.querySelector(".box").hidden=true);
console.log(document.querySelector(".box").hasAttribute("class"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style" ,"color:aqua"));
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").removeAttribute("style"));


//document.designMode="on" // can change the content and design of any website

console.log(document.querySelector(".box").dataset);

let div=document.createElement("div");
div.innerHTML=" I have been created <b>by js</b>";
div.setAttribute("style" , "color:brown");
// document.querySelector(".container").append(div);
document.querySelector(".container").prepend(div);


let cont= document.querySelector(".bucket");
cont.innerHTML="Iam a bucket";
cont.insertAdjacentHTML("afterbegin", "<p> I have so much water inside me </p>");
console.log(document.querySelector(".box").classList);
console.log(document.querySelector(".box").className);
console.log(document.querySelector(".box").classList.remove("bake"));
console.log(document.querySelector(".box").classList.add("bun"));
// console.log(document.querySelector(".box").classList.toggle("bun"));
