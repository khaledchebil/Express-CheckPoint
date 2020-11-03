const express = require('express');
const app = express();
const cron = require('node-cron')
const port = 3000;

let today = new Date();
const day = today.getDay();
const hours = today.getHours();


var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))

const myLogger =(req, res, next) => {
let temp= false;

switch(days[day]) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday': temp = true
    if(temp === true && hours>=9 && hours<= 17) {
    console.log('Today is '+ days[day] + ' now is: '+ hours +'h Our website is accessible')
    next() }
    else res.render('err')
    console.log('Our website available only on Mon to Fri, from 9am to 5pm and today is '+ days[day] + ' now is: '+ hours +'h')
}
   
            } 
    

app.use(myLogger)

app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/contact', (req, res)=> {
    res.render('contact')
})

app.get('/about', (req, res)=> {
    res.render('about')
})


app.listen(port, ()=> console.info(`listening on port ${port}`))