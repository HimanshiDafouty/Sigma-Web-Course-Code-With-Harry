console.log("this is promise");
let prom1= new Promise((resolve, reject)=>
{
    let a=Math.random();
    if(a<0.5)
    {
        reject("error");
    
    }
    else{
        setTimeout(()=>
        {
            console.log("iam done ");
            resolve("done");
        },3000)
    } })

prom1.then((value)=>
{
    console.log(value);
}).catch((err)=>
{
    console.log(err);
})