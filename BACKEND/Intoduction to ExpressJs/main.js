const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))//app.use miiddleware ko use karne ke liye use hota hai , express.static ek built in miiddleware hai jo ki kehta hai ki public folder ko public bana do
//app.get or app.post or app.put or app.delete(path , handler)
app.get('/', (req, res) => {
  res.send('Hello World34!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/blog/:slug', (req,res)=>
{
  console.log(req.params)
  console.log(req.query)
    res.send(`This is blog post ${req.params.slug}`)
})


// by default we use get request
//params aata as varaible in url 