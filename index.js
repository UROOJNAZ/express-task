const express = require('express');
const app = express();
const port = 2020;

app.get('/', (req, res) => {
    res.send('hello world')

});
   
app.get ('/about',(req,res) =>{
    res.send("<h1>what we do</h1>")
    
});
app.get ('/our-works',(req,res) =>{
    res.send('what we did')
    
}); 
app.get ('/our-team',(req,res) =>{
    res.send('Meet our team')
    
});
app.get ('/services',(req,res) =>{
    res.send('look our team plan for services')
    
});
app.get ('/contact',(req,res) =>{
    res.send('look our team plan for services')
    
});
app.get ('/the FAQ page',(req,res) =>{
    res.send('look our team plan for services')
    
});

app.get ('/home',(req,res) =>{
    res.send('A request for things received at')
    
});

app.get ('/the FAQ page',(req,res) =>{
    res.send('look our team plan for services')
    
});
app.listen(port,() =>{
console.log(`example app listening on port ${port}!`);
});
