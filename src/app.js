const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../template/views");
const partialpath = path.join(__dirname,"../template/partials");
app.set("views",templatepath);
app.set('view engine','hbs');
app.use(express.static(staticpath));
hbs.registerPartials(partialpath);
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render("404",{
        errormsg:"Opps Page Not Found"
    });
});
app.listen(port,()=>{
    console.log("listening to port 3000");
})