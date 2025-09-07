const express  =require('express');
const app = express()
const port  =5000;
app.get('/',(req,res) =>{
    res.send("i am hari ")
});
app.get("/home",(req,res)=>{
     res.json([
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Build Task Manager" }
     ])
})

app.listen(port,() =>{
    console.log(`http://localhost:${port}`);
})