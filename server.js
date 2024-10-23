const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname)));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'home.html'));
 });
 app.get('/job-listing',(req,res)=>{
    res.sendFile(path.join(__dirname, 'JobListing.html'));
 });
 app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, 'about_us.html'));
 });
 app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, 'contact.html'));
 });
 app.get('/login',(req,res)=>{
   res.sendFile(path.join(__dirname, 'login.html'));
});
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})

{/* <li class="nav-item"><a href="/" class="nav-link text-white">Home</a></li>
                    <li class="nav-item"><a href="/job-listing" class="nav-link text-white">Job Listings</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link text-white">About Us</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link text-white">Contact</a></li>
                    <li class="nav-item"><a href="/login" class="nav-link text-white">Login</a></li>
                */}
