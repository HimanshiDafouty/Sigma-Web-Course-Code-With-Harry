const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"))

app.get("/", (req, res) => {
  console.log("It is a get request");
  res.send("Hello World5207418!");
});

app.post('/', (req,res)=>
{
    console.log("It is a post request")
    res.send('Got a post request')
})

app.put('/', (req,res)=>
{
    console.log("It is a put request")
    res.send('Got a put request')
})

app.get("/index", (req,res)=>
{
  console.log("This is index");
  res.send("HELLO WORLD INDEX");
  
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//get request has acharacter limit and is used to send very minimal queries
//for sensitive information , long content post request is used
