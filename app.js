const express = require('express');
const app = express();

app.use(express.static('public')); // This is our static public folder

app.use(require('./routes/index.js'));
app.use(require('./routes/artists.js'));

app.listen(4000,()=>{
    console.log('Running on port 4000');
})
