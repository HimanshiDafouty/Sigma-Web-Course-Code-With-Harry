console.log("js is running");
let a =prompt("Enter first number:");
let b =prompt("Enter second number:");
if(isNaN(a) || isNaN(b))
{
    throw SyntaxError("Sorry this is not allowed , enter a number");
}
let sum= parseInt(a)+ parseInt(b);



//prompt gives string


function main()
{
    let X=1;
    try {
        console.log("SUM = "+ sum*X);
        return true;
    } catch (error) {
        console.log("Error!!");
        return false;
        
    }
    finally{
        console.log("files being closed")
    }
    //function ke andar jab bi return statement ho try ho ya catch ho uske baad bhi niche ka code chal jaye to finally block ka use karte hai
   //function ke andar vapis jane ke baad bhi ye code chale isiliye ye finally block use karte hai

}
let c = main();