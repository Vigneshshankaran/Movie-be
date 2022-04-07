const moviesRouter = require('./routes/MoviesRouter');

const express = require('express');
const app = express();


const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors()); /* To avoid cross origin error */
app.use(express.json());


const mongoString = process.env.DATABASE_URL;


const mongoose = require('mongoose');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use('/api', moviesRouter)


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });