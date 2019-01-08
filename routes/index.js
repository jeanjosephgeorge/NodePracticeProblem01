const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send(`
    <h1>Welcome to the index!</h1>
    <h2>Click <a href='/artists'>here</a> to see some bands I like.</h2>
    <h2>And here's a picture of a kitten.</h2>
    <img src='http://en.bcdn.biz/Images/2018/6/12/f6042203-e5b2-4ddf-9c81-2ea5b0577bdb.jpg'>
    `);
})

module.exports = router;