const moviesRouter = require('./routes/moviesRouter');

const express = require('express');
const app = express();


const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors()); /* To avoid cross origin error */
app.use(express.json());


const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT;


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


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})