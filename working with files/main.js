const fs=require("fs");
// console.log(fs);
console.log("start");
// fs.writeFileSync("ri.txt", "It is a good start");  // writes a blockig code
fs.writeFile("ri2.txt" , 
"It is a good start for learning backend",()=>
{
    console.log("done");
})
// fs.readFile("ri2.txt", (error,  data)=>
//     {
//         console.log(error , data.toString());
        

//     })
fs.appendFile("ri2.txt", "and server side scripting ", (error, data)=>
    {
        console.log( data)

    })
    
console.log("Ending");
