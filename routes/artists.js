const express = require ('express');
const router = express.Router();

var data = require('../data/artists.json')

router.get('/artists',(req,res)=>{
    var artists = data.artists;
    var html = '';

    artists.forEach((item)=>{
        html+=`
        <li>
            <h1>${item.name}</h1>
            <a href='${item.website}'><img height='240px;' src='${item.artwork}'></a>
            <h3>Location</h3>
            <i>${item.origin}</i>
            <h3>Summary</h3>
            <i>${item.description}</i>
            <br><br>
        </li>
        `
    })
    res.send(`<ul>${html}</ul>`)
})

// router.get('/artists/:artistID',(req,res)=>{
//     let artists = req.app.get('artists');
//     let html = '';

//     let name =  artists.artists[req.param.artistID];

//     res.send(`
//         <h2>${artists.name}</h2>
//     `)

//})



module.exports = router;