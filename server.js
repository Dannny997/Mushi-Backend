const express = require('express');
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const organiser =require('./routes/api/organiser');
const bodyparse=require('body-parser')


const app = express();
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json())


mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(() => console.log('mongodbconnected'))
.catch(err => console.log(err));





app.get('/go/shop', (req, res) => res.send('hello brother welcome to munshi event'));
app.get('/go', (req, res) => res.send('Go'));


app.use('/api/users',users);
app.use('/api/organiser',organiser);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));

